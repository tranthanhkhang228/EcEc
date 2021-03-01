import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Launcher} from '@components';
import {Walkthrough, Equipment, Foresight, Achievement} from '@screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Tab.Screen name="Equipment" component={Equipment} />
    <Tab.Screen name="Foresight" component={Foresight} />
    <Tab.Screen name="Achievement" component={Achievement} />
  </Tab.Navigator>
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
      component={TabNavigator}
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
