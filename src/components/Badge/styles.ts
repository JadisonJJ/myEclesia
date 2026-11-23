import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  BorderRadius,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    alignSelf: "flex-start",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: Spacing.md,

    borderRadius: BorderRadius.full,
  },

  small: {
    height: 24,

    paddingHorizontal: Spacing.sm,
  },

  medium: {
    height: 32,

    paddingHorizontal: Spacing.md,
  },

  large: {
    height: 40,

    paddingHorizontal: Spacing.lg,
  },

  label: {
    fontFamily: Fonts.family.medium,

    fontSize: Fonts.size.sm,

    color: Colors.white,
  },

  space: {
    width: Spacing.xs,
  },

});