export interface SacramentoSwitchProps {

  title: string;

  description?: string;

  value: boolean;

  onValueChange: (value: boolean) => void;

}