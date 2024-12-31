import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View } from "react-native"
import { auth } from "../../firebase"
import { Navigations } from "./navigations"
import { NavigationType } from "./params"
import { Ionicons } from '@expo/vector-icons';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {

  const navigation = useNavigation<NavigationType>();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={{ justifyContent: 'flex-start' }}>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem
        label="Logout"
        inactiveTintColor="white"
        icon={({ color, size }) => <Ionicons name={'log-out'} color={color} size={size} />}
        onPress={()=> {
          auth.signOut()
          navigation.navigate(Navigations.Auth)
        }}
      />
    </DrawerContentScrollView>
  );
}