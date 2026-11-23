import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: Colors.background,

    paddingHorizontal: Spacing.lg,

    paddingTop: 20,
  },

  headerArea: {
    marginBottom: Spacing.lg,
  },

  greetingArea: {
    marginBottom: Spacing.xl,
  },
  greeting: {
  fontSize: 28,

  fontWeight: "700",

  color: Colors.text,
},

message: {
  marginTop: Spacing.xs,

  fontSize: 16,

  color: Colors.textLight,
},

  quickAccessArea: {
    marginBottom: Spacing.xl,
  },

  classesArea: {
    flex: 1,
  },
  row: {
  flexDirection: "row",

  justifyContent: "space-between",
},

space: {
  height: Spacing.md,
},
icon: {
  fontSize: 34,
},

sectionTitle: {
  fontSize: 22,

  fontWeight: "700",

  color: Colors.text,

  marginBottom: Spacing.sm,
},

});