import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  headerArea: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  contentArea: {
    flex: 1,
    paddingHorizontal: 20,
  },

  infoCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: Colors.textLight,
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "600",
  },

  buttonArea: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  fieldSpacing: {
    height: 12,
  },
  
});