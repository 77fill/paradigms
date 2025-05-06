<script setup>
    defineProps({
        pointInTime: Date,
        shortTitle: String,
        yearToX: Function
    })
</script>

<template>
    <text :x="yearToX(pointInTime.getFullYear())" y="-25" class="moment-text"/>
</template>

<style scoped>
    .moment-text {
        transform: translate(-50%, -50%);
    }
</style>