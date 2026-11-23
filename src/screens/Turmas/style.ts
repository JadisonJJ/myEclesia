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

  searchArea: {
    paddingHorizontal: Spacing.lg,

    paddingTop: Spacing.md,
  },

  listArea: {
    flex: 1,

    paddingHorizontal: Spacing.lg,

    paddingTop: Spacing.lg,
  },

  fabArea: {
    position: "absolute",

    right: Spacing.lg,

    bottom: Spacing.xl,
  },
  fab: {
  width: 60,

  height: 60,

  borderRadius: 30,

  backgroundColor: Colors.primary,

  justifyContent: "center",

  alignItems: "center",
},

fabText: {
  color: Colors.white,

  fontSize: 34,

  fontWeight: "bold",

  marginTop: -2,
},
cardSpacing: {
  height: Spacing.md,
},

});