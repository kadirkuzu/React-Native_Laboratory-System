import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../shared/variables/colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.lightBackgroundColor,
        padding: 20,
    },
    addButton : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    }
});