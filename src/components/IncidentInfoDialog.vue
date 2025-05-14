<script setup>
  import {valid} from "js.spec";
  import {isIncident} from "@/domain/timeline-data.spec.js";
  import IncidentInfoDialogActions from "@/components/IncidentInfoDialogActions.vue";

  defineProps({
    data: {validator: valid.bind(undefined, isIncident)}
  })
</script>

<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card :title="data.title"
              v-bind="activatorProps"
              link />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="data.title" :text="data.summary">
        <incident-info-dialog-actions
            :data
            @close="isActive.value = false"/>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>