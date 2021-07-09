import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import COLORS from '../constant/colors';
import Account from '../screens/Account';
import ApartmentDetail from '../screens/ApartmentDetail';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';
import List from '../screens/List';
import Payment from '../screens/Payment';


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
        return <Icon name="home"
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
        return <Icon name="file-tray-full-sharp"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};
const FavouriteStack = createStackNavigator({
    Favourite,
    ApartmentDetail
});
FavouriteStack.navigationOptions = {
    tabBarLabel: 'Yêu Thích',
    tabBarIcon: ({ focused }) => {
        return <MaterialIcons name="favorite-outline"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
};
const AccountStack = createStackNavigator({ Account });
AccountStack.navigationOptions = {
    headerShown: false,
    tabBarLabel: 'Tài Khoản',
    tabBarIcon: ({ focused }) => {
        return <MaterialCommunityIcons name="account-cog"
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
}, {
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: color.INACTIVE,
        style: {
            paddingVertical: 5,
            backgroundColor: "#fff",
            borderTopColor: COLORS.grey,
            height: 60,
        },
        labelStyle: {
            fontSize: 12,
            lineHeight: 16,
            marginBottom: 5,
            fontWeight: '500'
        },
        tabBarPosition: "bottom",
        animationEnabled: true,
        swipeEnabled: true,
        unmountInactiveRoutes: true
    }
})

export default AppNavigator;