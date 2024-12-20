import {Text, TouchableOpacity, View} from "react-native";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../../navigations/params";
import { Navigations } from "../../../navigations/navigations";

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationType>()

    const logout = () => {
        auth.signOut()
        navigation.navigate(Navigations.Auth)
    }
    return (
        <View>
            <TouchableOpacity onPress={logout}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}
