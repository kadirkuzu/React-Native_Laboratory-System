import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UploadButton } from './upload-button/component';
import Icon from '@expo/vector-icons/FontAwesome';
import { PatientNavigationType } from '../../../navigations/patient/params';
import { PatientRoutes } from '../../../navigations/patient/routes';
import { Styles } from './styles';
import { ScreenBackground } from '../../../shared/components/screen-background/component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddReportScreen = () => {
  const navigation = useNavigation<PatientNavigationType>();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleImageSelected = (uri: string) => {
    setImageUri(uri);
  };

  const saveReportToDevice = async () => {
    try {
      const existingReports = await AsyncStorage.getItem('reports');
      const reports = existingReports ? JSON.parse(existingReports) : [];

      const newReport = {
        date: new Date().toUTCString(),
        imageUri,
      };

      reports.push(newReport);

      await AsyncStorage.setItem('reports', JSON.stringify(reports));
      navigation.navigate(PatientRoutes.ReportList);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while saving the report.');
    }
  };

  const handleSaveReport = () => {
    setImageUri(null)
    saveReportToDevice()
  };

  return (
    <ScreenBackground>
      <View style={Styles.container}>
        <UploadButton onImageSelected={handleImageSelected} />

        <Text style={Styles.description}>
          Upload a photo of your report to save it in the system.
        </Text>

        {imageUri && (
          <View style={Styles.imageContainer}>
            <Image source={{ uri: imageUri }} style={Styles.image} />
          </View>
        )}

        {imageUri && (
          <TouchableOpacity
            style={Styles.proceedButton}
            onPress={handleSaveReport}
          >
            <Icon name="save" size={20} color="#FFF" style={Styles.proceedIcon} />
            <Text style={Styles.proceedText}>Save Report</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenBackground>
  );
};