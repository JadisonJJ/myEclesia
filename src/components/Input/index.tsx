import React from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import { styles } from "./style";

import { InputProps } from "./types";

export default function Input({

  label,

  leftIcon,

  rightIcon,

  ...rest

}: InputProps) {

  return (

    <View style={styles.container}>

      {label && (

        <Text style={styles.label}>
          {label}
        </Text>

      )}

      <View style={styles.inputContainer}>

        {leftIcon && (

          <View style={styles.icon}>
            {leftIcon}
          </View>

        )}

<Pressable
  onPress={rest.onPressIn}
>
  <TextInput
    style={styles.input}
    placeholderTextColor="#999"
    pointerEvents="none"
    {...rest}
  />
</Pressable>

        {rightIcon && (

          <View style={styles.icon}>
            {rightIcon}
          </View>

        )}

      </View>

    </View>

  );

}