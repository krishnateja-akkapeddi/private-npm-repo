import React from "react";
import ButtonColor from "../Button/button-color";
import ButtonSize from "../Button/button-size";
declare type Props = {
    icon: React.ReactNode;
    color?: ButtonColor;
    disabled?: boolean;
    size?: ButtonSize;
    onClick: Function;
};
declare const GaIconButton: React.FC<Props>;
export default GaIconButton;
