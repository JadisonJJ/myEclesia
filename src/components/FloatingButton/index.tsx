import React from "react";

import {
  TouchableOpacity,
  Text,
} from "react-native";

import { styles } from "./styles";

import { FloatingButtonProps } from "./types";

export default function FloatingButton({

  onPress,

}: FloatingButtonProps) {

  return (

    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >

      <Text style={styles.icon}>
        +
      </Text>

    </TouchableOpacity>

  );

}