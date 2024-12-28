import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../shared/variables/colors";

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '90%',
        gap: 30,
        padding: 30,
        borderRadius: 15
    },
    button : {
        backgroundColor: ThemeColors.blue,
        padding: 15,
        borderRadius: 10
    }
})