/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2022-08-07 18:04:47
 * @LastEditTime: 2024-03-21 14:51:05
 * @Description:
 */
import { Engine } from "./../../designable-core/core";
import {
  transformToSchema,
  transformToTreeNode,
} from "./../../designable-core/formily-transformer";
import axios from "axios";
import { message } from "antd";
export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    "formily-schema",
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  );
  console.log(transformToSchema(designer.getCurrentTree()), "trans");
  const obj = localStorage.getItem("formily-form");
  const d = JSON.parse(obj);
  console.log(d, "xxxxxx");
  d.form = JSON.stringify(transformToSchema(designer.getCurrentTree()).form)
  d.schema =JSON.stringify(transformToSchema(designer.getCurrentTree()).schema)
  axios.request({
    url: "http://localhost:3000/nest-api/Formily/update",
    method: "patch",
    data: d,
    params:{
      id:d.id
    }
  });
  message.success("Save Success");
};

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem("formily-schema")))
    );
  } catch {}
};
