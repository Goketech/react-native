import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>Wallet Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});