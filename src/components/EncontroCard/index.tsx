import React from "react";

import {

  TouchableOpacity,

  Text,

} from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import { EncontroCardProps } from "./types";

export default function EncontroCard({

  encontro,

  onPress,

}: EncontroCardProps) {

  return (

    <TouchableOpacity

      style={styles.container}

      onPress={onPress}

    >

      <Text style={styles.tema}>

        {encontro.tema}

      </Text>

      <Text style={styles.data}>

        📅 {encontro.data}

      </Text>

      <Text style={styles.leitura}>

        📖 {encontro.leituraBiblica}

      </Text>

    </TouchableOpacity>

  );

}