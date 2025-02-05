import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

export default function FeedScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome to your feed</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        View your Profile
      </Button>
      <Text>More coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
