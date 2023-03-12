
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen001 from '../screens/day001/HomeScreen';
import SignUp001 from '../screens/day001/SignUp';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen001} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp001} options={{headerShown:false}}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
