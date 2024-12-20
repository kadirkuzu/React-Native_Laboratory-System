import { Button, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import { useState } from "react";
import { ThemeColors } from "../../../shared/variables/colors";
import { LinearGradient } from "expo-linear-gradient";
import { DarkInput } from "../../../shared/components/dark-input/component";
import { TextStyles } from "../../../shared/styles/text-styles";
import { FlexStyles } from "../../../shared/styles/flex-styles";
import { SpaceStyles } from "../../../shared/styles/space-styles";
import { auth } from "../../../../firebase";
import { environment } from "../../../environment/environment";
import { useNavigation } from "@react-navigation/native";
import { Navigations } from "../../../navigations/navigations";
import { NavigationType } from "../../../navigations/params";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setIsLoggedIn] = useState(undefined as boolean | undefined)
    const navigation = useNavigation<NavigationType>()

    const redirectToPage = (email: string) => {
        navigation.navigate(email == environment.adminEmail ? Navigations.Admin : Navigations.Patient)
    }

    const login = async () => {
        let formattedEmail = email.toLowerCase()
        if (formattedEmail == 'admin') {
            formattedEmail = environment.adminEmail
        }

        auth.signInWithEmailAndPassword(formattedEmail, password).then(data => {
            redirectToPage(formattedEmail)
        }).catch(err => console.error(err.message))
    }

    onAuthStateChanged(getAuth(), user => {
        if (user) {
            redirectToPage(user.email!)
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    })

    return (
        <LinearGradient colors={[ThemeColors.secondary, ThemeColors.backgroundColor]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={Styles.screen}>
            {
                loggedIn == false && (
                    <View style={Styles.container}>
                        <StatusBar barStyle="light-content" />
                        <View style={FlexStyles.gap(10)}>
                            <Text style={[TextStyles.xLargeBold, TextStyles.white]}>
                                Login
                            </Text>
                            <Text style={[TextStyles.mediumBold, TextStyles.muted, SpaceStyles.mb(30)]}>
                                Welcome back to the app
                            </Text>
                        </View>
                        <DarkInput onChange={setEmail} value={email} placeholder="Email" label="Email" keyboardType="email-address" />
                        <DarkInput onChange={setPassword} value={password} placeholder="Password" label="Password" />
                        <TouchableOpacity style={Styles.button} onPress={login}>
                            <Text style={TextStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={[FlexStyles.row, FlexStyles.center]}>
                            <Text style={[TextStyles.medium, TextStyles.white]}>Don't have an account? </Text>
                            <Button title="Create account" />
                        </View>
                    </View>
                )
            }

        </LinearGradient>
    )
}
