import React from "react";

import {
  View,
  Text,
} from "react-native";


import { styles } from "./styles";
import { InfoRowProps } from "./types";

export default function InfoRow({
  icon,
  label,
  color,
}: InfoRowProps) {
  return (
    <View style={styles.container}>

      <View style={styles.icon}>
        {icon}
      </View>

      <Text
        style={[
          styles.label,
          color && { color },
        ]}
      >
        {label}
      </Text>

    </View>
  );
}