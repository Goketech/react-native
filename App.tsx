import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeTabs} from './src/navigation/HomeTab';

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}
