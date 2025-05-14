<script setup>
  import {valid} from "js.spec";
  import {hasIcon, isIncident} from "@/domain/timeline-data.spec.js";
  import IncidentInfoDialog from "@/components/IncidentInfoDialog.vue";

  defineProps({
    data: {validator: valid.bind(undefined, isIncident)}
  })
</script>

<template>
  <v-timeline-item>
    <template v-slot:icon v-if="valid(hasIcon, data)">
      <v-img :src="data.iconUrl" inline width="30px" height="30px"/>
    </template>

    <template v-slot:opposite>
      <v-chip variant="elevated">
        {{ data.date.toString() }}
      </v-chip>
    </template>

    <template v-slot:default>
      <incident-info-dialog :data />
    </template>
  </v-timeline-item>
</template>

<style scoped>

</style>