import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { styles } from "./style";

import { TurmaCardProps } from "./types";

export default function TurmaCard({
  title,
  subtitle,
  description,
  icon,
  footer,
  onPress,
}: TurmaCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.container}
    >
      {icon && (
        <View style={styles.icon}>
          {icon}
        </View>
      )}

      <View style={styles.content}>

        <Text style={styles.title}>
          {title}
        </Text>

        {subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}

        {description && (
          <Text style={styles.description}>
            {description}
          </Text>
        )}

        {footer && (
          <View style={styles.footer}>
            {footer}
          </View>
        )}

      </View>

    </TouchableOpacity>
  );
}