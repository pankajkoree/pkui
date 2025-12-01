import React from "react";
import Label from "./label";
import Input from "./input";

const Form = ({labelName,id}) => {
  return (
    <div>
      <Label>{labelName}</Label>
      <Input />
    </div>
  );
};

export default Form;
