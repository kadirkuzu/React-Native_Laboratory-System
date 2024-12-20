import { AdminRoutes } from "./routes";
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
    [AdminRoutes.Home]: undefined;
};

export type AdminNavigationType = DrawerNavigationProp<RootStackParamList>;
