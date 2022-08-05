import React from "react";
import ButtonColor from "./button-color";
import ButtonSize from "./button-size";
import ButtonVariant from "./button-variant";
declare type Props = {
    children: React.ReactNode;
    color?: ButtonColor;
    size?: ButtonSize;
    variant?: ButtonVariant;
    onClick: () => void;
};
declare const GaButton: React.FC<Props>;
export default GaButton;
