import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ResultModalAccordion } from './result-modal-accordion/component';
import { Collections, fireStore, getDataWithCollection } from '../../../../firebase';
import { GuideValue, Guide } from '../../../models/guide';
import { FlexStyles } from '../../styles/flex-styles';
import { TextStyles } from '../../styles/text-styles';
import { DarkInput } from '../dark-input/component';
import { AnalyzValue } from '../../../models/analysis';

export type ResultType = { name: string, IgA: GuideValue, IgM: GuideValue, IgG: GuideValue, IgG1: GuideValue, IgG2: GuideValue, IgG3: GuideValue, IgG4: GuideValue }

export const ResultModal = ({ modalVisible, setModalVisible, values, showAddHistory = true, headerName }: { modalVisible: boolean, setModalVisible: Dispatch<SetStateAction<boolean>>, values: AnalyzValue, showAddHistory?: boolean, headerName?:string }) => {

    const [guides, setGuides] = useState<Guide[]>([]);
    const [activeGuides, setActiveGuides] = useState<ResultType[]>([]);
    const [patientName, setPatientName] = useState('');
    const [showSave, setShowSave] = useState(showAddHistory);

    useEffect(() => {
        getDataWithCollection<Guide>(Collections.Guides, (data) => setGuides(data));
    }, []);

    const handleCloseModal = () => {
        setModalVisible(false);
        setPatientName('')
    };

    const setValues = () => {
        let filteredGuides = [] as ResultType[]
        let months = Number(values.age)
        guides.forEach(x => {
            let IgA = x.IgA.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgG = x.IgG.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgM = x.IgM.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgG1 = x.IgG1.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgG2 = x.IgG2.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgG3 = x.IgG3.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            let IgG4 = x.IgG4.find(x => (x.minMonths <= months && (x.maxMonths > months || !x.maxMonths)))!
            filteredGuides.push({ name: x.name, IgA, IgG, IgM, IgG1, IgG2, IgG3, IgG4 })
        })
        setActiveGuides(filteredGuides)
    }

    useEffect(() => {
        if (modalVisible) {
            setValues()
        }
    }, [guides, modalVisible])

    const handleSave = async () => {
        setShowSave(false)
        const collectionRef = fireStore.collection(Collections.Analysis);
        await collectionRef.add({ values, patientName, date: new Date().toUTCString() })
    };

    return (
        <Modal visible={modalVisible} onRequestClose={handleCloseModal} animationType="fade">
            {modalVisible && (
                <SafeAreaView style={Styles.modalContainer}>
                    <StatusBar barStyle="dark-content" />
                    <View style={[FlexStyles.row, FlexStyles.alignCenter]}>
                        <TouchableOpacity onPress={handleCloseModal} >
                            <Ionicons name="chevron-back-outline" size={30} style={Styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={[TextStyles.largeBold]}>Result {!!headerName ? '- ' + headerName : ''}</Text>
                    </View>
                    <ScrollView contentContainerStyle={Styles.scrollViewContent}>
                        {
                            activeGuides.map((x, index) => (
                                <ResultModalAccordion key={index} result={x} values={values} />
                            ))
                        }
                        {
                            showSave && (
                                <View style={Styles.saveContent}>
                                    <DarkInput value={patientName} onChange={setPatientName} placeholder='Patient Name' />
                                    <TouchableOpacity style={Styles.saveButton} disabled={!patientName} onPress={handleSave}>
                                        <Text style={[TextStyles.white, TextStyles.buttonText]}>Add To History</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
            )}
        </Modal>
    );
};