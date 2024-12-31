import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, Image, Modal } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { ScreenBackground } from "../../../shared/components/screen-background/component";
import { Styles } from "./styles";
import { ThemeColors } from "../../../shared/variables/colors";
import { TextStyles } from "../../../shared/styles/text-styles";
import { FlexStyles } from "../../../shared/styles/flex-styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { PatientNavigationType } from "../../../navigations/patient/params";
import { PatientRoutes } from "../../../navigations/patient/routes";
import { ImagePreview } from "../../../shared/components/image-preview/component";
import { format } from "date-fns";

export const ReportListScreen = () => {

  const [reports, setReports] = useState<{ date: string, imageUri: string }[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState<{ date: string, imageUri: string } | null>(null);

  const navigation = useNavigation<PatientNavigationType>();
  const isFocused = useIsFocused();

  const loadReports = async () => {
    try {
      const storedReports = await AsyncStorage.getItem('reports');
      if (storedReports) {
        setReports(JSON.parse(storedReports));
      }
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  };

  const deleteReport = async (date: string) => {
    try {
      const updatedReports = reports.filter((report) => report.date !== date);
      setReports(updatedReports);
      await AsyncStorage.setItem('reports', JSON.stringify(updatedReports));
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  const openModal = (report: { date: string, imageUri: string }) => {
    setSelectedReport(report);
    setModalVisible(true);
  };


  useEffect(() => {
    if (isFocused) {
      loadReports();
    }
  }, [navigation, isFocused]);

  return (
    <ScreenBackground>
      <View style={Styles.container}>
        <FlatList
          data={reports}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openModal(item)} style={Styles.reportItem}>
              <Text style={Styles.reportDate}>{format(item.date,'dd/MM/yyyy HH:mm')}</Text>
              <TouchableOpacity onPress={() => deleteReport(item.date)}>
                <Ionicons name="trash" color={ThemeColors.danger} size={22} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <>
              <Text style={Styles.emptyText}>No reports found. Add your first report!</Text>
              <View style={FlexStyles.center}>
                <TouchableOpacity style={Styles.emptyContent} onPress={() => navigation.navigate(PatientRoutes.AddReport)}>
                  <FontAwesome name="upload" size={26} color={ThemeColors.white} />
                  <Text style={[TextStyles.white, TextStyles.mediumBold]}>Upload</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />
      </View>

      {selectedReport && (
        <ImagePreview isVisible={isModalVisible} setIsVisible={(val) => setModalVisible(val)} imageUri={selectedReport.imageUri} />
      )}
    </ScreenBackground>
  );
};