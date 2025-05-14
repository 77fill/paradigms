<script setup>
import {valid} from "js.spec";
import {isIncident} from "@/domain/timeline-data.spec.js";

  defineProps({
    data: {validator: valid.bind(undefined, isIncident)}
  })
</script>

<template>
  <v-card-actions>
    <v-spacer></v-spacer>

    <div class="dialog-actions">
      <template v-for="link in data.seeAlsoLinks">
        <a :href="link[0]" class="dialog-link">
          {{link[1]}}
        </a>
      </template>

      <v-btn
          class="dialog-button-close"
          width="100%"
          text="Close"
          @click="$emit('close')"
      ></v-btn>
    </div>
  </v-card-actions>
</template>

<style scoped>
  .dialog-actions {
    margin: 0;
    padding: 3px;
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
  }

  .dialog-link {
    display: inline-block;
    margin-right: 50px;
  }

  .dialog-button-close {
    margin-top: 10px;
  }
</style>