import React from "react";

import {
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { styles } from "./styles";

import { QuickAccessCardProps } from "./types";


export default function QuickAccessCard({
  title,
  icon,
  onPress,
}: QuickAccessCardProps) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >

      <View style={styles.icon}>

        {icon}

      </View>

      <Text style={styles.title}>

        {title}

      </Text>

    </TouchableOpacity>
  );
}