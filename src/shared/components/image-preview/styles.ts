import { Dimensions, StyleSheet } from "react-native";
import { ThemeColors } from "../../variables/colors";

export const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: ThemeColors.white
  },
  title: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 20,
    textAlign: 'center',
    zIndex: -1
  },
  container: {
    flex: 1,
  },
  documentPreviewCard: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backIcon: {
    padding: 20,
  },
})