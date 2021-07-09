import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import FilledButton from '../components/FilledButton';
import COLORS from '../constant/colors';
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
            {user != undefined ?
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('./../img/homestay.jpg')}
                    />
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <View style={styles.avatarWrapper}>
                                <Image
                                    style={styles.avatar}
                                    source={require('./../img/cb1.jpg')}
                                />
                            </View>
                            <View style={styles.profileWrapper}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Vũ Khánh</Text>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.primary }}>ktpm2018@uit.edu.vn</Text>
                                <FilledButton
                                    title={'ĐĂNG XUẤT'}
                                    style={styles.logoutButton}
                                    onPress={async () => {
                                        logout();
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowTop}>
                        <View style={styles.itemWrapper}>
                            <Icon name="star" size={28} color={COLORS.primary} />
                            <Text style={styles.title}>Đánh giá</Text>
                            <Text style={styles.sub}>Travel 5 sao</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <IconMaterial name="support-agent" size={28} color={COLORS.primary} />
                            <Text style={styles.title}>Hỗ trợ 24/7</Text>
                            <Text style={styles.sub}>18001010</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <IconMaterial name="language" size={28} color={COLORS.primary} />
                            <Text style={styles.title}>Ngôn ngữ</Text>
                            <Text style={styles.sub}>Tiếng Việt</Text>
                        </View>
                    </View>

                </View>
                :
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('./../img/homestay.jpg')}
                    />
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <View style={styles.avatarWrapper}>
                                <Image
                                    style={styles.avatar}
                                    source={require('./../img/ava_default.png')}
                                />
                            </View>
                            <View style={styles.profileWrapper}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Trở thành thành viên</Text>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.primary }}>Nhận ngay ưu đãi</Text>
                                <FilledButton
                                    title={'ĐĂNG NHẬP'}
                                    style={styles.logoutButton}
                                    onPress={async () => {
                                        directLogin();
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.letLogin}
                            source={require('./../img/let_login.png')}
                        />
                    </View>
                </View>
            }
        </View >

    );
}

const styles = StyleSheet.create({
    logoutButton: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 10,
        height: 35,
        padding: 8
    },
    logInButton: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 10,
        height: 35,
        padding: 8
    },
    container: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        position: 'relative',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    stretch: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    box: {
        width: '90%',
        height: 170,
        position: 'absolute',
        borderRadius: 20,
        top: 120,
        left: '5%',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10000
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    rowTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop: 80
    },
    avatarWrapper: {
        width: '40%',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 100,
    },
    profileWrapper: {
        width: '60%',
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30
    },
    letLogin: {
        width: '80%',
        height: 270,
        marginTop: '28%',
        resizeMode: 'stretch',
    },
    title: {
        fontSize: 16,
        color: COLORS.dark
    },
    sub: {
        fontSize: 14,
        color: COLORS.grey
    },
    itemWrapper: {
        alignItems: 'center',
        marginHorizontal: 15
    }
});