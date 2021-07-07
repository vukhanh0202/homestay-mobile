import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import FilledButton from '../components/FilledButton';
import { AuthContext } from '../contexts/AuthContext';
import Storage from './../storage/Storage'

Account['navigationOptions'] = screenProps => ({
    title: 'Tài Khoản'
})
export default function Account({ navigation }) {
    const { logout } = React.useContext(AuthContext);
    const { directLogin } = React.useContext(AuthContext);
    const user = React.useContext(UserContext)
    return (
        <View>
            <Text>Tài khoản</Text>
            {user != undefined ?
                <FilledButton
                    title={'Logout'}
                    style={styles.logoutButton}
                    onPress={async () => {
                        logout();
                    }}
                />
                :
                <FilledButton
                    title={'LOGIN'}
                    style={styles.logoutButton}
                    onPress={async () => {
                        directLogin();
                    }}
                />
            }

        </View>

    );
}

const styles = StyleSheet.create({
    logoutButton: {
        marginVertical: 33,
        backgroundColor: 'green'
    },
});