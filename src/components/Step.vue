<script setup>
    import moment from "moment";

    defineProps({
        x: Number,
        date: {validator: moment.isMoment}
    })
</script>

<template>
    <line :x1="x" y1="5" :x2="x" y2="-5" stroke="black" />
    <text :x y="-8" class="step-text" textLength="2%" lengthAdjust="spacingAndGlyphs">{{ date.year() }}</text>
</template>

<style scoped>
    .step-text {
        transform: translate(-50%,-60%);
        transform-box: content-box;
    }
</style>