import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../../../shared/variables/colors";

export const Styles = StyleSheet.create({
    accordionContainer: {
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    accordionHeader: {
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: ThemeColors.secondary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    accordionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    section: {
        paddingVertical: 12,
        paddingHorizontal: 18,
        gap: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: ThemeColors.primary,
        marginBottom: 5
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
    saveButton : {
        backgroundColor: ThemeColors.blue,
        margin: 20,
        padding: 15,
        borderRadius: 10
    }
});