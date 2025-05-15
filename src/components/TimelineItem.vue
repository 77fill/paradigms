<script setup>
  import {valid} from "js.spec";
  import {hasIcon, isIncident} from "@/domain/timeline-data.spec.js";
  import IncidentInfoDialog from "@/components/IncidentInfoDialog.vue";

  defineProps({
    data: {validator: valid.bind(undefined, isIncident)}
  })

  const iconSize = "120px"
</script>

<template>
  <v-timeline-item :size="iconSize">
    <template v-slot:icon v-if="valid(hasIcon, data)">
      <v-img class="icon" :src="data.iconUrl" inline :width="iconSize" :height="iconSize"/>
    </template>

    <template v-slot:opposite>
      <v-chip variant="elevated" size="large">
        {{ data.date.year() }}
      </v-chip>
    </template>

    <template v-slot:default>
      <incident-info-dialog :data />
    </template>
  </v-timeline-item>
</template>

<style scoped>
  .icon {
    border-radius: 50%;
  }
</style>