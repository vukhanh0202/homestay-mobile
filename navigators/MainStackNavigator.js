import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favourite from '../screens/Favourite';
import { UserContext } from '../contexts/UserContext';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    const user = React.useContext(UserContext)
    console.log(user);
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={'Favourite'}
                component={Favourite}
                options={{
                    title: 'Favourite',
                }}
            />
        </MainStack.Navigator>
    );
}