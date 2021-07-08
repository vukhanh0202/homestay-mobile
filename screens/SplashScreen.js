import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SplashScreen() {
    return <View style={[styles.container, { backgroundColor: 'green' }]} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});