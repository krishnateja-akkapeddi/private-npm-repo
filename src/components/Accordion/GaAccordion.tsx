import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
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
      <div>
        <AccordionSummary children={accordianSummary} />
      </div>
      <AccordionDetails children={accordionDetails} />
    </Accordion>
  );
};

export default GaAccordion;
