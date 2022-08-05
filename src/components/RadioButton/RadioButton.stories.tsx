import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaRadioButton from "./GaRadioButton";
import ButtonSize from "./button-size";
import RadioButtonColor from "./button-color";
export default {
  title: "GaRadioButton",
  component: GaRadioButton,
} as ComponentMeta<typeof GaRadioButton>;

const Template: ComponentStory<typeof GaRadioButton> = (args) => (
  <GaRadioButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: "Radio button",
  size: ButtonSize.MEDIUM,
  checked: true,
  onChange: (e) => console.log(e),
  color: RadioButtonColor.PRIMARY,
  label: "Label of the field",
};
