<script setup>
  import TimeLine from "./components/TimeLine.vue"
  import Moment from "./components/Moment.vue"
</script>

<template>
  <main>
    <TimeLine width="100%" height="100%" start="1940" end="1990" scale="50px" step="5y">
      <Moment point-in-time="1968" short-title="Structured Programming">
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
