import React from 'react';

declare enum ButtonColor {
    INHERIT = "inherit",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning"
}

declare enum ButtonSize$1 {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

declare enum ButtonVariant {
    TEXT = "text",
    OUTLINED = "outlined",
    CONTAINED = "contained"
}

declare type Props$3 = {
    children: React.ReactNode;
    color?: ButtonColor;
    size?: ButtonSize$1;
    variant?: ButtonVariant;
    onClick: () => void;
};
declare const GaButton: React.FC<Props$3>;

declare type Props$2 = {
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    onChange: (e: React.SyntheticEvent<Element, Event>) => void;
    accordianSummary: React.ReactNode;
    accordionDetails: React.ReactNode;
};
declare const GaAccordion: React.FC<Props$2>;

declare enum PaperVariant {
    ELEVATED = "elevation",
    OUTLINED = "outlined"
}

declare type Props$1 = {
    children?: React.ReactNode;
    variant?: PaperVariant;
    square?: boolean;
    elevation?: number;
};
declare const GaPaper: React.FC<Props$1>;

declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium"
}

declare enum RadioButtonColor {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning"
}

declare type Props = {
    value?: string;
    size?: ButtonSize;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    color?: RadioButtonColor;
    label?: React.ReactNode;
};
declare const GaRadioButton: React.FC<Props>;

export { GaAccordion, GaButton, ButtonColor as GaButtonColor, ButtonSize$1 as GaButtonSize, GaPaper, PaperVariant as GaPaperVariant, GaRadioButton, RadioButtonColor as GaRadioButtonColor };
