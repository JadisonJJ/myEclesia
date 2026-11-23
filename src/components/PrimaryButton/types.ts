import { ReactNode } from "react";

export interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?:boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}