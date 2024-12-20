import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { PatientRoutes } from "./routes";
import { HomeScreen } from "../../screens/patient/home-screen/screen";
import { RootStackParamList } from "./params";
import { Ionicons } from '@expo/vector-icons';
import {ThemeColors} from "../../shared/variables/colors";

const Drawer = createDrawerNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const Icon = (color:string,size:number,icon:keyof typeof Ionicons.glyphMap) => {
    return (
        <Ionicons name={icon} color={color} size={size} />
    )
}

export const PatientNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor : ThemeColors.black
            },
            headerTintColor: ThemeColors.white,
            drawerStyle: {
                backgroundColor: ThemeColors.gray,
            },
            drawerActiveTintColor: ThemeColors.black,
            drawerActiveBackgroundColor: ThemeColors.white,
            drawerInactiveTintColor: ThemeColors.white
        }}>
            <Drawer.Screen name={PatientRoutes.Home} component={HomeScreen} options={{drawerIcon: ({color,size})=>Icon(color,size,'home-outline')}} />
        </Drawer.Navigator>
    );
};
