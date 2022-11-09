<script setup lang="ts">
import LText from './LText.vue'
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
defineEmits(['onItemClick'])
</script>

<template>
  <div class="component-list">
    <div
      v-for="(item, index) in props.list"
      :key="index"
      class="list-item"
      @click="$emit('onItemClick', item)"
    >
      <LText v-bind="item"></LText>
    </div>
  </div>
</template>
