<script setup>
    import moment from 'moment'
    import Step from "@/components/Step.vue";

    const {pointInTime, yearToX} = defineProps({
        pointInTime: {validator: moment.isMoment},
        shortTitle: String,
        yearToX: Function
    })

    const x = yearToX(pointInTime.year())
</script>

<template>
  <Step :x :date="pointInTime" underline/>
  <text :x y="-25" :textLength="shortTitle.length + 'em'" lengthAdjust="spacingAndGlyphs" class="moment-text">
    {{shortTitle}}
  </text>
</template>

<style scoped>
    .moment-text {
        transform: translate(-50%, -50%);
        transform-box: content-box;
    }
</style>