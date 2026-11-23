import React from "react";

import {
  View,
  Text,
} from "react-native";

import { styles } from "./styles";

import { BadgeProps } from "./types";

import { Colors } from "../../theme";

export default function Badge({
  label,
  color = Colors.white,
  backgroundColor = Colors.primary,
  icon,
  outlined = false,
  size = "medium",
}: BadgeProps) {

  return (
    <View
      style={[
        styles.container,
        styles[size],

        outlined
          ? {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: backgroundColor,
            }
          : {
              backgroundColor,
            },
      ]}
    >
      {icon}

      {icon && <View style={styles.space} />}

      <Text
        style={[
          styles.label,
          {
            color: outlined ? backgroundColor : color,
          },
        ]}
      >
        {label}
      </Text>

    </View>
  );
}