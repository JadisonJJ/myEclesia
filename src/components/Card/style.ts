import { StyleSheet } from "react-native";

import {
  Colors,
  BorderRadius,
  Shadows,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    backgroundColor: Colors.white,

    borderRadius: BorderRadius.lg,

    padding: Spacing.lg,

    ...Shadows.small,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md
  },
  shadow: {
    ...Shadows.medium,
  },

  header: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    marginBottom: Spacing.md,
  },

  title: {
    fontSize: 18,

    fontWeight: "700",

    color: Colors.text,
  },

  body: {
    width: "100%",
  },

  footer: {
    marginTop: Spacing.lg,
  },
});
