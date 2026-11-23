import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.medium,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  icon: {
    marginRight: Spacing.sm,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.primary,
  },

});