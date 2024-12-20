
import { createNavigationContainerRef } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { AuthRoutes } from "./routes";
import {LoginScreen} from "../../screens/auth/login-screen/screen";
import { CreateAccountScreen } from "../../screens/auth/create-account/screen";

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

export const AuthNavigatior = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, navigationBarHidden: true, gestureEnabled:false,orientation: 'portrait' }}>
            <Stack.Screen name={AuthRoutes.Login} component={LoginScreen} />
            <Stack.Screen name={AuthRoutes.CreateAccount} component={CreateAccountScreen} />
        </Stack.Navigator>
    );
};
