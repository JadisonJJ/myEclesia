import React from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import { styles } from "./style";
import { SearchBarProps } from "./types";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Pesquisar...",
  onClear,
  ...rest
}: SearchBarProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        🔍
      </Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        {...rest}
      />

      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.clear}>
            ✕
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}