<script setup>
  import timelineData from "@/domain/timeline-data.js";
  import Timeline from "@/components/Timeline.vue";
  import TimelineItem from "@/components/TimelineItem.vue";
</script>

<template>
  <v-app>
    <v-main>
      <timeline>
        <timeline-item
            v-for="incident in timelineData"
            :data="incident" />
      </timeline>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
