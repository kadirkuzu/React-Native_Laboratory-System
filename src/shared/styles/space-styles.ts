import { StyleSheet } from "react-native";

export const SpaceStyles = StyleSheet.create({
    mt: (marginTop:number) => ({
        marginTop
    }),
    mb: (marginBottom:number) => ({
        marginBottom
    }),
    mr: (marginRight:number) => ({
        marginRight
    }),
    ml: (marginLeft:number) => ({
        marginLeft
    })
})