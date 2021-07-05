import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import Thumnail from '../components/Thumnail';
import apartments from '../constant/apartment';

export default function List() {
    const navigationOptions = {
        title: 'Danh Sách'
    };
    return (
        <FlatList
            data={apartments}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({ item }) =>
                <View style={styles.wrapper}>
                    <Thumnail product={item} />
                </View>
            }
            keyExtractor={(item) => `${item.id}`} />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
