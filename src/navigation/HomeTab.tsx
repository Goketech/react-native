import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, StyleSheet} from 'react-native';

import FeedScreen from '../screens/Feed';
import MessagesScreen from '../screens/Messages';
import ShipmentsScreen from '../screens/Shipments';
import ProfileScreen from '../screens/Profile';
import WalletScreen from '../screens/Wallet';
import ScanScreen from '../screens/Scan';

const wallet = require('../assets/wallet.png');
const walletActive = require('../assets/wallet-active.png');
const boxes = require('../assets/boxes.png');
const boxesActive = require('../assets/boxes-active.png');
const avatar = require('../assets/avatar.png');
const avatarActive = require('../assets/avatar-active.png');
const barcode = require('../assets/barcode.png');
const barcodeActive = require('../assets/barcode-active.png');

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Shipments"
      screenOptions={{
        tabBarActiveTintColor: '#2F50C1',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
      }}>
      <Tab.Screen
        name="Shipments"
        component={ShipmentsScreen}
        options={{
          title: 'Shipments',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? boxesActive : boxes}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: 'Scan',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? barcodeActive : barcode}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? walletActive : wallet}
              style={styles.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? avatarActive : avatar}
              style={styles.logo}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {width: 25, height: 25, resizeMode: 'contain'},
});