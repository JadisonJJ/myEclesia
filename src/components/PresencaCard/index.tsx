import React from "react";

import {
  View,
  Text,
  Switch,
} from "react-native";

import { styles } from "./styles";

import { PresencaCardProps } from "./types";

export default function PresencaCard({

  nome,

  presente,

  onToggle,

}: PresencaCardProps) {

  const iniciais = nome
    .split(" ")
    .map(item => item[0])
    .slice(0, 2)
    .join("");

  return (

    <View style={styles.container}>

      <View style={styles.left}>

        <View style={styles.avatar}>

          <Text style={styles.initials}>
            {iniciais}
          </Text>

        </View>

        <Text style={styles.nome}>
          {nome}
        </Text>

      </View>

      <Switch

        value={presente}

        onValueChange={onToggle}

      />

    </View>

  );

}