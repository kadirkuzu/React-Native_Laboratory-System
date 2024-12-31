import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GuideValueKeys } from "../../../models/guide";
import { DarkInput } from "../../../shared/components/dark-input/component";
import { Styles } from "./styles";
import { ThemeColors } from "../../../shared/variables/colors";
import { TextStyles } from "../../../shared/styles/text-styles";
import { ResultModal } from "../../../shared/components/result-modal/component";
import { AnalyzValue } from "../../../models/analysis";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { differenceInMonths } from "date-fns";
import { ScreenBackground } from "../../../shared/components/screen-background/component";

export const AnalysisScreen = () => {
    const [values, setValues] = useState<AnalyzValue>({ age: '', values: GuideValueKeys.map(x => ({ key: x, value: '' })) });
    const [modalVisible, setModalVisible] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date);

    const ageInputRef = useRef(null as any);
    const guideInputRefs = useRef([] as any);

    const handleConfirm = (date: Date) => {
        setDate(date)
        let month = differenceInMonths(new Date(), date)
        setAge(month.toString())
        setDatePickerVisibility(false)
    };

    const setAge = (age: string) => {
        setValues(old => ({ ...old, age }))
    }

    const setValue = (key: string, value: string) => {
        setValues(old => ({ ...old, values: old.values.map(x => x.key == key ? { key, value } : x) }))
    }

    const handleNextFocus = (index: number) => {
        if (guideInputRefs.current[index]) {
            guideInputRefs.current[index].focus();
        }
    };

    return (
        <ScreenBackground>
            <KeyboardAwareScrollView contentContainerStyle={Styles.screen}>
                <DateTimePickerModal
                    date={date}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    maximumDate={new Date()}
                    textColor={ThemeColors.primary}
                    buttonTextColorIOS={ThemeColors.primary}
                    onConfirm={handleConfirm}
                    onCancel={() => setDatePickerVisibility(false)}
                    pickerContainerStyleIOS={{ justifyContent: "center", paddingHorizontal: 40 }}
                />
                <View>
                    <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={Styles.birthdateText}>
                        <Text style={[TextStyles.white, TextStyles.mediumBold]}>Select Birthdate</Text>
                    </TouchableOpacity>
                    <DarkInput value={values.age} onChange={setAge} placeholder="Age (Months)" label="Age (Months)"
                        returnKeyType={"next"} ref={ageInputRef} onSubmitEditing={() => handleNextFocus(0)} keyboardType="number-pad" />
                </View>
                {
                    GuideValueKeys.map((key, index) => (
                        <DarkInput key={key} value={values.values.find(x => x.key == key)!.value} onChange={(val) => setValue(key, val)} returnKeyType="next" onSubmitEditing={() => handleNextFocus(index + 1)}
                            placeholder={key} label={key} ref={(el) => (guideInputRefs.current[index] = el)} keyboardType="number-pad" />
                    ))
                }
                <TouchableOpacity onPress={() => setModalVisible(true)} style={Styles.saveButton} disabled={!values.age || values.values.some(x => !x.value && x.value != '0')}>
                    <Text style={[TextStyles.white, TextStyles.buttonText]}>See Result</Text>
                </TouchableOpacity>

                <ResultModal modalVisible={modalVisible} setModalVisible={setModalVisible} values={values} />

            </KeyboardAwareScrollView>
        </ScreenBackground>


    )
}
