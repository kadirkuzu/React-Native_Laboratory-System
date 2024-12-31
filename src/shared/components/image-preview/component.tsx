import { Image, Modal, SafeAreaView, TouchableOpacity, View } from "react-native"
import * as Sharing from 'expo-sharing';
import { Styles } from "./styles";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ThemeColors } from "../../variables/colors";
import { FlexStyles } from "../../styles/flex-styles";

export const ImagePreview = ({ isVisible, setIsVisible, imageUri }: { isVisible: boolean, setIsVisible: (val: boolean) => void, imageUri: string }) => {

    const share = async () => {
        try {
            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(imageUri);
            } else {
                console.error('Sharing is not available on this device');
            }
        } catch (error) {
            console.error('Error sharing report:', error);
        }
    };

    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
            animationType="fade"
        >
            <SafeAreaView style={FlexStyles.flex}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => setIsVisible(false)} >
                        <Ionicons name="chevron-back-outline" size={30} style={Styles.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={share}>
                        <Ionicons name="share-outline" size={30} color={ThemeColors.blue} />
                    </TouchableOpacity>
                </View>
                {!!imageUri && (
                    <View style={Styles.container}>
                        <Image style={[Styles.documentPreviewCard, { resizeMode: 'contain' }]} source={{ uri: imageUri }} />
                    </View>
                )
                }
            </SafeAreaView>
        </Modal>
    )
}