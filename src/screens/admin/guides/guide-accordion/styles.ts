import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../../shared/variables/colors";

export const Styles = StyleSheet.create({
    accordionContainer: {
        marginBottom: 12,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    accordionHeader: {
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: ThemeColors.secondary,
    },
    accordionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    section: {
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    justifyBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: ThemeColors.primary,
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        marginBottom: 10,
    },
    tableHeaderText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        width: "45%",
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    tableCell: {
        fontSize: 14,
        color: "#333",
        width: "45%",
        textAlign: "center",
    },
});