import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",

    alignItems: "center",

    marginBottom: Spacing.sm,
  },

  icon: {
    width: 22,

    alignItems: "center",

    marginRight: Spacing.sm,
  },

  label: {
    flex: 1,

    fontFamily: Fonts.family.regular,

    fontSize: Fonts.size.md,

    color: Colors.textLight,
  },

});