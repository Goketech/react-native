import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
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