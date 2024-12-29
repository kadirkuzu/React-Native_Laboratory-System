import { StatusBar } from 'react-native';
import { Navigation } from './src/navigations';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </>
  );
}
