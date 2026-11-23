import { TextInputProps } from "react-native";
import react from "react";

export interface InputProps extends TextInputProps {
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}