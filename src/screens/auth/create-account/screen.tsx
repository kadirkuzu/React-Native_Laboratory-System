import { Alert, Button, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import { useState } from "react";
import { ThemeColors } from "../../../shared/variables/colors";
import { LinearGradient } from "expo-linear-gradient";
import { DarkInput } from "../../../shared/components/dark-input/component";
import { TextStyles } from "../../../shared/styles/text-styles";
import { FlexStyles } from "../../../shared/styles/flex-styles";
import { SpaceStyles } from "../../../shared/styles/space-styles";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationType } from "../../../navigations/auth/params";
import { AuthRoutes } from "../../../navigations/auth/routes";

export const CreateAccountScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const authNavigation = useNavigation<AuthNavigationType>()

    const routeLogin = () => {
        authNavigation.navigate(AuthRoutes.Login)
    }

    const createAccount = async () => {
        auth.createUserWithEmailAndPassword(email, password).catch(err => Alert.alert('Email already in use.'))
    }

    const passwordError = () => {
        return confirmPassword != '' && password != confirmPassword
    }

    return (
        <LinearGradient colors={[ThemeColors.secondary, ThemeColors.backgroundColor]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={Styles.screen}>
            {
                <View style={Styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={FlexStyles.gap(10)}>
                        <Text style={[TextStyles.xLargeBold, TextStyles.white]}>
                            Create An Account
                        </Text>
                        <Text style={[TextStyles.mediumBold, TextStyles.muted, SpaceStyles.mb(10)]}>
                            Create new account to continue
                        </Text>
                    </View>
                    <DarkInput onChange={setEmail} value={email} placeholder="Email" label="Email" keyboardType="email-address" />
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
            }

        </LinearGradient>
    )
}
