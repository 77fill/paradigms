<script setup>
  import TimeLine from "./components/TimeLine.vue"
  import Moment from "./components/Moment.vue"

  import Scale from "./domain/scale.js"
  import Duration from "./domain/duration.js"
  import Unit from "./domain/unit.js"
</script>

<template>
  <main>
    <TimeLine 
      width="100%" 
      height="200px" 
      :start="new Date('1940-01-01')" 
      :end="new Date('1990-01-01')" 
      :scale="new Scale(50, Unit.PIXEL, 1, Unit.YEAR)" 
      :step="new Duration(5, Unit.YEAR)"
      v-slot="{yearToX}"
      >
      <Moment :point-in-time="new Date('1968-01-01')" short-title="Structured Programming" :year-to-x="yearToX">
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
