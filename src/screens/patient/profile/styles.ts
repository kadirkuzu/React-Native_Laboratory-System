import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../shared/variables/colors';

export const Styles = StyleSheet.create({
  screen: {
    padding: 20,
    gap: 20
  },
  saveButton: {
    backgroundColor: ThemeColors.blue,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10
  },
});