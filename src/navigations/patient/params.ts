import { PatientRoutes } from "./routes";
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
    [PatientRoutes.Home]: undefined;
    [PatientRoutes.AddReport]: undefined;
    [PatientRoutes.ReportList]: undefined;
};

export type PatientNavigationType = DrawerNavigationProp<RootStackParamList>;
