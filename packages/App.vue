<template>
  <svg class="icon-com" aria-hidden="true" :color="props.color">
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

const iconClassName = computed(() => {
  return `#icon-${props.iconName}`
})
</script>

<style scoped>
.icon-com {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
