import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import Account from './screens/Account';
import Favourite from './screens/Favourite';
import Home from './screens/Home';
import List from './screens/List';
import ApartmentDetail from './screens/ApartmentDetail';


const color = {
    ACTIVE: '#DFA974',
    INACTIVE: '#ccc'
}

const HomeStack = createStackNavigator({
    Home,
    ApartmentDetail,
    List
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Trang Chủ',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-planet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};
const ListStack = createStackNavigator({
    List,
    ApartmentDetail
});
ListStack.navigationOptions = {
    tabBarLabel: 'Danh Sách',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-cart"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};
const FavouriteStack = createStackNavigator({ Favourite });
FavouriteStack.navigationOptions = {
    tabBarLabel: 'Yêu Thích',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-wallet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};
const AccountStack = createStackNavigator({ Account });
AccountStack.navigationOptions = {
    tabBarLabel: 'Tài Khoản',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-cog"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};

const AppNavigator = createBottomTabNavigator({
    HomeStack,
    ListStack,
    FavouriteStack,
    AccountStack
})

export default AppNavigator;