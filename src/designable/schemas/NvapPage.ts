/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-09-11 23:25:24
 * @LastEditTime: 2023-09-25 16:29:54
 * @Description:
 */
import { ISchema } from "@formily/react";

export const NvapPage: ISchema = {
  type: "object",
  properties: {
    mode: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: '',
      },
      enum: ['页面组件', '定制上传组件'],
    },
  },
};
