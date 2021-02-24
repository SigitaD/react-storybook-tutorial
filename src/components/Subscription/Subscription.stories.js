import React from "react";
import { Primary } from "../Button/Button.stories";
import { InputField } from "../Input/Input.stories";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <InputField size="large" />
    <Primary />
  </>
);
