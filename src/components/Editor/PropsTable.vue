<script setup lang="ts">
import { reactive, type PropType } from 'vue'
import type { TextComponentProps } from '@/stores/defaultProps'
const fontFamilyArr = [
  { text: '宋体', value: "'SimSun','STSong'" },
  { text: '黑体', value: "'SimHei','STHeiti'" },
  { text: '楷体', value: 'KaiTi' },
  { text: '仿宋', value: "'FangSong','STFangsong'" }
]
const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    label: font.text,
    text: `<span style="font-family:${font.value}">${font.text}</span>`
  }
})
const emit = defineEmits(['change'])
function input(val: any) {
  emit('change', val)
}
const props = defineProps({
  props: {
    type: Object as PropType<TextComponentProps>,
    required: true
  }
})
const data = reactive(props.props)
</script>
<script lang="ts">
import {
  ElInput,
  ElSlider,
  ElInputNumber,
  ElColorPicker,
  ElRadioGroup,
  ElRadioButton,
  ElSelect,
  ElOption
} from 'element-plus'
import 'element-plus/dist/index.css'
export default {
  components: {
    ElInput,
    ElSlider,
    ElInputNumber,
    ElColorPicker,
    ElRadioGroup,
    ElRadioButton,
    ElSelect,
    ElOption
  }
}
</script>
<template>
  <div class="props-table">
    <div class="prop-item">
      <span class="label">文本</span>
      <div class="prop-component">
        <ElInput @input="input" :modelValue="data.text"></ElInput>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">字号</span>
      <div class="prop-component">
        <ElInputNumber
          @change="input"
          :model-value="Number(data.fontSize.slice(0, -2))"
        ></ElInputNumber>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">字体颜色</span>
      <div class="prop-component">
        <ElColorPicker
          @change="input"
          :model-value="data.color"
        ></ElColorPicker>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">行高</span>
      <div class="prop-component">
        <ElSlider
          @change="input"
          :value="Number(data.lineHeight)"
          :step="0.1"
          :min="1"
          :max="3"
        ></ElSlider>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">对齐</span>
      <div class="prop-component">
        <ElRadioGroup @change="input" :model-value="data.textAlign">
          <ElRadioButton label="left">左</ElRadioButton>
          <ElRadioButton label="center">中</ElRadioButton>
          <ElRadioButton label="right">右</ElRadioButton>
        </ElRadioGroup>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">字体</span>
      <div class="prop-component">
        <ElSelect
          placeholder="无"
          @change="input"
          :model-value="data.fontFamily"
        >
          <ElOption
            v-for="item in fontFamilyOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          >
            <div class="fontFam" v-html="item.text"></div>
          </ElOption>
        </ElSelect>
      </div>
    </div>
  </div>
</template>
<style scoped>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  width: 28%;
}
.fontFam {
  text-align: center;
  font-size: 18px;
}
.prop-component {
  width: 70%;
}
</style>
