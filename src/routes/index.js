import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
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

import BottomTabs from './BottomTabs';
import DrawerNav from './DrawerNav';

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
  <Tab.Navigator tabBar={(props) => <BottomTabs {...props} />}>
    <Tab.Screen name="Hành trình" component={JourneyNavigator} />
    <Tab.Screen name="Phát âm" component={PronunciationNavigator} />
    <Tab.Screen name="Từ điển" component={EquipmentNavigator} />
    <Tab.Screen name="Tiến độ" component={Achievement} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerNav {...props} />}
    drawerPosition="right">
    <Drawer.Screen name="Trang chủ" component={TabNavigator} />
    <Drawer.Screen name="Cá nhân" component={Inventory} />
    <Drawer.Screen name="Đăng ký làm đồng hành" component={Companion} />
    <Drawer.Screen name="Góp ý" component={Feedback} />
    <Drawer.Screen name="Thoát" component={Quit} />
  </Drawer.Navigator>
);

const RootStack = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="Walkthrough"
      component={Walkthrough}
      options={{header: () => null}}
    /> */}

    {/* <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{header: () => null}}
    /> */}

    <Stack.Screen
      name="Home"
      component={DrawerNavigator}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

export default RootStack;
