import React from "react";
import { View } from "react-native";

import {
  TouchableOpacity,
  Text,
} from "react-native";

import { styles } from "./styles";

import { CatequizandoCardProps } from "./types";
import { calcularIdade } from "../../utils/calcularIdade";
import {
  Avatar,
  InfoRow,
  OptionsMenu,
} from "..";

import { Feather } from "@expo/vector-icons";

export default function CatequizandoCard({

  catequizando,

  onPress,

  onEdit,

  onDelete,

}: CatequizandoCardProps) {

  const idade =
  calcularIdade(catequizando.dataNascimento);

  return (

    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
<View style={styles.header}>

  <View style={styles.leftArea}>

    <Avatar
      initials={catequizando.nome
        .split(" ")
        .map(nome => nome[0])
        .slice(0,2)
        .join("")
      }
    />

    <View style={styles.nameArea}>

     
    </View>

  </View>

<OptionsMenu

    onEdit={onEdit}

    onDelete={onDelete}

/>

</View>

      <Text style={styles.nome}>
        {catequizando.nome}
      </Text>

      <Text style={styles.idade}>
  {idade} anos • {catequizando.dataNascimento}
</Text>

     
     <InfoRow
  icon={
    <Feather
      name="user"
      size={18}
      color="#3E63A8"
    />
  }
  label={`Responsável: ${catequizando.responsavel}`}
/>

<InfoRow
  icon={
    <Feather
      name="phone"
      size={18}
      color="#3E63A8"
    />
  }
  label={catequizando.telefone}
/>

<InfoRow
  icon={
    <Feather
      name={catequizando.batismo ? "check-circle" : "circle"}
      size={18}
      color={
        catequizando.batismo
          ? "#4CAF50"
          : "#BDBDBD"
      }
      />
  }
  
  label="Batizado"
/>

<InfoRow
  icon={
    <Feather
      name={
        catequizando.primeiraComunhao
          ? "award"
          : "circle"
      }
      size={18}
      color={
        catequizando.primeiraComunhao
          ? "#4CAF50"
          : "#BDBDBD"
      }
    />
  }
  label="Primeira Comunhão"
/>

    </TouchableOpacity>

  );

}