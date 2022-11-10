<script setup lang="ts">
// import { computed } from 'vue'
import { defaultProps, textStylePropNames } from '@/stores/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const props = defineProps({
  tag: { type: String, default: 'div' },
  ...defaultProps
})

const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames
)
</script>

<template>
  <component
    :is="tag"
    @click="handleClick"
    :style="styleProps"
    class="l-text"
    >{{ props.text }}</component
  >
</template>
<style scoped lang="less"></style>
