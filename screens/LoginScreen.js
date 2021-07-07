import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import AuthContainer from '../components/AuthContainer';
import { AuthContext } from '../contexts/AuthContext';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constant/colors';

LoginScreen['navigationOptions'] = screenProps => ({
    title: 'Đăng Nhập'
})
export default function LoginScreen({ navigation }) {
    const { login } = React.useContext(AuthContext);
    const { directHome } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('bithovendev@gmail.com');
    const [password, setPassword] = React.useState('abc');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    return (
        <AuthContainer>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginTop: 10 }}
                onPress={async () => {
                    directHome();
                }}>
                <Icon name="favorite-outline" size={28} color={COLORS.primary} />
            </TouchableOpacity>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={error} />
            <Input
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <FilledButton
                title={'Login'}
                style={styles.loginButton}
                onPress={async () => {
                    try {
                        setLoading(true);
                        await login(email, password);
                    } catch (e) {
                        setError(e.message);
                        setLoading(false);
                    }
                }}
            />
            <TextButton
                title={'Have u an account? Create one'}
                onPress={() => {
                    navigation.navigate('Registration');
                }}
            />
            <Loading loading={loading} />
        </AuthContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
});