import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export default function FilledButton({ title, style, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});