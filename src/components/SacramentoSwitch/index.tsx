import React from "react";

import {
  View,
  Text,
  Switch,
} from "react-native";

import { styles } from "./styles";

import { SacramentoSwitchProps } from "./types";

import { Colors } from "../../theme";

export default function SacramentoSwitch({

  title,

  description,

  value,

  onValueChange,

}: SacramentoSwitchProps) {

  return (

    <View style={styles.container}>

      <View style={styles.textArea}>

        <Text style={styles.title}>
          {title}
        </Text>

        {description && (

          <Text style={styles.description}>
            {description}
          </Text>

        )}

      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: Colors.border,
          true: Colors.primary,
        }}
        thumbColor={Colors.white}
      />

    </View>

  );

}