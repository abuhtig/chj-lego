<script setup lang="ts">
import { reduce } from 'lodash'
import { type PropType, computed } from 'vue'
import { mapPropsToForms } from '@/stores/propsMap'
import type { TextComponentProps } from '@/stores/defaultProps'
interface FormProps {
  component: string
  subComponent?: string
  value: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { text?: string; value: any; label?: string }[]
  valueProp: string
  eventName: string
  events: { [key: string]: (e: any) => void }
  renderOptions?: boolean
}

const emit = defineEmits(['change'])
const props = defineProps({
  props: {
    type: Object as PropType<TextComponentProps>,
    required: true
  }
})
const finalProps = computed(() => {
  // reduce：  压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，
  // 每次返回的值会作为下一次迭代使用(注：作为iteratee（迭代函数）的第一个参数使用)。
  // https://www.lodashjs.com/docs/lodash.reduce#_reducecollection-iteratee_identity-accumulator
  return reduce(
    props.props,
    (result, value, key) => {
      const newKey = key as keyof TextComponentProps
      const item = mapPropsToForms[newKey]
      if (item) {
        const {
          valueProp = 'model-value',
          eventName = 'change',
          renderOptions,
          initalTransform,
          afterTransform
        } = item
        const newItem: FormProps = {
          ...item,
          value: initalTransform ? initalTransform(value) : value,
          valueProp,
          renderOptions,
          eventName: eventName ? eventName : 'change',
          events: {
            [eventName]: (e: any) => {
              console.log(e)
              emit('change', {
                key,
                value: afterTransform ? afterTransform(e) : e
              })
            }
          }
        }
        result[newKey] = newItem
      }
      return result
    },
    {} as { [key: string]: FormProps }
  )
})
</script>

<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="value.text">{{ value.text }}</span>
      <div class="prop-component">
        <!-- 
          :[value.valueProp]="value.value" 数据的绑定 model-value
          v-on="value.events" 事件的统一处理 change
          v-bind="value.extraProps" 所有要设置的属性通过对象传下去
        -->
        <component
          v-if="value"
          :is="value.component"
          :[value.valueProp]="value.value"
          v-bind="value.extraProps"
          v-on="value.events"
        >
          <template v-if="value.options">
            <component
              :is="value.subComponent"
              v-for="(option, k) in value.options"
              :key="k"
              :value="option.value"
              :label="option.label ? option.label : option.value"
            >
              <!-- fontFamily的属性：
              text为字体渲染的HTML格式，通过插槽展示列表，
              label为选中展示，不能为value，否则展示数据‘KaTi’
              value为样式的值

              textAlign的属性：
              text为中文展示，可通过插槽展示
              label为空
              value为样式的值

              坑：
              select： 
              value为选项的值
              label 为选项的标签，展示用

              radio-button：
              label为选项的值，会与select的label冲突
              无value属性，有原生name属性，

              总结：
              label有值为select，其余的值放在value上
            -->
              <div v-html="option.text"></div>
            </component>
          </template>
        </component>
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
