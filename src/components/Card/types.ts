import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    padding?: number;
    shadow?: boolean;
    onPress?: () => void;
}