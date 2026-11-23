import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {

    width: "100%",

    justifyContent: "center",

    alignItems: "center",

    paddingVertical: Spacing.xxl,

  },

  text: {

    marginTop: Spacing.lg,

    color: Colors.text,

    fontFamily: Fonts.family.medium,

    fontSize: Fonts.size.md,

  },

});