import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from './src/screens/Landing';
import { GeneratedGrid } from './src/screens/GeneratedGrid';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Make Grid">
        <Stack.Screen
          name="Make Grid"
          component={Landing}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start Game"
          component={GeneratedGrid}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
