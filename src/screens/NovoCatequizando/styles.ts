import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  headerArea: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },

  formArea: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },

  fieldSpacing: {
    height: Spacing.md,
  },

  buttonArea: {
    padding: Spacing.lg,
  },

});