import { StyleSheet } from "react-native";
import { ThemeColors } from "../../variables/colors";

export const Styles = StyleSheet.create({
    input:(focused)=> ({
        backgroundColor: ThemeColors.secondary,
        padding: 20,
        borderRadius: 10,
        borderColor: focused ? ThemeColors.white : ThemeColors.placeholderColor,
        color: ThemeColors.white,
        borderWidth: 1,
        fontSize: 15
    }),
    label: {
        color: ThemeColors.white,
        marginBottom: 10
    }
})