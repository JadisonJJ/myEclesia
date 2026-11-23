import React from "react";

import {
  View,
  Text,
} from "react-native";

import { styles } from "./styles";

import { EmptyStateProps } from "./types";

export default function EmptyState({

  imagem,

  title,

  description,

  action,

}: EmptyStateProps) {

  return (

    <View style={styles.container}>

      {imagem}

      <Text style={styles.title}>
        {title}
      </Text>

      {description && (

        <Text style={styles.description}>
          {description}
        </Text>

      )}

      {action}

    </View>

  );

}