import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Navigations } from './navigations';

export type RootStackParamList = {
    [Navigations.Admin]: undefined;
    [Navigations.Auth]: undefined;
    [Navigations.Patient]: undefined;
};

export type NavigationType = DrawerNavigationProp<RootStackParamList>;
