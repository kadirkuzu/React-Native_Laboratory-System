import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Styles } from './styles';
import { createNewGuide, Guide, GuideValue, GuideValueKeys } from "../../../../models/guide";
import { DarkInput } from '../../../../shared/components/dark-input/component';
import { TextStyles } from '../../../../shared/styles/text-styles';
import { NewGuideAccordion } from './new-guide-accordion/component';
import { Ionicons } from '@expo/vector-icons';
import { FlexStyles } from '../../../../shared/styles/flex-styles';
import { Collections, fireStore } from '../../../../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const AddGuidesModal = ({ modalVisible, setModalVisible }: { modalVisible: boolean, setModalVisible: Dispatch<SetStateAction<boolean>> }) => {
    const [newGuide, setNewGuide] = useState<Guide>(createNewGuide());

    const handleInputChange = (field: string, value: string | GuideValue[]) => {
        setNewGuide((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setNewGuide(createNewGuide())
    };

    const handleSave = async () => {
        const collectionRef = fireStore.collection(Collections.Guides);
        await collectionRef.add(newGuide)
        handleCloseModal();
    };

    return (
        <Modal visible={modalVisible} onRequestClose={handleCloseModal} animationType="fade">
            <SafeAreaView style={Styles.modalContainer}>
                <StatusBar barStyle="dark-content" />
                <View style={[FlexStyles.row, FlexStyles.alignCenter]}>
                    <TouchableOpacity onPress={handleCloseModal} >
                        <Ionicons name="chevron-back-outline" size={30} style={Styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={[TextStyles.largeBold]}>Add New Guide</Text>
                </View>
                <KeyboardAwareScrollView contentContainerStyle={Styles.scrollViewContent}>
                    <DarkInput onChange={(text) => handleInputChange('name', text)} value={newGuide.name} placeholder="Guide Name" />
                    {
                        GuideValueKeys.map(key => (
                            <NewGuideAccordion key={key} name={key} values={newGuide[key] as GuideValue[]} onChange={(value)=>handleInputChange(key,value)} />
                        ))
                    }
                </KeyboardAwareScrollView>
                <TouchableOpacity onPress={handleSave} style={Styles.saveButton}>
                    <Text style={[TextStyles.white,TextStyles.buttonText]}>Add</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    );
};