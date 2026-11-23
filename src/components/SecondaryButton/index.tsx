import React from "react";

import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
} from "react-native";

import { styles } from "./style"

import { SecondaryButtonProps } from "./types";

import { Colors } from "../../theme";

export default function SecondaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.primary} />
      ) : (
        <>
          {leftIcon}

          <View style={styles.content}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>

          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
}