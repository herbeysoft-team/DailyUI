
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen001 from '../screens/day001/HomeScreen';
import SignUp001 from '../screens/day001/SignUp';
import HomeScreen002 from '../screens/day002/HomeScreen';
import Pay002 from '../screens/day002/Pay';
import HomeScreen003 from '../screens/day003/HomeScreen';
import Screen2 from '../screens/day003/Screen2';
import CalculatorScreen from '../screens/day004/CalculatorScreen';
import HomeScreen005 from '../screens/day005/HomeScreen';




const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home5'>
        <Stack.Screen name="Home" component={HomeScreen001} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp001} options={{headerShown:false}}/>

        <Stack.Screen name="Home2" component={HomeScreen002} options={{headerShown:false}}/>
        <Stack.Screen name="Pay2" component={Pay002} options={{headerShown:false}}/>

        <Stack.Screen name="Home3" component={HomeScreen003} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>

        <Stack.Screen name="Calc" component={CalculatorScreen} options={{headerShown:false}}/>

        <Stack.Screen name="Home5" component={HomeScreen005} options={{headerShown:false}}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
