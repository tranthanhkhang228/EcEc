import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color, Typography} from 'styles';

import {EquipmentDetail, Practice, GameIntroduction} from '@components';
import {
  Walkthrough,
  Equipment,
  Pronunciation,
  Achievement,
  Journey,
  Inventory,
  Companion,
  Feedback,
  Quit,
} from '@screens';
import {SignIn} from '@auths';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const EquipmentNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Equipment"
      component={Equipment}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="EquipmentDetail"
      component={EquipmentDetail}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

const PronunciationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.orange,
        height: 40,
      },
      headerTintColor: Color.white,
      headerTitleStyle: {
        fontFamily: Typography.medium,
        color: Color.white,
      },
    }}>
    <Stack.Screen
      name="Pronunciation"
      component={Pronunciation}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Practice"
      component={Practice}
      options={{title: 'Back'}}
    />
  </Stack.Navigator>
);

const JourneyNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.orange,
        height: 40,
      },
      headerTintColor: Color.white,
      headerTitleStyle: {
        fontFamily: Typography.medium,
        color: Color.white,
      },
    }}>
    <Stack.Screen
      name="Pronunciation"
      component={Journey}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Practice"
      component={Practice}
      options={{title: 'Back'}}
    />
    <Stack.Screen
      name="GameIntroduction"
      component={GameIntroduction}
      options={{title: 'Back'}}
    />
  </Stack.Navigator>
);

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
    <Tab.Screen name="Journey" component={JourneyNavigator} />
    <Tab.Screen name="Pronunciation" component={PronunciationNavigator} />
    <Tab.Screen name="Equipment" component={EquipmentNavigator} />
    <Tab.Screen name="Progress" component={Achievement} />
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

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Walkthrough"
      component={Walkthrough}
      options={{header: () => null}}
    />

    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{header: () => null}}
    />

    <Stack.Screen
      name="Home"
      component={DrawerNavigator}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default RootStack;
