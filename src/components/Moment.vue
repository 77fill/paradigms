<script setup>
    import moment from 'moment'
    import Step from "@/components/Step.vue";
    import MomentInfo from "@/components/MomentInfo.vue";
    import {ref, toRefs} from "vue";
    import ModalDialog from "@/components/ModalDialog.vue";

    const props = defineProps({
        pointInTime: {validator: moment.isMoment},
        shortTitle: String,
        yearToX: Function
    })

    const {pointInTime, yearToX} = props

    const expand = ref(false)

    const x = yearToX(pointInTime.year())

    function toggleExpand() {
      expand.value = !expand.value
    }
</script>

<template>
  <Step
      :x :date="pointInTime"
      underline/>
  <MomentInfo
      :x :short-title
      @click="toggleExpand()"/>
  <foreignObject>
    <Teleport to="body">
      <ModalDialog v-if="expand">
        <template #title>
          {{ shortTitle }}
        </template>
        <template #default>
          <slot/>
        </template>
      </ModalDialog>
    </Teleport>
  </foreignObject>
</template>

<style scoped>

</style>