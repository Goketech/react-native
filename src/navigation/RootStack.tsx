import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabs} from './HomeTab';
import ProfileScreen from '../screens/Profile';
import {MyDrawer} from './Drawer';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
}
