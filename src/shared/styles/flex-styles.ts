import { StyleSheet } from "react-native";

export const FlexStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    gap : (gap:number)=> ({
        gap
    })
})