import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '../screens/Feed';
import MessagesScreen from '../screens/Messages';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}