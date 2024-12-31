import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../variables/colors";

export const Styles = StyleSheet.create({
    accordionContainer: {
        marginBottom: 12,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 2,
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
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: ThemeColors.lightGray,
    },
    tableHeaderText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    tableCellRes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    tableCellResText: (resultType: "high" | "low" | "normal") => ({
        fontSize: 15,
        fontWeight: "bold",
        color: resultType === "high" || resultType === "low" ? ThemeColors.danger : ThemeColors.success,
    }),
});
