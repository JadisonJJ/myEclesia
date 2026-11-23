import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  overlay: {
    flex: 1,

    justifyContent: "center",

    backgroundColor: "rgba(0,0,0,0.45)",

    padding: Spacing.lg,
  },

  container: {
    backgroundColor: Colors.white,

    borderRadius: 20,

    padding: Spacing.lg,

    ...Shadows.large,
  },

  title: {
    fontSize: 20,

    fontWeight: "700",

    color: Colors.primary,

    marginBottom: Spacing.lg,
  },

  item: {
    paddingVertical: Spacing.md,

    borderBottomWidth: 1,

    borderBottomColor: Colors.border,
  },

  itemText: {
    fontSize: 16,

    color: Colors.text,
  },

  cancelButton: {
    marginTop: Spacing.lg,

    alignItems: "center",
  },

  cancelText: {
    fontSize: 16,

    fontWeight: "600",

    color: Colors.error,
  },

});