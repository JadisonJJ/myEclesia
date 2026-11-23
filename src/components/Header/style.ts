import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Shadows,
  BorderRadius,
  Fonts,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    paddingHorizontal: Spacing.lg,
    paddingTop: 54,
    paddingBottom: Spacing.md,

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "space-between",

    backgroundColor: Colors.white,

    ...Shadows.small,
  },
  
  topRow: {

        width: "100%",
        flexDirection: "row",
        
        justifyContent: "space-between",

        alignItems: "center",
  },

  left: {
    width: 40,

    alignItems: "flex-start",

    justifyContent: "center",
  },

  center: {
    flex: 1,
    marginHorizontal:Spacing.md,

    alignItems: "center",
  },

  right: {
    width: 40,

    alignItems: "flex-end",

    justifyContent: "center",
  },

  title: {
    fontSize: Fonts.size.xl,
    fontFamily:Fonts.family.bold,

    fontWeight: "700",

    color: Colors.text,
  },

  subtitle: {
      marginTop:Spacing.xs,

        fontFamily:Fonts.family.regular,

        fontSize:Fonts.size.sm,

        color:Colors.textLight,
  },
  divider:{

        marginTop:Spacing.md,

        height:1,

        backgroundColor:Colors.border,

    }
});