import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Collections, fireStore, getDataWithCollection } from "../../../../firebase";
import { Styles } from "./styles";
import { Analysis, AnalyzValue } from "../../../models/analysis";
import { ScreenBackground } from "../../../shared/components/screen-background/component";
import { format } from 'date-fns';
import { ResultModal } from "../../../shared/components/result-modal/component";
import { Ionicons } from '@expo/vector-icons';
import { ThemeColors } from "../../../shared/variables/colors";

export const HistoryScreen = () => {
    const [analysis, setAnalysis] = useState<Analysis[]>([]);
    const [activeValue, setActiveValue] = useState<Analysis | undefined>();
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        getDataWithCollection<Analysis>(Collections.Analysis, (data) => setAnalysis(data));
    }, []);

    const remove = async (id: string) => {
        const collectionRef = fireStore.collection(Collections.Analysis);
        await collectionRef.doc(id).delete();
    }

    const openResult = (analysis: Analysis) => {
        setActiveValue(analysis)
        setModalVisible(true)
    }

    return (
        <ScreenBackground>
            <View style={Styles.container}>
                <FlatList
                    data={analysis}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.date} style={Styles.itemContainer} onPress={()=>openResult(item)} >
                            <View>
                                <Text style={Styles.nameText}>{item.patientName}</Text>
                                <Text style={Styles.dateText}>{format(item.date,'dd/MM/yyyy HH:mm')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => remove(item.id)}>
                                <Ionicons name="trash" color={ThemeColors.danger} size={22} />
                            </TouchableOpacity>

                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={Styles.listContainer}
                />
            </View>

            {
                !!activeValue && (
                    <ResultModal modalVisible={modalVisible} setModalVisible={setModalVisible} showAddHistory={false} values={activeValue.values} headerName={activeValue.patientName} ></ResultModal>
                )
            }

        </ScreenBackground>
    );
};