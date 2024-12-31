import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Styles } from "./styles";
import { ResultType } from "../component";
import { Ionicons } from '@expo/vector-icons';
import { GuideValue } from "../../../../models/guide";
import { TextStyles } from "../../../styles/text-styles";
import { ThemeColors } from "../../../variables/colors";
import { SpaceStyles } from "../../../styles/space-styles";
import { AnalyzValue } from "../../../../models/analysis";

export const ResultModalAccordion = ({ result, values }: { result: ResultType, values: AnalyzValue }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const keys = Object.keys(result).filter(x => x != "name")

    const getValue = (key: string) => {
        return Number(values.values.find(x => x.key == key)!.value)
    }

    const getResultType = (key: string, maxValue: number, minValue: number): 'high' | 'low' | 'normal' => {
        let inputValue = getValue(key)
        return inputValue > maxValue ? 'high' : inputValue < minValue ? 'low' : 'normal'
    }

    return (
        <View key={result.name} style={Styles.accordionContainer}>
            <TouchableOpacity
                style={Styles.accordionHeader}
                onPress={() => setIsCollapsed((val) => !val)}
            >
                <Text style={Styles.accordionTitle}>{result.name}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View key={result.name}>
                    <View style={Styles.tableHeader}>
                        <Text style={SpaceStyles.width('24%')}></Text>
                        <Text style={[TextStyles.mediumBold,SpaceStyles.width('38%'),TextStyles.center]}>Age</Text>
                        <Text style={[TextStyles.mediumBold,SpaceStyles.width('38%'),TextStyles.end]}>Value Range</Text>
                    </View>
                    {
                        keys.map(key => {
                            let guideValue = result[key as keyof ResultType] as GuideValue
                            let months = ''
                            let minMonths: string | number = guideValue.minMonths
                            if (minMonths % 12 == 0 && minMonths != 0) minMonths = minMonths / 12 + ' years'
                            else if (minMonths != 0) minMonths = minMonths + ' months'

                            let maxMonths: string | number = guideValue.maxMonths
                            if (maxMonths % 12 == 0) maxMonths = maxMonths / 12 + ' years'
                            else maxMonths = maxMonths + ' months'

                            if (guideValue.maxMonths) months = `${minMonths} - ${maxMonths}`
                            else months = `>= ${minMonths}`

                            const resultType = getResultType(key, guideValue.maxValue, guideValue.minValue)

                            return (
                                <View key={key} style={Styles.tableRow}>
                                    <Text style={SpaceStyles.width('24%')}>{key} ({getValue(key)})</Text>
                                    <Text style={[SpaceStyles.width('38%'),TextStyles.center]}>{months}</Text>
                                    <View style={[SpaceStyles.width('38%'),Styles.tableCellRes]}>
                                        <Text style={Styles.tableCellResText(resultType)}>
                                            {`${guideValue.minValue} - ${guideValue.maxValue}`}
                                        </Text>
                                        {resultType == 'high' && <Ionicons name="arrow-up-outline" size={20} color={ThemeColors.danger} />}
                                        {resultType == 'low' && <Ionicons name="arrow-down-outline" size={20} color={ThemeColors.danger}  />}
                                    </View>

                                </View>
                            )
                        })
                    }
                </View>
            </Collapsible>
        </View>
    );
};