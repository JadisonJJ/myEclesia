import { StyleSheet } from "react-native";

import { Colors, Spacing, Fonts, } from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
    paddingBottom: 40,
  },

  label: {
    fontSize: Fonts.size.sm,
    color: Colors.textLight,
    marginBottom: 4,
  },

  value: {
    fontSize: Fonts.size.md,
    color: Colors.text,
    lineHeight: 24,
  },

  space: {
    height: Spacing.md,
  },

});