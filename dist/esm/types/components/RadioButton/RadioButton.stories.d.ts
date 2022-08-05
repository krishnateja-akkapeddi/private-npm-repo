import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonSize from "./button-size";
import RadioButtonColor from "./button-color";
declare const _default: ComponentMeta<React.FC<{
    value?: string | undefined;
    size?: ButtonSize | undefined;
    checked?: boolean | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    color?: RadioButtonColor | undefined;
    label?: React.ReactNode;
}>>;
export default _default;
export declare const Basic: ComponentStory<React.FC<{
    value?: string | undefined;
    size?: ButtonSize | undefined;
    checked?: boolean | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    color?: RadioButtonColor | undefined;
    label?: React.ReactNode;
}>>;
