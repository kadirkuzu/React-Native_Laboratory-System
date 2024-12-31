import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import { useState } from "react";
import { DarkInput } from "../../../shared/components/dark-input/component";
import { TextStyles } from "../../../shared/styles/text-styles";
import { FlexStyles } from "../../../shared/styles/flex-styles";
import { SpaceStyles } from "../../../shared/styles/space-styles";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationType } from "../../../navigations/auth/params";
import { AuthRoutes } from "../../../navigations/auth/routes";
import { ScreenBackground } from "../../../shared/components/screen-background/component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const CreateAccountScreen = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const authNavigation = useNavigation<AuthNavigationType>()

    const routeLogin = () => {
        authNavigation.navigate(AuthRoutes.Login)
    }

    const createAccount = async () => {
        auth.createUserWithEmailAndPassword(email, password).then(async (result) => {
            await auth.currentUser?.updateProfile({
                displayName: userName
            })
            routeLogin()
        }).catch(err => Alert.alert('Email already in use.'))
    }

    const passwordError = () => {
        return confirmPassword != '' && password != confirmPassword
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'handled'} bounces={false} overScrollMode={'never'}>
            <ScreenBackground>
                <View style={[FlexStyles.flex, FlexStyles.center]}>
                    <View style={Styles.container}>
                        <View style={FlexStyles.gap(10)}>
                            <Text style={[TextStyles.xLargeBold, TextStyles.white]}>
                                Create An Account
                            </Text>
                            <Text style={[TextStyles.mediumBold, TextStyles.muted, SpaceStyles.mb(10)]}>
                                Create new account to continue
                            </Text>
                        </View>
                        <DarkInput onChange={setEmail} value={email} placeholder="Email" label="Email" keyboardType="email-address" />
                        <DarkInput onChange={setUserName} value={userName} placeholder="Username" label="Username" />
                        <DarkInput onChange={setPassword} value={password} placeholder="Password" label="Password" isPassword={true} />
                        <DarkInput onChange={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" label="Confirm Password"
                            error={passwordError() ? 'Passwords do not match' : ''} isPassword={true} />
                        <TouchableOpacity style={Styles.button} onPress={createAccount}>
                            <Text style={TextStyles.buttonText}>Create Account</Text>
                        </TouchableOpacity>
                        <View style={[FlexStyles.row, FlexStyles.center]}>
                            <Text style={[TextStyles.medium, TextStyles.white]}>Already have an account? </Text>
                            <Button title="Login" onPress={routeLogin} />
                        </View>
                    </View>
                </View>
            </ScreenBackground>
        </KeyboardAwareScrollView>

    )
}
