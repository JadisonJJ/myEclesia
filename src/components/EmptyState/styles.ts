import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {

    width: "100%",

    justifyContent: "center",

    alignItems: "center",

    paddingVertical: Spacing.xxl,

    paddingHorizontal: Spacing.xl,

  },

  title: {

    marginTop: Spacing.lg,

    fontSize: Fonts.size.lg,

    fontFamily: Fonts.family.bold,

    color: Colors.text,

    textAlign: "center",

  },

  description: {

    marginTop: Spacing.sm,

    fontSize: Fonts.size.md,

    fontFamily: Fonts.family.regular,

    color: Colors.textLight,

    textAlign: "center",

    lineHeight: 24,

  },

});