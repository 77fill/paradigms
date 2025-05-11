<script setup>
    import moment from 'moment'
    import Step from "@/components/Step.vue";

    const {pointInTime, yearToX, shortTitle} = defineProps({
        pointInTime: {validator: moment.isMoment},
        shortTitle: String,
        yearToX: Function
    })

    const x = yearToX(pointInTime.year())
    const width = shortTitle.length + 'em'
</script>

<template>
  <Step
      :x :date="pointInTime"
      underline/>
  <g class="moment-text-and-box">
    <rect
        class="moment-text-box"
        :x :width
        />
    <text
        class="moment-text"
        :x :textLength="width"
        lengthAdjust="spacingAndGlyphs">
      {{shortTitle}}
    </text>
  </g>
</template>

<style scoped>
    .moment-text-box {
      fill: transparent;
      stroke: transparent;
      stroke-width: 0;
      y: -40;
      height: 1em;
      cursor: default;
    }

    .moment-text {
      y: -25;
    }

    .moment-text, .moment-text-box {
      transform: translate(-50%, -50%);
      transform-box: content-box;
    }

    .moment-text-and-box {
      cursor: default;

      &:hover {
        cursor: pointer;
      }
    }

    .moment-text-and-box:hover > .moment-text-box, .moment-text-box:hover {
        fill: cornflowerblue;
        cursor: pointer;
    }
</style>