import { ReactNode } from "react"

export interface EmptyStateProps {
    imagem?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}