import React from "react";
import { Button } from "@chakra-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => <Button variantColor="green">Success</Button>;
export const Danger = () => <Button variantColor="red">Danger</Button>;
