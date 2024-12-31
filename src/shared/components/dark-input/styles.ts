import { StyleSheet } from "react-native";
import { ThemeColors } from "../../variables/colors";

export const Styles = StyleSheet.create({
    input:(focused,error)=> ({
        backgroundColor: ThemeColors.secondary,
        padding: 15,
        borderRadius: 10,
        borderColor: error ? ThemeColors.danger : focused ? ThemeColors.white : ThemeColors.placeholderColor,
        color: ThemeColors.white,
        borderWidth: 1,
        fontSize: 15
    }),
    label: (labelColor: string) => ({
        color: labelColor,
        marginBottom: 10
    }),
    error: {
        color: ThemeColors.danger,
        marginTop: 10
    }
})