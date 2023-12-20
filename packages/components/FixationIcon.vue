<template>
  <svg
    class="icon-com"
    aria-hidden="true"
    :color="props.color"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '1rem'
  }
})

const iconClassName = computed(() => {
  return `#fixa-${props.name}`
})
</script>

<style scoped>
.icon-com {
  /* width: 1em;
  height: 1em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
