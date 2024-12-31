
import { createNavigationContainerRef, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigations } from "./navigations";
import { AuthNavigatior } from "./auth";
import { PatientNavigator } from "./patient";
import { AdminNavigator } from "./admin";

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={{ headerShown: false, navigationBarHidden: true, gestureEnabled: false, orientation: 'portrait' }}>
                <Stack.Screen name={Navigations.Auth} component={AuthNavigatior} />
                <Stack.Screen name={Navigations.Patient} component={PatientNavigator} />
                <Stack.Screen name={Navigations.Admin} component={AdminNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};