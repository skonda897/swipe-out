/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {Chevron} from 'react-native-shapes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PerkListScreen from './screens/PerkList';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Wallet</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Perk list') {
              iconName = 'bars';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            } else if (route.name === 'Wallet') {
              iconName = 'wallet';
            } else if (route.name === 'Account') {
              iconName = 'person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perk list" component={PerkListScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
