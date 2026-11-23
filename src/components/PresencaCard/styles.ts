import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Fonts,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: Colors.white,

    borderRadius: 16,

    padding: Spacing.md,

    marginBottom: Spacing.md,

    elevation: 2,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  avatar: {

    width: 46,
    height: 46,

    borderRadius: 23,

    backgroundColor: Colors.primary,

    alignItems: "center",
    justifyContent: "center",

    marginRight: Spacing.md,

  },

  initials: {

    color: Colors.white,

    fontFamily: Fonts.family.bold,

    fontSize: 16,

  },

  nome: {

    color: Colors.text,

    fontSize: 16,

    fontFamily: Fonts.family.medium,

  },

});