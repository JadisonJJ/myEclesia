import { ReactNode } from "react";

export interface QuickAccessCardProps {
  title: string;

  icon: ReactNode;

  onPress: () => void;
}