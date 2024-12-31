import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../shared/variables/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  reportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: ThemeColors.white,
    borderRadius: 10,
  },
  reportImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#888',
  },
  emptyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: ThemeColors.backgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    backgroundColor: ThemeColors.secondary,
    padding: 10,
    borderRadius: 5,
  },
  reportDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Koyu arka plan
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: ThemeColors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
  },
});