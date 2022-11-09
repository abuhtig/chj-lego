import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
  actionType: String
  url: String
  borderColor: String
  borderRadius: String
  borderStyle: String
  borderWidth: String
  boxShadow: String
  height: String
  left: String
  opacity: Number
  paddingBottom: String
  paddingLeft: String
  paddingRight: String
  paddingTop: String
  position: String
  right: String
  top: String
  width: String
}

export interface TextComponentProps extends CommonComponentProps {
  text: String
  fontSize: String
  fontFamily: String
  fontWeight: String
  fontStyle: String
  textDecoration: String
  textAlign: String
  lineHeight: String
  color: String
  backgroundColor: String
}

export const commonDefaultProps: CommonComponentProps = {
  // 行为
  actionType: '',
  url: '',
  // 大小位置
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // 边框样式
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // 阴影
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // 定位
  position: 'relative',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps: TextComponentProps = {
  // 字体样式
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}
export const defaultTextTemplates = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2'
  },
  {
    text: '正文内容',
    tag: 'p'
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p'
  },
  {
    text: '按钮内容',
    color: '#ffffff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    tag: 'button',
    textAlign: 'center'
  }
]
export const transformToComponentProps = <T extends { [key: string]: any }>(
  props: T
) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
}

export const defaultProps = transformToComponentProps(textDefaultProps)

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)
