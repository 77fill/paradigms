<script setup>
  import {valid} from "js.spec";
  import {isIncident} from "@/domain/timeline-data.spec.js";

  defineProps({
    data: {validator: valid.bind(undefined, isIncident)}
  })
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card :title="data.title"
              v-bind="activatorProps"
              link />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="data.title" :text="data.summary">
        <v-card-actions>
          <v-spacer></v-spacer>

          <template v-for="link in data.seeAlsoLinks">
            <a :href="link[0]">
              {{link[1]}}
            </a>
          </template>

          <v-btn
              text="Close"
              @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>