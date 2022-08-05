import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaButton from "./GaButton";
import ButtonColor from "./button-color";
import ButtonSize from "../RadioButton/button-size";
import ButtonVariant from "./button-variant";

export default {
  title: "GaButton",
  component: GaButton,
} as ComponentMeta<typeof GaButton>;

const Template: ComponentStory<typeof GaButton> = (args) => (
  <GaButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello World!",
  color: ButtonColor.PRIMARY,
  size: ButtonSize.SMALL,
  variant: ButtonVariant.OUTLINED,
  onClick: () => window.alert("Hello world"),
};
