import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNavigationContainerRef } from "@react-navigation/native";
import { AdminRoutes } from "./routes";
import { HomeScreen } from "../../screens/admin/home-screen/screen";
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

export const AdminNavigator = () => {
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
            <Drawer.Screen name={AdminRoutes.Home} component={HomeScreen} options={{drawerIcon: ({color,size})=>Icon(color,size,'home-outline')}} />
        </Drawer.Navigator>
    );
};
