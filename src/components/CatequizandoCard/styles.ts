import { StyleSheet } from "react-native";

import {
  Colors,
  Spacing,
  Shadows,
} from "../../theme";

export const styles = StyleSheet.create({

  container: {

    backgroundColor: Colors.card,

    borderRadius: 20,

    padding: Spacing.lg,

    marginBottom: Spacing.lg,

    ...Shadows.medium,

  },

  nome: {

    fontSize: 20,

    fontWeight: "700",

    color: Colors.text,

  },

  turma: {

    marginTop: 6,

    color: Colors.textLight,

  },

  info: {

    marginTop: 10,

    color: Colors.textLight,

  },

  header: {

  flexDirection: "row",

  justifyContent: "space-between",

  alignItems: "center",

  marginBottom: 18,

},

nameArea: {

  marginLeft: 14,

  flex: 1,

},

idade: {

  marginTop: 4,

  color: Colors.textLight,

  fontSize: 14,

},

leftArea: {

    flexDirection: "row",

    alignItems: "center",

    flex: 1,

},

});