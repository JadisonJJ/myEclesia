import { StyleSheet } from "react-native";

import {
  Colors,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  button: {

    position: "absolute",

    bottom: 25,

    right: 25,

    width: 62,

    height: 62,

    borderRadius: 31,

    backgroundColor: Colors.primary,

    justifyContent: "center",

    alignItems: "center",

    ...Shadows.large,

  },

  icon: {

    color: Colors.white,

    fontSize: 32,

    fontWeight: "300",

    marginTop: -2,

  },

});