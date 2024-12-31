import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../shared/variables/colors";

export const Styles = StyleSheet.create({
    screen: {
        padding: 20,
        gap: 15
    },
    saveButton: {
        backgroundColor: ThemeColors.blue,
        marginVertical: 20,
        padding: 15,
        borderRadius: 10
    },
    birthdateText: {
        position: 'absolute',
        right: 0,
        zIndex: 1
    }
})