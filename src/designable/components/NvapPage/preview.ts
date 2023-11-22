/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-09-11 23:12:27
 * @LastEditTime: 2023-09-25 16:28:59
 * @Description:
 */
import { createBehavior, createResource } from "../../../designable-core/core";
import { createVoidFieldSchema } from "../Field";
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";
import React from "react";
import { DnFC } from "../../../designable-core/react";
import cls from "classnames";
export const NvapPage: DnFC<React.ComponentProps<any>> = (props) => {
  console.log(props,'propspropsprops');
  
  return React.createElement(
    "div",
    {
      ...props,
      className: cls(props.className, "dn-text"),
      "data-content-editable": "x-component-props.content",
    },
    props.mode
  );
};

NvapPage.Behavior = createBehavior({
  name: "NvapPage",
  extends: ["Field"],
  selector: (node) => node.props["x-component"] === "NvapPage",
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.NvapPage),
  },
  designerLocales: AllLocales.NvapPage,
});

NvapPage.Resource = createResource({
  icon: "CardSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "string",
        "x-component": "NvapPage",
      },
    },
  ],
});
