/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2022-08-07 18:04:47
 * @LastEditTime: 2023-09-12 09:54:23
 * @Description: 
 */
import React from "react";
import {
  createBehavior,
  createResource,
} from "./../../../designable-core/core";
import { DnFC } from "./../../../designable-core/react";
import { createFieldSchema } from "../Field";
import { Container } from "../../common/Container";
import { AllLocales } from "../../locales";

export const ObjectContainer: DnFC<React.ComponentProps<typeof Container>> =
  Container;
ObjectContainer.Behavior = createBehavior({
  name: "Object",
  extends: ["Field"],
  selector: (node) => node.props.type === "object",
  designerProps: {
    droppable: true,
    propsSchema: createFieldSchema(),
  },
  designerLocales: AllLocales.ObjectLocale,
});

ObjectContainer.Resource = createResource({
  icon: "ObjectSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "object",
      },
    },
  ],
});
