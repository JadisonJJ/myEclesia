import { ReactNode } from "react";

export interface HeaderProps {
  title: string;

  subtitle?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
   backgroundColor?: string;
   showDivider?: boolean;

  showBack?: boolean;

  onBack?: () => void;

  rightIcon?: ReactNode;

  onRightPress?: () => void;
}