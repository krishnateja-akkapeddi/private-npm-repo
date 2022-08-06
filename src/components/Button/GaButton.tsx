import Button from "@mui/material/Button";
import React from "react";
import ButtonColor from "./button-color";
import ButtonSize from "./button-size";
import ButtonVariant from "./button-variant";

type Props = {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick: (e: React.SyntheticEvent<Element, Event>) => void;
};

const GaButton: React.FC<Props> = ({
  children,
  color = ButtonColor.SECONDARY,
  size = ButtonSize.MEDIUM,
  variant = ButtonVariant.CONTAINED,
  onClick,
}) => {
  return (
    <Button
      color={color}
      fullWidth
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default GaButton;
