import { AuthRoutes } from "./routes";
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
    [AuthRoutes.Login]: undefined;
    [AuthRoutes.CreateAccount]: undefined;
};

export type AuthNavigationType = DrawerNavigationProp<RootStackParamList>;
