import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import useAuth from '../hooks/useAuth'
import GenderScreen from '../screens/components/GenderScreen'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const {user} = useAuth();
  if(user){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Gender" options={{headerShown: false}} component={GenderScreen} />

      </Stack.Navigator>
  </NavigationContainer>
    )
  }else{
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>
  </NavigationContainer>
    )
  }
}

export default AppNavigation