import React from "react";
declare type Props = {
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    onChange: (e: React.SyntheticEvent<Element, Event>) => void;
    accordianSummary: React.ReactNode;
    accordionDetails: React.ReactNode;
};
declare const GaAccordion: React.FC<Props>;
export default GaAccordion;
