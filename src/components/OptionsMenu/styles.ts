import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  button: {

    padding: Spacing.sm,

  },

  modal: {

    backgroundColor: Colors.white,

    borderRadius: 14,

    padding: Spacing.md,

    elevation: 8,

  },

  option: {

    paddingVertical: 12,

  },

  text: {

    fontSize: 16,

    color: Colors.text,

  },

  danger: {

    color: Colors.error,

  },

});