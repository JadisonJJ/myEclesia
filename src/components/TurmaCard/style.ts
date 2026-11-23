import { StyleSheet } from "react-native";

import {
  Colors,
  Fonts,
  Spacing,
  BorderRadius,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    width: "100%",

    backgroundColor: Colors.card,

    borderRadius: BorderRadius.xl,

    padding: Spacing.lg,

    ...Shadows.medium,
  },

  content: {
    flex: 1,
  },
  icon: {
    marginBottom: Spacing.md,
  },

  title: {
    fontFamily: Fonts.family.bold,

    fontSize: Fonts.size.lg,

    color: Colors.text,

    marginBottom: Spacing.sm,
  },
  subtitle: {
    marginTop: Spacing.xs,
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.size.md,
    color: Colors.textLight,
  },
  description: {
    marginTop: Spacing.sm,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.sm,
    color: Colors.textLight,
  },
  footer: {
    marginTop: Spacing.lg,

  },

  info: {
    fontFamily: Fonts.family.regular,

    fontSize: Fonts.size.md,

    color: Colors.text,

    marginBottom: Spacing.xs,
  },

  status: {
    alignSelf: "flex-start",

    marginTop: Spacing.md,

    paddingHorizontal: Spacing.md,

    paddingVertical: Spacing.xs,

    borderRadius: BorderRadius.full,
  },

  active: {
    backgroundColor: Colors.success,
  },

  inactive: {
    backgroundColor: Colors.error,
  },

  statusText: {
    color: Colors.white,

    fontFamily: Fonts.family.medium,

    fontSize: Fonts.size.sm,
  },

});