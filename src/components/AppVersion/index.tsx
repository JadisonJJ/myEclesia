import React from "react";
import { Text } from "react-native";

import { styles } from "./styles";
import { AppVersionProps } from "./types";

export default function AppVersion({
  version,
}: AppVersionProps) {
  return (
    <Text style={styles.version}>
      Versão {version}
    </Text>
  );
}