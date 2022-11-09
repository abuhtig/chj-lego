import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import type { TextComponentProps } from './defaultProps'
export interface EditorProps {
  // 编辑器渲染的数组
  components: ComponentData[]
  // 当前编辑的哪个元素,对应id
  currentElement: string
}

export interface ComponentData {
  // 元素的属性
  props: { [key: string]: any }
  id: string
  name: string
}

export const testCoponents: ComponentData[] = [
  {
    id: v4(),
    name: 'LText',
    props: {
      text: 'hello',
      fontSize: '20px',
      color: 'red',
      lineHeight: '20',
      textAlign: 'left',
      fontFamily: ''
    }
  },
  {
    id: v4(),
    name: 'LText',
    props: {
      text: '范德萨发',
      fontSize: '16px',
      color: 'yellow',
      lineHeight: '10',
      textAlign: 'left',
      fontFamily: 'KaiTi'
    }
  },
  {
    id: v4(),
    name: 'LText',
    props: {
      text: 'hello3',
      actionType: 'url',
      url: '#',
      textAlign: 'left',
      fontFamily: ''
    }
  }
]

export const useEditor = defineStore('editor', {
  state: (): EditorProps => {
    return {
      components: testCoponents,
      currentElement: ''
    }
  },
  actions: {
    addComponent(props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: v4(),
        name: 'LText',
        props
      }
      this.components.push(newComponent)
    },
    setActive(id: string) {
      this.currentElement = id
    },
    setCurrentElement(key: any) {
      console.log(key)
      // const curr = this.components.find(
      //   (component) => this.currentElement === component.id
      // )
      // if (curr) {
      //   curr.props[key] = value
      // }
    }
  },
  getters: {
    getCurrentElement: (state): ComponentData | undefined => {
      return state.components.find(
        (component) => state.currentElement === component.id
      )
    }
  }
})
