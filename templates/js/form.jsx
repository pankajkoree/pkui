import React from "react";
import Label from "./label";
import Input from "./input";

const Form = ({labelName,id}) => {
  return (
    <div>
      <form>
         <Label>{labelName}</Label>
      <Input />
      </form>
     
    </div>
  );
};

export default Form;
