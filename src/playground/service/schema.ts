/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2022-08-07 18:04:47
 * @LastEditTime: 2023-08-07 16:16:20
 * @Description: 
 */
import { Engine } from './../../designable-core/core'
import {
  transformToSchema,
  transformToTreeNode,
} from './../../designable-core/formily-transformer'
import axios from 'axios'
import { message } from 'antd'
export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  console.log(transformToSchema(designer.getCurrentTree()),'trans');
axios.request({
  url: 'http://localhost:3000/nest-api/Formily',
  method: 'post',
  data: transformToSchema(designer.getCurrentTree()),
})
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}
