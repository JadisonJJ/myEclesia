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

  content: {

    padding: Spacing.lg,

    alignItems: "center",

    paddingBottom: 50,

  },

  nome: {

    fontSize: 24,

    fontWeight: "700",

    color: Colors.text,

    marginTop: Spacing.md,

    marginBottom: Spacing.lg,

  },

  observacoesTitulo: {

    alignSelf: "flex-start",

    fontSize: 18,

    fontWeight: "700",

    color: Colors.text,

    marginBottom: Spacing.sm,

  },

  observacoes: {

    alignSelf: "stretch",

    backgroundColor: Colors.card,

    padding: Spacing.md,

    borderRadius: 12,

    color: Colors.text,

    lineHeight: 22,

    borderWidth: 1,

    borderColor: Colors.border,

  },

  space: {

    height: Spacing.lg,

  },

  profileCard: {

  backgroundColor: "#FFFFFF",

  borderRadius: 20,

  padding: 24,

  alignItems: "center",

  marginBottom: 20,

  elevation: 4,

  shadowColor: "#000",

  shadowOpacity: 0.08,

  shadowRadius: 8,

  shadowOffset: {

    width: 0,

    height: 4,

  },

},

subtitulo: {

  fontSize: 15,

  color: "#777",

  marginTop: 6,

},

});