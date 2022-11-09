<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true }
})
defineEmits(['setActive'])
</script>
<template>
  <div @click="$emit('setActive', props.id)">
    <slot></slot>
  </div>
</template>
