import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { createNavigationContainerRef } from "@react-navigation/native";
import { AdminRoutes } from "./routes";
import { HomeScreen } from "../../screens/admin/home-screen/screen";
import { RootStackParamList } from "./params";
import { Ionicons } from '@expo/vector-icons';
import { ThemeColors } from "../../shared/variables/colors";
import { AnalysisScreen } from "../../screens/admin/analysis-screen/screen";
import { HistoryScreen } from "../../screens/admin/history-screen/screen";
import { CustomDrawerContent } from "../custom-drawer-content";
import { GuidesScreen } from "../../screens/admin/guides/screen";

const Drawer = createDrawerNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const options = (icon: keyof typeof Ionicons.glyphMap): DrawerNavigationOptions => {
    return {
        drawerIcon: ({ color, size }) => <Ionicons name={icon} color={color} size={size} />,
    }
}

export const AdminNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: ThemeColors.black
                },
                headerTintColor: ThemeColors.white,
                drawerStyle: {
                    backgroundColor: ThemeColors.gray,
                },
                drawerActiveTintColor: ThemeColors.black,
                drawerActiveBackgroundColor: ThemeColors.white,
                drawerInactiveTintColor: ThemeColors.white
            }}>
            <Drawer.Screen name={AdminRoutes.Home} component={HomeScreen} options={options('home-outline')} />
            <Drawer.Screen name={AdminRoutes.Analysis} component={AnalysisScreen} options={options('analytics-outline')} />
            <Drawer.Screen name={AdminRoutes.Guides} component={GuidesScreen} options={options('folder-outline')} />
            <Drawer.Screen name={AdminRoutes.History} component={HistoryScreen} options={options('time-outline')} />
        </Drawer.Navigator>
    );
};
