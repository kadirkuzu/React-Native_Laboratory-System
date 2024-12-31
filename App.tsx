import { StatusBar } from 'react-native';
import { Navigation } from './src/navigations';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function App() {
  return (
    <ActionSheetProvider>
      <>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </>
    </ActionSheetProvider>
  );
}
