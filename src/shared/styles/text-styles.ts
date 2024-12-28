import { StyleSheet } from "react-native";
import { ThemeColors } from "../variables/colors";

export const TextStyles = StyleSheet.create({
    white: {
        color: ThemeColors.white
    },
    muted: {
        color: ThemeColors.lightGray
    },
    center: {
        textAlign: 'center'
    },
    large: {
        fontSize: 25,
        fontWeight: 500,
    },
    largeBold: {
        fontSize: 25,
        fontWeight: 600,
    },
    xLargeBold: {
        fontSize: 35,
        fontWeight: 600,
    },
    medium: {
        fontSize: 15,
        fontWeight: 500,
    },
    mediumBold: {
        fontSize: 15,
        fontWeight: 600,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        color: ThemeColors.white,
    }
})