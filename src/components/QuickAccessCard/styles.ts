import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
  BorderRadius,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    width: 150,

    height: 130,

    backgroundColor: Colors.card,

    borderRadius: BorderRadius.xl,

    justifyContent: "center",

    alignItems: "center",

    ...Shadows.small,
  },

  icon: {
    marginBottom: Spacing.md,
  },

  title: {
    fontFamily: Fonts.family.medium,

    fontSize: Fonts.size.md,

    color: Colors.text,

    textAlign: "center",
  },

});