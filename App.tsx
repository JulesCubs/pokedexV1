
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}