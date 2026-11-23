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
    marginBottom: Spacing.lg,
  },

  contentArea: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },

  listArea: {
    paddingBottom: 120,
  },

  buttonArea: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },

  emptyText: {

  textAlign: "center",

  marginTop: 40,

  fontSize: 16,

  color: Colors.textLight,

},

});