import { StyleSheet } from "react-native";
import {
  Colors,
  BorderRadius,
  Spacing,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,

    backgroundColor: Colors.primary,

    borderRadius: BorderRadius.xl,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",

    ...Shadows.medium,
  },

  disabled: {
    opacity: 0.55,
  },

  title: {
    color: Colors.white,

    fontSize: 18,

    fontWeight: "700",
  },

  icon: {
    marginRight: Spacing.sm,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  fullWidth: {
    width: "100%"
  },

});


