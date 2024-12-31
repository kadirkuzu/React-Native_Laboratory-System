import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../variables/colors';

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
  saveButton: {
    backgroundColor: ThemeColors.blue,
    padding: 12,
    borderRadius: 10
  },
  saveContent: {
    borderWidth: 1,
    borderColor: ThemeColors.lightGray,
    padding: 15,
    borderRadius: 10,
    gap: 20
  }
})