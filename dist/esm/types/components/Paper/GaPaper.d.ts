import React from "react";
import PaperVariant from "./paper-variant";
declare type Props = {
    children: React.ReactNode;
    variant?: PaperVariant;
    square?: boolean;
    elevation?: number;
};
declare const GaPaper: React.FC<Props>;
export default GaPaper;
