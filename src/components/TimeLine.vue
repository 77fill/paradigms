<script setup>
    import {computed} from "vue"
    import moment from "moment"
    import Scale from "../domain/scale.js"
    import StepData from "../domain/step.js"
    import Step from "./Step.vue"

    const widthInPx = 200
    const margin = 25
    const MILLIS_IN_A_YEAR = 1000*60*60*24*365

    const {start, end, step, scale} = defineProps({
        width: String,
        height: String,
        start: {validator: moment.isMoment},
        end: {validator: moment.isMoment},
        step: {validator: moment.isDuration},
        scale: Scale
    })

    const steps = computed(() => {
        const stepInPx = scale.toModel(step)
        const widthInYears = end.year() - start.year()
        const stepCountOnOneSide = Math.floor( (widthInPx/2) / stepInPx )
        const centerDate = start.add(widthInYears/2, "years")

        const leftSteps = [
            new StepData(-widthInPx/2,start),
            ...[...Array(stepCountOnOneSide).keys()]
                .map(i => i+1)
                .reverse()
                .map(stepNr => 
                    new StepData(
                        -stepNr*stepInPx,
                        centerDate.subtract(stepNr*step.as("years"))
                    )
                )
        ]

        const centerStep = new StepData(0, centerDate)

        const rightSteps = [
            ...[...Array(stepCountOnOneSide).keys()]
                .map(i => i+1)
                .map(stepNr => 
                    new StepData(
                        stepNr*stepInPx,
                        centerDate.add(stepNr*step.as("years"))
                    )
                ),
            new StepData(widthInPx/2,end),
        ]
        
        return [...leftSteps, centerStep, ...rightSteps]
    })

    const yearToX = 
        (year) => {
            const yearsFromStart = year - start.year()
            return -widthInPx/2 + scale.toModel(yearsFromStart)
        }

    const viewBox = `${-widthInPx/2 - margin} -50 ${widthInPx+2*margin} 100`
</script>

<template>
    <svg :width :height xmlns="http://www.w3.org/2000/svg" :viewBox preserveAspectRatio="none">
        <line :x1="-widthInPx/2" y1="0" :x2="widthInPx/2" y2="0" stroke="black" />
        <Step v-for="step in steps" :x="step.x" :date="step.date" />
        
        <slot :year-to-x="yearToX"/>
    </svg>
</template>

<style scoped>

</style>