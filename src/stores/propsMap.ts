import type { TextComponentProps } from '@/stores/defaultProps'
export interface PropToForm {
  component: string
  subComponent?: string
  extraProps?: { [key: string]: any }
  text?: string
  options?: { text?: string; value: any; label?: string }[]
  initalTransform?: (v: any) => any
  afterTransform?: (v: any) => any
  valueProp?: string
  eventName?: string
  renderOptions?: boolean
}

export type PropsToForms = {
  [p in keyof TextComponentProps]?: PropToForm
}

const fontFamilyArr = [
  { text: '宋体', value: "'SimSun','STSong'" },
  { text: '黑体', value: "'SimHei','STHeiti'" },
  { text: '楷体', value: "'KaiTi','STKaiti'" },
  { text: '仿宋', value: "'FangSong','STFangsong'" }
]
const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    label: font.text,
    text: `<span style="font-family:${font.value}">${font.text}</span>`
  }
})
export const mapPropsToForms: PropsToForms = {
  text: {
    text: '文本',
    component: 'el-input',
    eventName: 'input',
    extraProps: { rows: 3 }
  },
  fontSize: {
    text: '字号',
    component: 'el-input-number',
    extraProps: { min: 12 },
    initalTransform: (v: string) => parseInt(v),
    afterTransform: (e: number) => (e ? `${e}px` : '')
  },
  lineHeight: {
    text: '行高',
    component: 'el-slider',
    eventName: 'input',
    extraProps: { min: 0, max: 10, step: 0.1 },
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: number) => e.toString()
  },
  textAlign: {
    component: 'el-radio-group',
    subComponent: 'el-radio-button',
    text: '对齐',
    options: [
      { value: 'left', text: '左' },
      { value: 'center', text: '中' },
      { value: 'right', text: '右' },
      { value: 'justify', text: '两端' }
    ]
  },
  fontFamily: {
    component: 'el-select',
    subComponent: 'el-option',
    text: '字体',
    renderOptions: true,
    options: [{ value: '', text: '无' }, ...fontFamilyOptions]
  },
  // width: {
  //     text: '宽度',
  //     ...pxToNumberHandler
  // },
  color: {
    component: 'el-color-picker',
    text: '字体颜色'
  }
}
