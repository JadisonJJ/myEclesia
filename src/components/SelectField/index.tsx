import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  Colors,
} from "../../theme";

import { styles } from "./styles";

import { SelectFieldProps } from "./types";

export default function SelectField({

  label,

  value,

  placeholder,

  onPress,

}: SelectFieldProps) {

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TouchableOpacity
        style={styles.field}
        onPress={onPress}
        activeOpacity={0.8}
      >

        <Text
          style={
            value
              ? styles.value
              : styles.placeholder
          }
        >
          {value || placeholder}
        </Text>

        <Feather
          name="chevron-down"
          size={20}
          color={Colors.textLight}
        />

      </TouchableOpacity>

    </View>

  );

}