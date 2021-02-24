import React from "react";
import { Button } from "@chakra-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Chakra/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

export const Log = () => (
  // eslint-disable-next-line no-console
  <Button variantColor="blue" onClick={() => console.log("console")}>
    Log
  </Button>
);
