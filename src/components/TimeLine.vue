<script setup>
    import {computed} from "vue"
    import moment from "moment"
    import Scale from "../domain/scale.js"
    import StepData from "../domain/step.js"
    import Step from "./Step.vue"

    const {start, end, step, scale, marginPercentage} = defineProps({
        width: String,
        height: String,
        start: {validator: moment.isMoment},
        end: {validator: moment.isMoment},
        step: {validator: moment.isDuration},
        scale: Scale,
        marginPercentage: {
          default: () => 0.1,
          validator: (val) => 0 <= val && val <= 0.8
        }
    })

    const widthInYears = computed(() => end.year() - start.year())
    const widthInViewBox = computed(() => scale.toModel(widthInYears.value, 'years'))
    const margin = computed(() => widthInViewBox.value * marginPercentage)
    const marginBoxWidthInViewBox = computed(() => widthInViewBox.value + margin.value * 2)

    const steps = computed(() => StepData.getStepsFor(start, end, step, scale))

    const yearToX = 
        (year) => {
            const yearsFromStart = year - start.year()
            return -widthInViewBox.value/2 + scale.toModel(yearsFromStart, 'years')
        }

    const viewBox = `${-widthInViewBox.value/2 - margin.value} -50 ${widthInViewBox.value+2*margin.value} 100`
</script>

<template>
    <svg :width :height xmlns="http://www.w3.org/2000/svg" :viewBox preserveAspectRatio="none">
        <line :x1="-widthInViewBox/2" y1="0" :x2="widthInViewBox/2" y2="0" stroke="black" />
        <Step v-for="step in steps" :x="step.x" :date="step.date" />
        
        <slot :year-to-x="yearToX"/>
    </svg>
</template>

<style scoped>
  * {
    font-family: sans-serif;
    font-size: 16px;
  }
</style>