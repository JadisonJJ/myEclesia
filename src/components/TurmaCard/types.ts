import React, { ReactNode } from "react";

export interface TurmaCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  catechist: string;
  students: number;
  room?: string;
  active?: boolean;
  icon?: ReactNode;
  footer?: ReactNode;

  onPress?: () => void;
}