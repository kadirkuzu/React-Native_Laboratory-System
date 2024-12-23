import { AdminRoutes } from "./routes";
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
    [AdminRoutes.Home]: undefined;
    [AdminRoutes.Analysis]: undefined;
    [AdminRoutes.History]: undefined;
    [AdminRoutes.ReportList]: undefined;
};

export type AdminNavigationType = DrawerNavigationProp<RootStackParamList>;
