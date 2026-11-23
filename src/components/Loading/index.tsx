import React from "react";

import {
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";

import { LoadingProps } from "./types";

import { Colors } from "../../theme";

export default function Loading({

  text = "Carregando...",

  size = "large",

}: LoadingProps) {

  return (

    <View style={styles.container}>

      <ActivityIndicator
        size={size}
        color={Colors.primary}
      />

      <Text style={styles.text}>
        {text}
      </Text>

    </View>

  );

}