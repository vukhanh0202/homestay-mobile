import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilledButton from '../components/FilledButton';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';

Account['navigationOptions'] = screenProps => ({
    title: 'Tài Khoản'
})
export default function Account({ navigation }) {
    const { logout } = React.useContext(AuthContext);
    const { directLogin } = React.useContext(AuthContext);
    const user = React.useContext(UserContext)
    return (
        <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
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