import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilledButton from '../components/FilledButton';
import Input from '../components/Input';
import COLORS from '../constant/colors';
import Storage from './../storage/Storage';
import { AuthContext } from '../contexts/AuthContext';

export default function Payment({ navigation }) {
    const [result, setResult] = useState([]);
    const { leavePayment } = React.useContext(AuthContext);
    useEffect(() => {
        Storage.getItem('paymentData').then(function (result) {
            setResult([{
                email: result.email,
                phone: result.phone,
                reward: result.reward,
                fullname: result.fullname,
                price: result.price,
            }]);
        });
    }, []);
    const { payment } = React.useContext(AuthContext);
    const [content, setContent] = useState([
        {
            class: 'receive',
            message: "Nếu có thắc mắc gì trong quá trình thanh toán bạn có thể liên lạc trực tiếp với quản trị viên thông qua khung chat"
        }
    ]);
    const [method, setMethod] = React.useState('MOMO');
    const [message, setMessage] = React.useState('');
    const [messages, setMessages] = useState();
    const [time, setTime] = useState(900);
    const [timeElement, setTimeElement] = useState({
        minute: 15,
        second: 0
    });
    const buttonNextTextStyle = {
        position: 'absolute',
        right: -40,
        bottom: -27,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        flexWrap: 'wrap',
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        color: '#ffffff',
    };
    const buttonPreTextStyle = {
        position: 'absolute',
        left: -40,
        bottom: -27,
        padding: 20,
        flexWrap: 'wrap',
        borderRadius: 8,
        backgroundColor: COLORS.green,
        color: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };
    useEffect(() => {
        const intervalID = setTimeout(() => {
            const temp = time - 1;
            const minute = Math.floor(temp / 60);
            const second = temp % 60;
            setTime(temp);
            setTimeElement({
                minute: minute,
                second: second
            })
        }, 1000);
        return () => clearInterval(intervalID);
    });
    const send = (value) => {
        setContent([...content, {
            class: 'send',
            message: value
        }]);
        setMessage('');
    }
    useEffect(() => {
        setMessages(content.map((item, index) => {
            if (item.class === 'receive') {
                return <View key={index} style={styles.receiveWrapper}>
                    <View style={styles.receiveBox}>
                        <Text style={styles.receive}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            } else {
                return <View key={index} style={styles.sendWrapper}>
                    <View style={styles.sendBox}>
                        <Text style={styles.send}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            }
        }))
    }, [content]);
    return (
        <View style={{ flex: 1 }}>
            <ProgressSteps
                activeStepIconBorderColor={COLORS.primary}
                activeLabelColor={COLORS.primary}
                completedProgressBarColor={COLORS.primary}
                completedStepIconColor={COLORS.primary}
            >
                <ProgressStep label="Phương Thức"
                    style={{ alignItems: 'center', position: 'relative' }}
                    nextBtnStyle={buttonNextTextStyle}
                    nextBtnText='Xác Nhận'
                    nextBtnTextStyle={{ color: '#ffffff', alignItems: 'center', height: '100%' }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.homeIcon}
                        onPress={async () => {
                            leavePayment();
                        }}>
                        <Ionicons name="md-home-sharp" size={28} color={COLORS.primary} />
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center', height: 250, width: '100%', marginTop: 50
                    }}>
                        <TouchableOpacity
                            style={method === 'MOMO' ? styles.imgWrapperOpacity : styles.imgWrapper}
                            activeOpacity={0.8}
                            onPress={() => setMethod('MOMO')}>
                            <Image
                                style={styles.stretch}
                                source={require('./../img/momo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={method === 'INTERNET' ? styles.imgWrapperOpacity : styles.imgWrapper}
                            activeOpacity={0.8}
                            onPress={() => setMethod('INTERNET')}>
                            <Image
                                style={styles.stretch}
                                source={require('./../img/internet.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </ProgressStep>
                <ProgressStep label="Thanh Toán"
                    previousBtnStyle={buttonPreTextStyle}
                    previousBtnText='Trở Lại'
                    nextBtnStyle={buttonNextTextStyle}
                    nextBtnText='Thanh Toán'
                    previousBtnTextStyle={{ color: '#ffffff', alignItems: 'center' }}
                    nextBtnTextStyle={{ color: '#ffffff', alignItems: 'center' }}
                >

                    {method === 'MOMO' ?
                        <View style={{ height: 500 }}>
                            <View style={{ width: '100%', height: 220, marginTop: 0, top: 10, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 200, height: 200, marginTop: 0, top: 10 }}
                                    source={require('./../img/momo.png')}
                                />
                            </View>
                            <Text style={styles.header}>Thông Tin Người Nhận</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>SĐT Người Nhận:</Text>
                                <Text style={styles.value}>091823136</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tên Người Nhận:</Text>
                                <Text style={styles.value}>Nguyễn Hoài Phong</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Khuyến Mãi:</Text>
                                <Text style={styles.value}>{result[0]?.reward}%</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tổng Tiền:</Text>
                                <Text style={styles.value}> {(result[0]?.price * (100 - result[0]?.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
                            </View>
                            <Text style={styles.header}>Thông Tin Người Gửi</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Họ Và Tên:</Text>
                                <Text style={styles.value}>{result[0]?.fullname}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Số điện thoại:</Text>
                                <Text style={styles.value}>{result[0]?.phone}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Email:</Text>
                                <Text style={styles.value}>{result[0]?.email}</Text>
                            </View>
                        </View>

                        :
                        <View style={{ height: 500 }}>
                            <View style={{ width: '100%', height: 220, marginTop: 0, top: 10, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 200, height: 200, marginTop: 0, top: 10 }}
                                    source={require('./../img/internet.png')}
                                />
                            </View>
                            <Text style={styles.header}>Thông Tin Người Nhận</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>STK Người Nhận:</Text>
                                <Text style={styles.value}>0651000853526</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Ngân Hàng: </Text>
                                <Text style={styles.value}>ACB</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Ngân Hàng: </Text>
                                <Text style={styles.value}>ACB</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tên Người Nhận:</Text>
                                <Text style={styles.value}>Nguyễn Hoài Phong</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Khuyến Mãi:</Text>
                                <Text style={styles.value}>{result[0]?.reward}%</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tổng Tiền:</Text>
                                <Text style={styles.value}> {(result[0]?.price * (100 - result[0]?.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
                            </View>
                            <Text style={styles.header}>Thông Tin Người Gửi</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Họ Và Tên:</Text>
                                <Text style={styles.value}>{result[0]?.fullname}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Số điện thoại:</Text>
                                <Text style={styles.value}>{result[0]?.phone}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Email:</Text>
                                <Text style={styles.value}>{result[0]?.email}</Text>
                            </View>
                        </View>
                    }
                </ProgressStep>
                <ProgressStep label="Xác Thực"
                    nextBtnStyle={buttonNextTextStyle}
                    nextBtnText='Xác nhận'
                    nextBtnTextStyle={{ color: '#ffffff', alignItems: 'center' }}
                    previousBtnStyle={{ display: 'none' }}
                >
                    <ScrollView >
                        <View >
                            <View style={{
                                width: '90%',
                                height: 70,
                                marginHorizontal: '5%',
                                alignItems: 'left',
                                padding: 20,
                                borderRadius: 10,
                                borderColor: COLORS.primary,
                                justifyContent: 'center',
                                borderLeftWidth: 2,
                                borderRightWidth: 2,
                                borderBottomWidth: 2,
                                borderTopWidth: 2
                            }}>
                                <Text style={{ fontWeight: '600', fontSize: 18 }}>Số tiền phải thanh toán</Text>
                                <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.green }}> {(result[0]?.price * (100 - result[0]?.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
                            </View>
                            {method === 'MOMO' ?
                                <View>
                                    <Text style={styles.headerLeft}>Thông Tin Người Nhận</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>SĐT Người Nhận:</Text>
                                        <Text style={styles.value}>091823136</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Tên Người Nhận:</Text>
                                        <Text style={styles.value}>Nguyễn Hoài Phong</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Khuyến Mãi:</Text>
                                        <Text style={styles.value}>{result[0]?.reward}%</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Tổng Tiền:</Text>
                                        <Text style={styles.value}> {(result[0]?.price * (100 - result[0]?.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
                                    </View>
                                    <Text style={styles.headerLeft}>Thông Tin Người Gửi</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Họ Và Tên:</Text>
                                        <Text style={styles.value}>{result[0]?.fullname}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Số điện thoại:</Text>
                                        <Text style={styles.value}>{result[0]?.phone}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Email:</Text>
                                        <Text style={styles.value}>{result[0]?.email}</Text>
                                    </View>
                                </View>
                                :
                                <View>
                                    <Text style={styles.headerLeft}>Thông Tin Người Nhận</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>STK Người Nhận:</Text>
                                        <Text style={styles.value}>0651000853526</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Ngân Hàng: </Text>
                                        <Text style={styles.value}>ACB</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Ngân Hàng: </Text>
                                        <Text style={styles.value}>ACB</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Tên Người Nhận:</Text>
                                        <Text style={styles.value}>Nguyễn Hoài Phong</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Khuyến Mãi:</Text>
                                        <Text style={styles.value}>{result[0]?.reward}%</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Tổng Tiền:</Text>
                                        <Text style={styles.value}> {(result[0]?.price * (100 - result[0]?.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
                                    </View>
                                    <Text style={styles.headerLeft}>Thông Tin Người Gửi</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Họ Và Tên:</Text>
                                        <Text style={styles.value}>{result[0]?.fullname}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Số điện thoại:</Text>
                                        <Text style={styles.value}>{result[0]?.phone}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>Email:</Text>
                                        <Text style={styles.value}>{result[0]?.email}</Text>
                                    </View>
                                </View>
                            }
                        </View>
                        <View style={{ height: 600, marginTop: 20 }}>
                            <View style={{
                                width: '90%',
                                height: '90%',
                                marginHorizontal: '5%',
                                alignItems: 'left',
                                borderRadius: 10,
                                borderColor: COLORS.primary,
                                borderLeftWidth: 2,
                                borderRightWidth: 2,
                                borderBottomWidth: 2,
                                borderTopWidth: 2
                            }}>
                                <View style={{
                                    width: '100%',
                                    paddingHorizontal: 15,
                                    paddingVertical: 20,
                                    borderBottomWidth: 2,
                                    borderColor: COLORS.primary,
                                }}>
                                    <Text style={{ color: COLORS.green, fontWeight: '600', fontSize: 18 }}>ADMIN</Text>
                                    <Text style={{ fontWeight: '400', fontSize: 16, fontStyle: 'italic' }}>ktpm2018@uit.edu.vn</Text>
                                </View>
                                <ScrollView style={{ width: '100%', paddingHorizontal: 10 }} >
                                    {messages}
                                </ScrollView>
                                <View style={{
                                    height: 59,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 10,
                                    paddingVertical: 20
                                }} >
                                    <View style={{
                                        paddingHorizontal: 10,
                                        paddingVertical: 20,
                                        height: 59,
                                        position: 'relative',
                                        width: '85%',
                                        justifyContent: 'center',
                                        color: 'black',
                                        alignItems: 'flex-start'
                                    }}>
                                        <Input
                                            style={styles.input}
                                            placeholder={'Nhập Tin Nhắn...'}
                                            keyboardType={'message'}
                                            value={message}
                                            onChangeText={setMessage}
                                        />
                                    </View>
                                    <View style={{
                                        height: 59,
                                        position: 'relative',
                                        width: '15%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => send(message)}>
                                            <Icon style={{
                                                borderBottomRightRadius: 8,
                                            }} name="send" size={28} color={COLORS.primary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, marginBottom: 30, marginTop: -30 }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                            }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: 'black' }}>Thanh toán này sẽ được hoàn thành trong: </Text>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: COLORS.primary }}>{timeElement.minute}:{timeElement.second}</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: '400', fontSize: 14, color: 'grey', fontStyle: 'italic' }}>(Thanh toán dự tính trong vòng 15 phút. Nếu hết thời gian thanh toán vẫn chưa được xác nhận
                                    bạn có thể khiếu nại cho quản trị viên)</Text>
                            </View>
                            <FilledButton
                                title={'KHIẾU NẠI'}
                                style={{
                                    width: '40%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 14,
                                    marginTop: 10,
                                    height: 40,
                                    padding: 10
                                }}
                                onPress={async () => {
                                    Alert.alert("Khiếu Nại Thành Công");
                                }}
                            />
                        </View>
                    </ScrollView>
                </ProgressStep>
                <ProgressStep label="Thông Báo"
                    previousBtnStyle={{ display: 'none' }}
                    finishBtnText='Hoàn Thành'
                    onSubmit={async () => {
                        leavePayment();
                    }}
                    nextBtnStyle={buttonNextTextStyle}
                    nextBtnTextStyle={{ color: '#ffffff', alignItems: 'center' }}
                >
                    <View style={{ height: 500, alignItems: 'center', textAlign: 'center' }}>
                        <View style={{ width: '100%', height: 220, marginTop: 80, marginBottom: 30, top: 10, alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 200, marginTop: 0, top: 10 }}
                                source={require('./../img/success.png')}
                            />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600' }}>Bạn đã thanh toán đặt phòng thành công</Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500' }}>Thông tin hóa đơn đã được gửi vào email của bạn</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps >
        </View >

    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        color: 'black',
        zIndex: 100,
        marginVertical: 8,
        padding: 5,
        paddingLeft: 10,
        height: 45,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    receiveWrapper: {
        textAlign: 'left',
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-start'
    },
    receiveBox: {
        backgroundColor: '#eee',
        borderRadius: 8
    },
    receive: {
        borderRadius: 8,
        padding: 10,
    },
    sendWrapper: {
        textAlign: 'right',
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-end'
    },
    sendBox: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        textAlign: 'right',
    },
    send: {
        borderRadius: 8,
        padding: 10,
    },
    logoutButton: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 10,
        height: 35,
        padding: 8
    },
    imgWrapperOpacity: {
        width: '50%',
        height: '75%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
        padding: 5,
        opacity: 0.7,
        borderRadius: 25
    },
    imgWrapper: {
        width: '45%',
        height: '70%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10,
        padding: 5,
        borderRadius: 25
    },
    stretch: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginVertical: 5,
        height: 20,
        textAlign: 'left'
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
    },
    header: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '800',
        marginVertical: 10
    },
    headerLeft: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: '800',
        marginVertical: 10,
        paddingLeft: 15
    },
    label: {
        fontSize: 16,
        fontWeight: '700',
        width: '45%'
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
    },
    homeIcon: {
        position: 'absolute',
        bottom: -235,
        left: 24,
        zIndex: 10000
    },
});