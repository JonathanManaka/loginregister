import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home_screen';
import LoginScreen from './screens/login_screen';
import SignUpScreen from './screens/signup_screen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


