<script setup>
    import moment from 'moment'

    defineProps({
        pointInTime: {validator: moment.isMoment},
        shortTitle: String,
        yearToX: Function
    })
</script>

<template>
    <text :x="yearToX(pointInTime.year())" y="-25" class="moment-text"/>
</template>

<style scoped>
    .moment-text {
        transform: translate(-50%, -50%);
        transform-box: content-box;
    }
</style>