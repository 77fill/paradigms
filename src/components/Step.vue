<script setup>
    defineProps({
        x: String,
        date: Date
    })
</script>

<template>
    <line :x1="x" y1="5" :x2="x" y2="-5" stroke="black" />
    <text :x y="-8" class="step-text" textLength="10" lengthAdjust="spacingAndGlyphs">{{ date.getFullYear() }}</text>
</template>

<style scoped>
    .step-text {
        transform: translate(-50%,-60%);
        transform-box: content-box;
    }
</style>