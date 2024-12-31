import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { AdminRoutes } from "../../../navigations/admin/routes";
import { AdminNavigationType } from "../../../navigations/admin/params";
import { uploadDataIfCollectionNotExists } from '../../../../firebase';

export const HomeScreen = () => {
    const navigation = useNavigation<AdminNavigationType>();

    useEffect(()=>{
        uploadDataIfCollectionNotExists()
    },[])

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text style={Styles.title}>Welcome to Admin Portal</Text>
            <Text style={Styles.description}>
                Manage patient reports and ensure accurate health insights.
            </Text>

            <View style={Styles.featuresContainer}>
                <Text style={Styles.featuresTitle}>Key Features</Text>

                <View style={Styles.featureItem}>
                    <Ionicons name="document-text-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>Analyze patient reports</Text>
                </View>

                <View style={Styles.featureItem}>
                    <Ionicons name="save-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>Save analyses for future reference</Text>
                </View>

                <View style={Styles.featureItem}>
                    <Ionicons name="time-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>Access analysis history</Text>
                </View>
                <View style={Styles.featureItem}>
                    <Ionicons name="folder-outline" size={30} color="#333" />
                    <Text style={Styles.featureText}>Add and remove guides</Text>
                </View>
            </View>

            <View style={Styles.navigationContainer}>
                <TouchableOpacity
                    style={Styles.navButton}
                    onPress={() => navigation.navigate(AdminRoutes.Analysis)}
                >
                    <Ionicons name="analytics-outline" size={24} color="#fff" />
                    <Text style={Styles.navButtonText}>Analyze Report</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.navButton}
                    onPress={() => navigation.navigate(AdminRoutes.History)}
                >
                    <Ionicons name="time-outline" size={24} color="#fff" />
                    <Text style={Styles.navButtonText}>View Analysis History</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};