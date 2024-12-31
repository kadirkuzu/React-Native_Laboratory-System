import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../../shared/variables/colors';

export const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: ThemeColors.lightBackgroundColor,
  },
  scrollViewContent: {
    padding: 20,
    gap: 20
  },
  backIcon: {
    padding: 20,
  },
  saveButton : {
    backgroundColor: ThemeColors.primary,
    margin: 20,
    padding: 15,
    borderRadius: 10
  }
})