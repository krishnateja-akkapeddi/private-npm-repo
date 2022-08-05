import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

type Props = {
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange: (e: React.SyntheticEvent<Element, Event>) => void;
  accordianSummary: React.ReactNode;
  accordionDetails: React.ReactNode;
};

const GaAccordion: React.FC<Props> = ({
  defaultExpanded,
  disabled,
  expanded,
  onChange,
  accordianSummary,
  accordionDetails,
}) => {
  return (
    <Accordion
      disabled={disabled}
      onChange={(e) => onChange(e)}
      expanded={expanded}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary children={accordianSummary} />
      <AccordionDetails children={accordionDetails} />
    </Accordion>
  );
};

export default GaAccordion;
