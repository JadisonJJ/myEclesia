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
    width: "100%",

    height: 52,

    backgroundColor: Colors.white,

    borderRadius: BorderRadius.xl,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: Spacing.md,

    ...Shadows.small,
  },

  icon: {
    fontSize: 18,

    marginRight: Spacing.sm,
  },

  input: {
    flex: 1,

    fontFamily: Fonts.family.regular,

    fontSize: Fonts.size.md,

    color: Colors.text,
  },

  clear: {
    fontSize: 18,

    color: Colors.textLight,

    marginLeft: Spacing.sm,
  },

});