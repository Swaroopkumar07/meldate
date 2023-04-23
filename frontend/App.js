import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './Screens/MainPage';
import Display from './Screens/Display';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='MainPage' component={MainPage} />
    <Stack.Screen name='Display' component={Display} />
    </Stack.Navigator>
    </NavigationContainer>
    

     
  );
}

