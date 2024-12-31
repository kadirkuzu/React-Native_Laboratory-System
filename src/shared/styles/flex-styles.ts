import { StyleSheet } from "react-native";

export const FlexStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    flex: {
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    gap : (gap:number)=> ({
        gap
    })
})