import React from 'react';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../constant/colors';


export default function Heading({ children, style, ...props }) {
    return (
        <Text {...props} style={[styles.text, style]}>
            {children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: 700,
        color: COLORS.primary
    },
});