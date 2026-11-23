import React from "react";

import {
  View,
  Text,
} from "react-native";

import { styles } from "./styles";

import { SectionCardProps } from "./types";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../theme";

export default function SectionCard({

  title,

  icon,

  children,

}: SectionCardProps) {

  return (

    <View style={styles.container}>

  <View style={styles.header}>

    {icon && (
  <View style={styles.icon}>
    <Feather
      name={icon as any}
      size={20}
      color={Colors.primary}
    />
  </View>
)}

    <Text style={styles.title}>
      {title}
    </Text>

  </View>

  {children}

</View>

  );

}