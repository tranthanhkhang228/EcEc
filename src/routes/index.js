import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Launcher} from '@components';
import {
  Walkthrough,
  Equipment,
  Foresight,
  Achievement,
  Journey,
  Inventory,
  Companion,
  Feedback,
  Quit,
} from '@screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: () => {
        let iconName = 'television';

        if (route.name) {
          iconName = 'movie-roll';
        }

        return <Icon name={iconName} color="white" size={30} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ee3f00',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Journey" component={Journey} />
    <Tab.Screen name="Equipment" component={Equipment} />
    <Tab.Screen name="Foresight" component={Foresight} />
    <Tab.Screen name="Achievement" component={Achievement} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerPosition="right">
    <Drawer.Screen name="Continue your Journey" component={TabNavigator} />
    <Drawer.Screen name="Inventory" component={Inventory} />
    <Drawer.Screen name="Become an Companion" component={Companion} />
    <Drawer.Screen name="Message to Gods" component={Feedback} />
    <Drawer.Screen name="Quit" component={Quit} />
  </Drawer.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Walkthrough"
      component={Walkthrough}
      options={{header: () => null}}
    />

    <Stack.Screen
      name="Home"
      component={DrawerNavigator}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Launcher"
      component={Launcher}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Walkthrough"
      component={StackNavigator}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default RootStack;
