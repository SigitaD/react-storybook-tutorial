/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    size: { control: "select" },
  },
};

const Template = (args) => <Input {...args} />;

export const InputField = Template.bind({});
