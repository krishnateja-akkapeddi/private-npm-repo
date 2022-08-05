import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonColor from "./button-color";
import ButtonVariant from "./button-variant";
declare const _default: ComponentMeta<React.FC<{
    children: React.ReactNode;
    color?: ButtonColor | undefined;
    size?: import("./button-size").default | undefined;
    variant?: ButtonVariant | undefined;
    onClick: () => void;
}>>;
export default _default;
export declare const Basic: ComponentStory<React.FC<{
    children: React.ReactNode;
    color?: ButtonColor | undefined;
    size?: import("./button-size").default | undefined;
    variant?: ButtonVariant | undefined;
    onClick: () => void;
}>>;
