import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

    container: {
    flex: 1,

    backgroundColor: Colors.background,

    paddingHorizontal: Spacing.xl,

    paddingTop: 60,

    paddingBottom: 30,
  },

  logoArea: {
    alignItems: "center",

    marginTop: 50,
    marginBottom: Spacing.xl
  },
  titleArea: {
  alignItems: "center",

  marginTop: Spacing.lg,
},

title: {
  fontSize: 32,

  fontWeight: "700",

  color: Colors.primary,
},

subtitle: {
  marginTop: Spacing.sm,

  fontSize: 16,

  color: Colors.textLight,

  textAlign: "center",
},

  formArea: {
    marginTop: Spacing.xxl,
    width: "100%",
    alignSelf: "center",

  },

  bottomArea: {
  marginTop: "auto",
  alignItems: "center",
  width: "100%",
  paddingBottom: Spacing.lg,
},
  buttonArea: {
    marginTop: Spacing.xl,
    width: "100%",

  },

  space: {
    height: Spacing.md,
  },

});