import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import MainStackNavigator from './navigators/MainStackNavigator';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import useAuth from './hooks/useAuth';
import SplashScreen from './screens/SplashScreen';
import { useEffect } from 'react/cjs/react.production.min';
import Storage from './storage/Storage'

const AppContainer = createAppContainer(AppNavigator);

const RootStack = createStackNavigator();


export default function App() {
  const { auth, state } = useAuth();
  // function renderScreens() {
  //   if (state.loading) {
  //     return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
  //   }
  //   return state.user ? (
  //     <RootStack.Screen name={'MainStack'}>
  //       {() => (
  //         <UserContext.Provider value={state.user}>
  //           <MainStackNavigator />
  //         </UserContext.Provider>
  //       )}
  //     </RootStack.Screen>
  //   ) : (
  //     <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
  //   );
  // }
  console.log(state.isLogin);
  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return (!state.user && state.isLogin) ? (
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    ) : (
      <UserContext.Provider value={state.user}>
        <AppContainer />
      </UserContext.Provider>
    );
  }
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer >
        {renderScreens()}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
