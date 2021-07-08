import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContainer from '../components/AuthContainer';
import Error from '../components/Error';
import FilledButton from '../components/FilledButton';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Loading from '../components/Loading';
import TextButton from '../components/TextButton';
import COLORS from '../constant/colors';
import { AuthContext } from '../contexts/AuthContext';


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
                style={styles.homeIcon}
                onPress={async () => {
                    directHome();
                }}>
                <Icon name="md-home-sharp" size={28} color={COLORS.primary} />
            </TouchableOpacity>
            <Heading style={styles.title}>ĐĂNG NHẬP</Heading>
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
                title={'ĐĂNG NHẬP'}
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
            <Loading loading={loading} />
            <View style={styles.row}>
                <Text style={styles.textInactive}>Bạn Chưa Có Tài Khoản? </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.navigate('Registration');
                    }}>
                    <Text style={styles.textActive}>Tạo Ngay </Text>
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
        backgroundColor: COLORS.primary
    },
    homeIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
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
        fontWeight: 700
    },
});