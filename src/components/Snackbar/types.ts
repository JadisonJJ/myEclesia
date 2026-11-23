export interface SnackbarProps {
  visible: boolean;
  message: string;
  type?: "success" | "error" | "warning" | "info";

  onDismiss: () => void;
}