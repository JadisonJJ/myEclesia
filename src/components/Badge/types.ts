import { ReactNode } from "react";

export interface BadgeProps {

  label: string;
  color?: string;

  backgroundColor?: string;
  icon?: ReactNode;
  outlined?: boolean;
  size?: "small" | "medium" | "large";

  textColor?: string;

}