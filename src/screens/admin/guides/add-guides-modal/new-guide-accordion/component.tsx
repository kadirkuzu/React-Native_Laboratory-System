import { Text, TouchableOpacity, View } from "react-native";
import { GuideValue } from "../../../../../models/guide";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Styles } from "./styles";
import { DarkInput } from "../../../../../shared/components/dark-input/component";
import { ThemeColors } from "../../../../../shared/variables/colors";
import { TextStyles } from "../../../../../shared/styles/text-styles";

export const NewGuideAccordion = ({ name, values, onChange }: { name: string, values: GuideValue[], onChange: (value: GuideValue[]) => void }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleChange = (index: number, field: string, val: string) => {
        onChange(values.map((value, i) => index == i ? { ...value, [field]: val } : value))
    }

    const addRange = () => {
        onChange([...values, { minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0 }])
    }

    const removeRange = (index: number) => {
        onChange(values.filter((_, i) => i !== index));
    };

    return (
        <View key={name} style={Styles.accordionContainer}>
            <TouchableOpacity
                style={Styles.accordionHeader}
                onPress={() => setIsCollapsed((val) => !val)}
            >
                <Text style={Styles.accordionTitle}>{name}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {
                    <>
                        {values.map((item, index) => (
                            <View style={Styles.section} key={index} >
                                <View style={Styles.sectionHeader}>
                                    <Text style={Styles.sectionTitle}>Value Range {index + 1}</Text>
                                    {values.length != 1 && (
                                        <TouchableOpacity onPress={() => removeRange(index)}>
                                            <Text style={TextStyles.danger}>Remove range</Text>
                                        </TouchableOpacity>
                                    )}

                                </View>
                                <DarkInput value={item.minMonths} onChange={(val) => handleChange(index, 'minMonths', val)} placeholder="Min Age(Months)" label="Min Age(Months)" keyboardType="numeric" labelColor={ThemeColors.black} />
                                <DarkInput value={item.maxMonths} onChange={(val) => handleChange(index, 'maxMonths', val)} placeholder="Max Age(Months)" label="Max Age(Months)" keyboardType="numeric" labelColor={ThemeColors.black} />
                                <DarkInput value={item.minValue} onChange={(val) => handleChange(index, 'minValue', val)} placeholder="Min Value" label="Min Value" keyboardType="numeric" labelColor={ThemeColors.black} />
                                <DarkInput value={item.maxValue} onChange={(val) => handleChange(index, 'maxValue', val)} placeholder="Max Value" label="Max Value" keyboardType="numeric" labelColor={ThemeColors.black} />
                            </View>
                        ))}

                        <TouchableOpacity onPress={addRange} style={Styles.saveButton}>
                            <Text style={[TextStyles.white, TextStyles.buttonText]}>Add new range</Text>
                        </TouchableOpacity>
                    </>


                }
            </Collapsible>
        </View>
    );
};