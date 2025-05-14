<script setup>
  import {onMounted} from "vue";

  defineProps({
    open: Boolean,
  })
</script>

<template>
  <div class="dialog-mask">
    <div class="dialog-container">
      <div class="dialog-title">
        <slot name="title" />
      </div>
      <div class="dialog-content">
        <slot name="default" />
      </div>
      <div class="dialog-button-row">
        <button type="button">OK</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog-container {
    margin: auto;
    width: 500px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
  }
</style>