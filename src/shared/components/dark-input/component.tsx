import { KeyboardTypeOptions, ReturnKeyTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import { Styles } from "./styles";
import { ThemeColors } from "../../variables/colors";
import React, { useState, forwardRef } from "react";

interface Props {
    onChange: (value: string) => void,
    value: string | number,
    placeholder: string,
    label?: string,
    keyboardType?: KeyboardTypeOptions,
    error?: string,
    isPassword?: boolean,
    autoFocus?: boolean,
    style?: StyleSheet.NamedStyles<any>,
    labelColor?: string,
    onSubmitEditing?: () => void,
    onEndEditing?: () => void,
    returnKeyType?: ReturnKeyTypeOptions
}

export const DarkInput = forwardRef<TextInput, Props>(({
    onChange, value, placeholder, label, keyboardType, error, isPassword = false,
    autoFocus = false, style = {}, labelColor = ThemeColors.white, onSubmitEditing,onEndEditing, returnKeyType
}: Props, ref) => {
    const [focused, setFocused] = useState(false);

    const setIsFocused = () => {
        setFocused(prev => !prev);
    };

    const setValue = (val:string) => {
        if(keyboardType == 'numeric') onChange(val.replace(/,/, '.'))
        else onChange(val)
    }

    return (
        <View>
            {!!label && (
                <Text style={Styles.label(labelColor)}>{label}</Text>
            )}
            <TextInput
                onChangeText={setValue}
                value={value.toString()}
                placeholder={placeholder}
                style={[Styles.input(focused, !!error), style]}
                placeholderTextColor={ThemeColors.placeholderColor}
                keyboardType={keyboardType ?? 'default'}
                autoCapitalize="none"
                secureTextEntry={isPassword}
                autoFocus={autoFocus}
                ref={ref}
                onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
                onEndEditing={onEndEditing}
                returnKeyType={returnKeyType}
                autoCorrect={false}
                onFocus={setIsFocused}
                onBlur={setIsFocused}
            />
            {!!error && (
                <Text style={Styles.error}>{error}</Text>
            )}
        </View>
    );
});