import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    marginBottom: Spacing.md,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: Spacing.xs,
  },

  field: {
    backgroundColor: Colors.white,
    borderRadius: 14,

    borderWidth: 1,
    borderColor: Colors.border,

    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    ...Shadows.small,
  },

  value: {
    fontSize: 16,
    color: Colors.text,
  },

  placeholder: {
    fontSize: 16,
    color: Colors.textLight,
  },

});