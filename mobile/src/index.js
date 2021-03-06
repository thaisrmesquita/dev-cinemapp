import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import FavoriteMovie from './screens/FavoriteMovie';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Busca: {
    name: 'search-outline'
  },
  Favoritos:{
    name: 'star-outline'
  },
};

function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#17C548'
        },
        activeTintColor: 'yellow',
        activeBackgroundColor:'#1B9E40',
        inactiveTintColor:'#fff'
      }}
      >
        <Tab.Screen name="Busca" component={Home} />
        <Tab.Screen name="Favoritos" component={FavoriteMovie} />
      </Tab.Navigator>
  );
}

export default function App(){
  return(
    <>  
        <StatusBar barStyle="light-content" backgroundColor='#181818' />
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}