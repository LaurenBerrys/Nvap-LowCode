/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2024-03-21 14:57:46
 * @LastEditTime: 2024-03-21 15:45:50
 * @Description:
 */
/*
 * 支持文本、数字、布尔、表达式
 * Todo: JSON、富文本，公式
 */
import React, { useEffect, useRef, useState } from "react";
import { createPolyInput } from "../PolyInput";
import { Input, Button, Popover, InputNumber, Select } from "antd";
import { MonacoInput } from "../MonacoInput";
import { TextWidget } from "./../../../react";
import { useParams } from "react-router-dom";
import axios from "axios";

const STARTTAG_REX =
  /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;

const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/;

const isNumber = (value: any) => typeof value === "number";

const isBoolean = (value: any) => typeof value === "boolean";

const isExpression = (value: any) => {
  return typeof value === "string" && EXPRESSION_REX.test(value);
};

const isRichText = (value: any) => {
  return typeof value === "string" && STARTTAG_REX.test(value);
};

const isNormalText = (value: any) => {
  return (
    typeof value === "string" && !isExpression(value) && !isRichText(value)
  );
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const NameSelect: React.FC<any> = (props: any) => {
  const [options, setOptions] = useState([]);
  const forms = localStorage.getItem("formily-form");
  const form = JSON.parse(forms);
  useEffect(() => {
    if (form.model && options.length <= 0) {
      axios
        .request({
          url: "http://localhost:3000/nest-api/Entity/findTableInfo",
          method: "get",
          params: {
            name: form.model,
          },
        })
        .then(({ data }) => {
          const option = data.data.list.map((item) => {
            return {
              label: item.comment,
              value: form.model + "." + item.name,
            };
          });
          setOptions(option);
        });
    }
  }, [form.model, options]);

  return <Select {...props} options={options} />;
};
const takeNumber = (value: any) => {
  const num = String(value).replace(/[^\d\.]+/, "");
  if (num === "") return;
  return Number(num);
};

export const NameInput = createPolyInput([
  {
    type: "TEXT",
    icon: "Text",
    component: Input,
    checker: isNormalText,
  },
  {
    type: "Select",
    icon: "InputSource",
    component: (props: any) => <NameSelect {...props} />,
    checker: isNormalText,
  },
  {
    type: "NUMBER",
    icon: "Number",
    component: InputNumber,
    checker: isNumber,
    toInputValue: takeNumber,
    toChangeValue: takeNumber,
  },
]);
