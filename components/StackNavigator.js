
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen001 from '../screens/day001/HomeScreen';
import SignUp001 from '../screens/day001/SignUp';
import HomeScreen002 from '../screens/day002/HomeScreen';
import Pay002 from '../screens/day002/Pay';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home2'>
        <Stack.Screen name="Home" component={HomeScreen001} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp001} options={{headerShown:false}}/>

        <Stack.Screen name="Home2" component={HomeScreen002} options={{headerShown:false}}/>
        <Stack.Screen name="Pay2" component={Pay002} options={{headerShown:false}}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
