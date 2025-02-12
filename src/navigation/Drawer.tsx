import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  useWindowDimensions,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/Profile';
import FeedScreen from '../screens/Feed';
import {HomeTabs} from './HomeTab';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}>
        <Image
          source={require('../assets/avatar-active.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Modupe Akanni</Text>
        <Text style={styles.description}>Software Engineer</Text>
      </TouchableOpacity>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export function MyDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#003CB3',
        drawerLabelStyle: {
          color: 'white',
        },
      }}>
      {/* <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
});
