import { Catequizando } from "../../types/Catequizando";

export interface CatequizandoCardProps {

    catequizando: Catequizando;

    onPress: () => void;

    onEdit: () => void;

    onDelete: () => void;

}