import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { PatientNavigationType } from '../../../navigations/patient/params';
import { PatientRoutes } from '../../../navigations/patient/routes';
import { FlexStyles } from '../../../shared/styles/flex-styles';
import { auth } from '../../../../firebase';
import { User } from 'firebase/auth';

export const HomeScreen = () => {
    const navigation = useNavigation<PatientNavigationType>();
    const isFocused = useIsFocused()
    const [user, setUser] = useState(null as null | User)

    useEffect(()=>{
        setUser(auth.currentUser)
    },[isFocused])

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <View style={[FlexStyles.row, FlexStyles.center]}>
                <Text style={Styles.title}>Welcome, </Text>
                <Text style={Styles.title}>{auth.currentUser?.displayName}</Text>
            </View>
            <Text style={Styles.description}>
                Easily manage your health reports and track your results.
            </Text>

            <View style={Styles.featuresContainer}>
                <Text style={Styles.featuresTitle}>Key Features</Text>

                <View style={Styles.featureItem}>
                    <Ionicons name="camera-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>Capture and upload your results</Text>
                </View>

                <View style={Styles.featureItem}>
                    <Ionicons name="list-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>View and manage your reports</Text>
                </View>
            </View>

            <View style={Styles.navigationContainer}>
                <TouchableOpacity
                    style={Styles.navButton}
                    onPress={() => navigation.navigate(PatientRoutes.AddReport)}
                >
                    <Ionicons name="cloud-upload-outline" size={24} color="#fff" />
                    <Text style={Styles.navButtonText}>Upload Results</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.navButton}
                    onPress={() => navigation.navigate(PatientRoutes.ReportList)}
                >
                    <Ionicons name="document-outline" size={24} color="#fff" />
                    <Text style={Styles.navButtonText}>View Reports</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};