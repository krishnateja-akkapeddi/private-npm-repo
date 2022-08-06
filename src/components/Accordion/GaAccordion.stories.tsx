import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaAccordion from "./GaAccordion";

export default {
  title: "GaAccordion",
  component: GaAccordion,
} as ComponentMeta<typeof GaAccordion>;

const Template: ComponentStory<typeof GaAccordion> = (args) => (
  <GaAccordion {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  defaultExpanded: false,
  disabled: false,
  expanded: true,
  onChange: (e) => console.log(e),
  accordianSummary: <p>Accordion summary</p>,
  accordionDetails: <p>Accordion details</p>,
};
