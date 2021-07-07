import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constant/colors';

export default function IconButton({ name, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} color={COLORS.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
});