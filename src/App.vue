<script setup>
  import TimeLine from "./components/TimeLine.vue"
  import Moment from "./components/Moment.vue"

  import Scale from "./domain/scale.js"
  import Duration from "./domain/duration.js"
  import Unit from "./domain/unit.js"

  import moment from "moment";
</script>

<template>
  <main>
    <TimeLine 
      width="100%" 
      height="200px" 
      :start="moment('1940')"
      :end="moment('1990')"
      :scale="new Scale(50, Unit.VIEW_BOX_UNIT, 1, 'year')"
      :step="moment.duration(5, 'years')"
      v-slot="{yearToX}"
      >
      <Moment :point-in-time="moment('1968')" short-title="Structured Programming" :year-to-x="yearToX">
        "Go To Statement Considered Harmful" open letter in 1968 by Dutch computer scientist Edsger W. Dijkstra
      </Moment>
    </TimeLine>
  </main>
</template>

<style scoped>
  main {
    margin: 50px 50px;
    border-radius: 20px;
    background-color: aquamarine;
  }
</style>
