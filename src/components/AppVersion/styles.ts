import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({
  version: {
    marginTop: Spacing.xl,

    textAlign: "center",

    color: Colors.textLight,

    fontSize: Fonts.size.xs,

    fontFamily: Fonts.family.regular,
  },
});