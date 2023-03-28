/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Components/LoginScreen';
import MessageBoard from './Components/MessageBoard';
import Home from './Components/Home';
import Signup from './Components/Signup';
import ReplyScreen from './Components/ReplyScreen';
import ResetPasswordScreen from './Components/ResetPasswordScreen'

import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign up"
          component={Signup}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageBoard"
          component={MessageBoard}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReplyScreen"
          component={ReplyScreen}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          //options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
