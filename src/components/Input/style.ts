import {StyleSheet} from "react-native";
import {
    Colors,
    BorderRadius,
    Spacing,
    Shadows,} from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: Spacing.md,
    },
    label: {
        color: Colors.text,
        marginBottom: Spacing.xs,
        fontWeight: "600",
        fontSize: 14,
    },
    inputContainer: {
        height: 56,
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.xl,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Spacing.md,

        ...Shadows.small,
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: 16,
        paddingVertical: 0,
        marginHorizontal: Spacing.sm,
    },

    icon: {
        justifyContent: "center",
        alignItems: "center",
    },

});