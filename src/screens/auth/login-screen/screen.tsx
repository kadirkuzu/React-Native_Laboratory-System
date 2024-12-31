import { Button, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import { useState } from "react";
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
import { AuthNavigationType } from "../../../navigations/auth/params";
import { AuthRoutes } from "../../../navigations/auth/routes";
import { ScreenBackground } from "../../../shared/components/screen-background/component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setIsLoggedIn] = useState(undefined as boolean | undefined)
    const navigation = useNavigation<NavigationType>()
    const authNavigation = useNavigation<AuthNavigationType>()

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

    const routeCreateAccount = () => {
        authNavigation.navigate(AuthRoutes.CreateAccount)
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'handled'} bounces={false} overScrollMode={'never'}>
            <ScreenBackground>
                <View style={[FlexStyles.flex, FlexStyles.center]}>
                    {
                        loggedIn == false && (
                            <View style={Styles.container}>
                                <View style={FlexStyles.gap(10)}>
                                    <Text style={[TextStyles.xLargeBold, TextStyles.white]}>
                                        Login
                                    </Text>
                                    <Text style={[TextStyles.mediumBold, TextStyles.muted, SpaceStyles.mb(10)]}>
                                        Welcome back to the app
                                    </Text>
                                </View>
                                <DarkInput onChange={setEmail} value={email} placeholder="Email" label="Email" keyboardType="email-address" />
                                <DarkInput onChange={setPassword} value={password} placeholder="Password" label="Password" isPassword={true} />
                                <TouchableOpacity style={Styles.button} onPress={login}>
                                    <Text style={TextStyles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <View style={[FlexStyles.row, FlexStyles.center]}>
                                    <Text style={[TextStyles.medium, TextStyles.white]}>Don't have an account? </Text>
                                    <Button title="Create account" onPress={routeCreateAccount} />
                                </View>
                            </View>
                        )
                    }
                </View>
            </ScreenBackground>
        </KeyboardAwareScrollView>

    )
}
