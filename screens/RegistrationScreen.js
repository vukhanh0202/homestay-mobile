import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContainer from '../components/AuthContainer';
import Error from '../components/Error';
import FilledButton from '../components/FilledButton';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Loading from '../components/Loading';
import COLORS from '../constant/colors';
import { AuthContext } from '../contexts/AuthContext';


export default function RegistrationScreen({ navigation }) {
    const { register } = React.useContext(AuthContext);
    const { directHome } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    return (
        <AuthContainer>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.homeIcon}
                onPress={async () => {
                    directHome();
                }}>
                <Icon name="md-home-sharp" size={28} color={COLORS.primary} />
            </TouchableOpacity>
            <Heading style={styles.title}>ĐĂNG KÝ</Heading>
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
                title={'ĐĂNG KÝ'}
                style={styles.loginButton}
                onPress={async () => {
                    try {
                        setLoading(true);
                        let result = await register(email, password);
                        if (result === true) {
                            navigation.pop();
                        } else {
                            setLoading(false);
                        }
                    } catch (e) {
                        setError(e.message);
                        setLoading(false);
                    }
                }}
            />
            <Loading loading={loading} />
            <View style={styles.row}>
                <Text style={styles.textInactive}>Bạn Đã Có Tài Khoản? </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}>
                    <Text style={styles.textActive}>Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
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
    homeIcon: {
        position: 'absolute',
        top: 32,
        right: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInactive: {
        fontSize: 16,
        color: COLORS.dark,
    },
    textActive: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '700'
    },
});