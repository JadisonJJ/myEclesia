import { ReactNode } from "react";

export interface SecondaryButtonProps {
  title: string;

  onPress: () => void;

  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}