export interface SelectionItem {

  id: string;

  label: string;

}

export interface SelectionModalProps {

  visible: boolean;

  title: string;

  items: SelectionItem[];

  onSelect: (item: SelectionItem) => void;

  onClose: () => void;

}