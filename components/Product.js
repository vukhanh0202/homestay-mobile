import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';

import { Card } from './Card';

export default function Product({ product, onPress }) {
    const user = React.useContext(UserContext);
    return (
        <View>
            {user.email}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 20,
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
    },
});