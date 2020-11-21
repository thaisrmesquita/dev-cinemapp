import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre:{
    name: 'ios-people'
  },
  Contato:{
    name: 'ios-call'
  }
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size}) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          } 
        }) }
        tabBarOptions={{
          style:{
            backgroundColor: '#121212'
          },
          activeTintColor: '#FFF',
        }}
        >
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default AppNavigator;