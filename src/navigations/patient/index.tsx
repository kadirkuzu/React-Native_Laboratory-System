import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { createNavigationContainerRef } from "@react-navigation/native";
import { PatientRoutes } from "./routes";
import { HomeScreen } from "../../screens/patient/home-screen/screen";
import { RootStackParamList } from "./params";
import { Ionicons } from '@expo/vector-icons';
import {ThemeColors} from "../../shared/variables/colors";
import { AddReportScreen } from "../../screens/patient/add-report-screen/screen";
import { ReportListScreen } from "../../screens/patient/report-list-screen/screen";

const Drawer = createDrawerNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const options = (icon: keyof typeof Ionicons.glyphMap) : DrawerNavigationOptions  => {
    return { 
        drawerIcon: ({ color, size }) => <Ionicons name={icon} color={color} size={size} />
    }
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
            <Drawer.Screen name={PatientRoutes.Home} component={HomeScreen} options={options('home-outline')} />
            <Drawer.Screen name={PatientRoutes.AddReport} component={AddReportScreen} options={options('home-outline')} />
            <Drawer.Screen name={PatientRoutes.ReportList} component={ReportListScreen} options={options('home-outline')} />
        </Drawer.Navigator>
    );
};
