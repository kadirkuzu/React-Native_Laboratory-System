import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    listContainer: {
      paddingBottom: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginVertical: 8,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    nameText: {
      fontSize: 20,
      fontWeight: '600',
    },
    dateText: {
      fontSize: 14,
      marginTop: 5,
      color: '#666',
    },
  });