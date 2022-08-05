import React from "react";
import ButtonSize from "./button-size";
import RadioButtonColor from "./button-color";
declare type Props = {
    value?: string;
    size?: ButtonSize;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    color?: RadioButtonColor;
    label?: React.ReactNode;
};
declare const GaRadioButton: React.FC<Props>;
export default GaRadioButton;
