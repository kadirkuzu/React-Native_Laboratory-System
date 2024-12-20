import { KeyboardTypeOptions, Text, TextInput, View } from "react-native"
import { Styles } from "./styles"
import { ThemeColors } from "../../variables/colors"
import { useState } from "react"

interface Props {
    onChange: (value: string) => void,
    value: string,
    placeholder: string,
    label?:string,
    keyboardType?: KeyboardTypeOptions
}


export const DarkInput = ({ onChange, value, placeholder,label, keyboardType }: Props) => {
    const [focused, setFocused] = useState(false)

    const setIsFocused = () => {
        setFocused(value => !value)
    }

    return (
        <View>
            {label && (
                <Text style={Styles.label}>{label}</Text>
            )}
            <TextInput
                onChangeText={onChange}
                onFocus={setIsFocused}
                onBlur={setIsFocused}
                value={value}
                placeholder={placeholder}
                style={[Styles.input(focused)]}
                placeholderTextColor={ThemeColors.placeholderColor}
                keyboardType={keyboardType ?? 'default'}
                autoCapitalize="none"
            />
        </View>
    )
}