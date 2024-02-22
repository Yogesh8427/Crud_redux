import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Adduser from '../Screens/Adduser';
import Main from '../Screens/Main';
import navigationstring from './navigationstring';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
 <>
 <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name={navigationstring.HOME} component={Main}/>
    <Stack.Screen name={navigationstring.ADDUSER} component={Adduser}/>
 </Stack.Navigator>
 </>
  )
}

export default Routes
