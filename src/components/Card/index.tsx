import React from "react";

import {
  View,
  Pressable,
} from "react-native";

import { styles } from "./style";

import { CardProps } from "./types";

export default function Card({

  children,

  padding,

  shadow = true,

  onPress,

}: CardProps) {

  const Container = onPress ? Pressable : View;

  return (

    <Container

      onPress={onPress}

      style={[

        styles.card,

        shadow && styles.shadow,

        padding !== undefined && {
          padding,
        },

      ]}

    >

      {children}

    </Container>

  );

}