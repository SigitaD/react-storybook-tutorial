import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m="4">{story()}</Box>
  </ThemeProvider>
));
