<script setup>
import ModalDialog from "@/components/ModalDialog.vue";

  const {shortTitle} = defineProps({
    x: Number,
    shortTitle: String,
  })

  const width = shortTitle.length + 'em'
</script>

<template>
  <g class="moment-text-and-box">
    <rect
        class="moment-text-box"
        :x :width
    />
    <text
        class="moment-text"
        :x :textLength="width" y="-25"
        lengthAdjust="spacingAndGlyphs">
      {{shortTitle}}
    </text>
  </g>
</template>

<style scoped>

  .moment-text-box {
    fill: transparent;
    stroke: transparent;
    stroke-width: 0;
    y: -40;
    height: 1em;
    cursor: default;
  }

  .moment-text, .moment-text-box {
    transform: translate(-50%, -50%);
    transform-box: content-box;
  }

  .moment-text-and-box {
    cursor: default;

    &:hover {
      cursor: pointer;
    }
  }

  .moment-text-and-box:hover > .moment-text-box, .moment-text-box:hover {
    fill: cornflowerblue;
    cursor: pointer;
  }
</style>