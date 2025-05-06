<script setup>
    defineProps(["x","text"])
</script>

<template>
    <line :x1="x" y1="5" :x2="x" y2="-5" stroke="black" />
    <text :x y="-8" class="step-text">{{ text }}</text>
</template>

<style scoped>
    .step-text {
        transform: translate(-50%,-60%);
    }
</style>