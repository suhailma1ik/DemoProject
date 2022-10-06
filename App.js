import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import BottomStackNavigator from './Components/Navigators/BottomStackNavigator';
import SettingsScreen from './Screens/SettingsScreen';
import AboutScreen from './Screens/AboutScreen';
import OrdersScreen from './Screens/OrdersScreen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomStackNavigator} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About us" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
