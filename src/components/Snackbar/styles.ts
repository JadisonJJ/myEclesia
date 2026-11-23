import { StyleSheet } from "react-native";

import { Colors, Spacing, } from "../../theme";

export const styles = StyleSheet.create({

  container: {

    backgroundColor: Colors.success,

    padding: Spacing.md,

    borderRadius: 12,

    alignItems: "center",

    justifyContent: "center",

    position: "absolute",

    bottom: 30,

    left: 20,

    right: 20,

    
  },

  message: {

    color: Colors.white,

    fontSize: 16,

    fontWeight: "600",

  },
    success: {

    backgroundColor: Colors.success,

  },

  error: {

    backgroundColor: Colors.error,

  },

  warning: {

    backgroundColor: Colors.warning,

  },

  text: {

    color: Colors.white,

    fontWeight: "600",

    fontSize: 15,

  },

  info: {

  backgroundColor: Colors.primary,

},

});