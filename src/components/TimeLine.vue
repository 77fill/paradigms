<script setup>
    import {computed, ref} from "vue"
    import Duration from "../domain/duration.js"
    import Scale from "../domain/scale.js"
    import Step from "../domain/step.js"

    const widthInPx = 200
    const MILLIS_IN_A_YEAR = 1000*60*60*24*365

    const {start, end, step, scale} = defineProps({
        width: String,
        height: String,
        start: Date,
        end: Date,
        step: Duration,
        scale: Scale
    })

    const steps = computed(() => {
        const stepInPx = scale.toModel(step.value)
        const widthInYears = end.getFullYear() - start.getFullYear()
        const stepCountOnOneSide = Math.floor( (widthInPx/2) / stepInPx )
        const centerDate = new Date(start.getTime() + (widthInYears/2)*MILLIS_IN_A_YEAR) 

        const leftSteps = [
            new Step(-widthInPx/2,start),
            ...[...Array(stepCountOnOneSide).keys()]
                .reverse()
                .map(stepNr => 
                    new Step(
                        -stepNr*stepInPx,
                        new Date(centerDate.getTime() - stepNr*step.value*MILLIS_IN_A_YEAR)
                    )
                )
        ]

        const centerStep = new Step(0, centerDate)

        const rightSteps = [
            ...[...Array(stepCountOnOneSide).keys()]
                .map(stepNr => 
                    new Step(
                        stepNr*stepInPx,
                        new Date(centerDate.getTime() + stepNr*step.value*MILLIS_IN_A_YEAR)
                    )
                ),
            new Step(widthInPx/2,stop),
        ]
        
        return [...leftSteps, centerStep, ...rightSteps]
    })

    const yearToX = 
        (year) => {
            const yearsFromStart = year - start.getFullYear()
            return -widthInPx/2 + scale.toModel(yearsFromStart)
        }
    
</script>

<template>
    <svg :width :height xmlns="http://www.w3.org/2000/svg" :viewBox="'-100 -50 '+widthInPx+' 100'">
        <line x1="-100" y1="0" x2="100" y2="0" stroke="black" />
        <line v-for="step in steps" :x1="step.x" y1="5" :x2="step.x" y2="-5" stroke="black"/>
        
        <slot :year-to-x="yearToX"/>
    </svg>
</template>

<style scoped>

</style>