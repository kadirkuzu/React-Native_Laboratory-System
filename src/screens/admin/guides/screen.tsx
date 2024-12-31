import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Collections, fireStore, getDataWithCollection } from "../../../../firebase";
import { Guide } from "../../../models/guide";
import { Styles } from "./styles";
import { GuideAccordion } from "./guide-accordion/component";
import { Ionicons } from '@expo/vector-icons';
import { TextStyles } from "../../../shared/styles/text-styles";
import { AddGuidesModal } from "./add-guides-modal/component";

export const GuidesScreen = () => {
    const [guides, setGuides] = useState<Guide[]>([]);
    const [modalVisible, setModalVisible] = useState(false)
    
    useEffect(() => {
        getDataWithCollection<Guide>(Collections.Guides, (data) => setGuides(data));
    }, []);

    const remove = async (id:string) => {
        const collectionRef = fireStore.collection(Collections.Guides);
        await collectionRef.doc(id).delete();
    }

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.addButton} onPress={()=> setModalVisible(true)}>
                <Text style={TextStyles.mediumBold}>Add Guides</Text>
                <Ionicons name="chevron-forward-outline" size={20} />
            </TouchableOpacity>
            <FlatList showsVerticalScrollIndicator={false} data={guides} renderItem={({item}) => <GuideAccordion guide={item} onRemove={remove}></GuideAccordion>} />

            <AddGuidesModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};