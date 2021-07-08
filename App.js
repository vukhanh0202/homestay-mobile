import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import useAuth from './hooks/useAuth';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import SplashScreen from './screens/SplashScreen';

const AppContainer = createAppContainer(AppNavigator);

const RootStack = createStackNavigator();


export default function App() {
  const { auth, state } = useAuth();
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
