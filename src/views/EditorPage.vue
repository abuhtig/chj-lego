<script setup lang="ts">
import { computed } from 'vue'
import { useEditor } from '@/stores/editor'
import {
  defaultTextTemplates,
  type TextComponentProps
} from '@/stores/defaultProps'
import ComponentsList from '@/components/Editor/ComponentsList.vue'
import EditWrapper from '@/components/Editor/EditWrapper.vue'
import PropsTable from '@/components/Editor/PropsTable.vue'
const store = useEditor()
const com = computed(() => store.components)

const addItem = (props: any) => {
  console.log(props)

  store.addComponent(props)
}
const setActive = (id: string) => {
  store.setActive(id)
}
</script>
<script lang="ts">
import LText from '@/components/Editor/LText.vue'
export default {
  components: {
    LText
  }
}
</script>
<template>
  <el-row>
    <el-col :span="6">
      <ComponentsList
        :list="defaultTextTemplates"
        @on-item-click="addItem"
      ></ComponentsList>
    </el-col>
    <el-col :span="12">
      <EditWrapper
        @set-active="setActive"
        v-for="item in com"
        :key="item.id"
        :id="item.id"
      >
        <component :is="item.name" v-bind="item.props">{{
          item.props
        }}</component>
      </EditWrapper>
    </el-col>
    <el-col :span="6"
      ><PropsTable
        v-if="store.getCurrentElement"
        :props="store.getCurrentElement.props as TextComponentProps"
        @change="store.setCurrentElement"
      ></PropsTable
      >{{ store.getCurrentElement?.props }}</el-col
    >
  </el-row>
</template>
