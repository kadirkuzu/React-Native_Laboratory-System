import { Text, TouchableOpacity, View } from "react-native";
import { Guide, GuideValue, GuideValueKeys } from "../../../../models/guide";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Styles } from "./styles";
import { TextStyles } from "../../../../shared/styles/text-styles";

export const GuideAccordion = ({ guide, onRemove }: { guide: Guide, onRemove: (id: string) => void }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <View key={guide.name} style={Styles.accordionContainer}>
            <TouchableOpacity
                style={Styles.accordionHeader}
                onPress={() => setIsCollapsed((val) => !val)}
            >
                <View style={Styles.justifyBetween}>
                    <Text style={Styles.accordionTitle}>{guide.name}</Text>
                    <TouchableOpacity onPress={() => onRemove(guide.id!)}>
                        <Text style={TextStyles.danger}>Remove Guide</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {GuideValueKeys.map((key, index) => {
                    const guideValues = guide[key] as GuideValue[];

                    return (
                        <View key={key} style={[Styles.section]}>
                            <Text style={Styles.sectionTitle}>{key}</Text>

                            <View style={Styles.tableHeader}>
                                <Text style={Styles.tableHeaderText}>Age</Text>
                                <Text style={Styles.tableHeaderText}>Value Range</Text>
                            </View>

                            {guideValues.map((guideValue, index) => {
                                let months = ''
                                let minMonths: string | number = guideValue.minMonths
                                if (minMonths % 12 == 0 && minMonths != 0) minMonths = minMonths / 12 + ' years'
                                else if (minMonths != 0) minMonths = minMonths + ' months'

                                let maxMonths: string | number = guideValue.maxMonths
                                if (maxMonths % 12 == 0) maxMonths = maxMonths / 12 + ' years'
                                else maxMonths = maxMonths + ' months'

                                if (guideValue.maxMonths) months = `${minMonths} - ${maxMonths}`
                                else months = `>= ${minMonths}`
                                return (
                                    <View key={index} style={Styles.tableRow}>
                                        <Text style={Styles.tableCell}>{months}</Text>
                                        <Text style={Styles.tableCell}>{`${guideValue.minValue} - ${guideValue.maxValue}`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    );
                })}
            </Collapsible>
        </View>
    );
};