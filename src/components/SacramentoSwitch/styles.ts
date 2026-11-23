import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: Spacing.md,

    borderBottomWidth: 1,

    borderBottomColor: Colors.border,
  },

  textArea: {
    flex: 1,

    marginRight: Spacing.md,
  },

  title: {
    fontSize: 16,

    fontWeight: "600",

    color: Colors.text,
  },

  description: {
    marginTop: 4,

    fontSize: 13,

    color: Colors.textLight,
  },

});