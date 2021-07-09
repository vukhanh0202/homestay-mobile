import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilledButton from '../components/FilledButton';
import Input from '../components/Input';
import COLORS from '../constant/colors';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { Root, Popup } from 'react-native-popup-confirm-toast'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Storage from './../storage/Storage';

ApartmentDetail['navigationOptions'] = ({ navigation }) => ({
    title: navigation.getParam('title')
})
export default function ApartmentDetail({ navigation, screenProps }) {
    const item = navigation.getParam('item')
    const { directLogin } = React.useContext(AuthContext);
    const { payment } = React.useContext(AuthContext);
    const user = React.useContext(UserContext);
    const popup = Popup;
    const [fullname, setFullname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [reward, setReward] = React.useState(0);
    const [checkIn, setCheckIn] = React.useState(() => {
        var day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        return nextDay
    });
    const [checkOut, setCheckOut] = React.useState(() => {
        var day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 2);
        return nextDay
    });
    const [date, setDate] = useState();
    const [isDateCheckInPickerVisible, setDateCheckInPickerVisibility] = useState(false);
    const [isDateCheckOutPickerVisible, setDateCheckOutPickerVisibility] = useState(false);
    useEffect(() => {
        if (user !== undefined) {
            setFullname("Vũ Khánh");
            setPhone("0858100938");
            setEmail("ktpm2018@uit.edu.vn");
            setReward(10);
        }
    }, [user])
    useEffect(() => {
        if (checkOut && checkIn)
            setDate(checkOut - checkIn);
    }, [checkIn, checkOut])
    const showDatePicker = (value) => {
        if (value === 'CheckIn') {
            setDateCheckInPickerVisibility(true);

        } else if (value === 'CheckOut') {
            setDateCheckOutPickerVisibility(true);
        }
    };

    const hideDatePicker = (value) => {
        if (value === 'CheckIn') {
            setDateCheckInPickerVisibility(false);

        } else if (value === 'CheckOut') {
            setDateCheckOutPickerVisibility(false);
        }
    };

    const handleConfirmCheckIn = (date) => {
        setCheckIn(date)
        hideDatePicker('CheckIn');
    };
    const handleConfirmCheckOut = (date) => {
        setCheckOut(date)
        hideDatePicker('CheckOut');
    };

    const bodyComponent = () => {
        return <View
            style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 10
            }}
        >
            <FilledButton
                title={'Thanh Toán Ngay'}
                style={{
                    width: '80%', alignItems: 'center',
                    paddingVertical: 20,
                    paddingHorizontal: 40,
                }}
                onPress={async () => {
                    popup.hide();
                    const paymentObj = {
                        email: email,
                        fullname: fullname,
                        phone: phone,
                        reward: reward + 10,
                        price: item.priceInt * Math.ceil(date / 86400000)
                    };
                    await Storage.setItem("paymentData", paymentObj);
                    payment();
                }}
            />
            <FilledButton
                title={'Chỉ Đặt Phòng'}
                style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                    paddingHorizontal: 40,
                    backgroundColor: COLORS.green,
                    width: '65%',
                    marginTop: 10,
                    fontSize: 14
                }}
                onPress={async () => {
                    popup.hide();
                    Alert.alert("Đặt Phòng Thành Công\n Vui Lòng Kiểm Tra Email");
                }}
            />
        </View>

    }
    const buttonConfirm = {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: '100%'
    };
    return (
        <Root>
            <ScrollView
                style={{ backgroundColor: '#FFFFFF' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: COLORS.white,
                    paddingBottom: 20,
                }}>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="rgba(0,0,0,0)"
                />
                <ImageBackground style={style.headerImage} source={item.img}>
                    <View style={style.header}>
                        {item.favourite === true ?
                            <MaterialIcons name="favorite" size={28} color={COLORS.primary} />
                            :
                            <MaterialIcons name="favorite-outline" size={28} color={COLORS.primary} />
                        }
                    </View>
                </ImageBackground>
                <View>
                    <View style={style.iconContainer}>
                        <MaterialIcons name="place" color={COLORS.white} size={28} />
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                color: COLORS.grey,
                                marginTop: 5,
                            }}>
                            {item.type} - {item.bedroom}
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons name="star" size={20} color={COLORS.orange} />
                                    <MaterialIcons name="star" size={20} color={COLORS.orange} />
                                    <MaterialIcons name="star" size={20} color={COLORS.orange} />
                                    <MaterialIcons name="star" size={20} color={COLORS.orange} />
                                    <MaterialIcons name="star" size={20} color={COLORS.grey} />
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
                                    4.0
                                </Text>
                            </View>
                        </View>
                        {user !== undefined ?
                            <Text style={{ color: COLORS.primary, fontSize: 18, fontWeight: '600', marginTop: 10 }}>Bạn đã nhận được ưu đãi: 10%</Text>
                            :
                            <FilledButton
                                title={'Đăng nhập để nhận ưu đãi'}
                                style={style.logInButton}
                                onPress={async () => {
                                    directLogin();
                                }}
                            />
                        }

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 20,
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Giá Phòng/ Đêm
                        </Text>
                        <View style={style.priceTag}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: COLORS.grey,
                                    marginLeft: 5,
                                }}>
                                {item.price}đ
                            </Text>
                        </View>
                    </View>
                    <View style={style.form}>
                        <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                            Đặt Phòng Ngay
                        </Text>
                        <DateTimePickerModal
                            isVisible={isDateCheckInPickerVisible}
                            mode="date"
                            date={checkIn}
                            onConfirm={handleConfirmCheckIn}
                            onCancel={() => hideDatePicker('CheckIn')}
                        />
                        <DateTimePickerModal
                            isVisible={isDateCheckOutPickerVisible}
                            mode="date"
                            date={checkOut}
                            onConfirm={handleConfirmCheckOut}
                            onCancel={() => hideDatePicker('CheckOut')}
                        />
                        <Text style={style.label}>Ngày vào</Text>
                        <View style={style.row}>
                            <View style={style.textInput}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => showDatePicker('CheckIn')}>
                                    <Text>{moment(checkIn).format('MMMM Do YYYY')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="md-calendar-sharp" size={40} color={COLORS.primary} onPress={() => showDatePicker('CheckIn')} />
                            </View>
                        </View>
                        <Text style={style.label}>Ngày ra</Text>
                        <View style={style.row}>
                            <View style={style.textInput}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => showDatePicker('CheckOut')}>
                                    <Text>{moment(checkOut).format('MMMM Do YYYY')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="md-calendar-sharp" size={40} color={COLORS.primary} onPress={() => showDatePicker('CheckOut')} />
                            </View>
                        </View>
                        <Text style={style.label}>Họ Và Tên</Text>
                        <Input
                            style={style.input}
                            placeholder={'Họ và Tên'}
                            keyboardType={'fullname'}
                            value={fullname}
                            onChangeText={setFullname}
                        />
                        <Text style={style.label}>Email</Text>
                        <Input
                            style={style.input}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={style.label}>Số Điện Thoại</Text>
                        <Input
                            style={style.input}
                            placeholder={'Số điện thoại'}
                            keyboardType={'phone'}
                            value={phone}
                            onChangeText={setPhone}
                        />

                        <View style={{ marginTop: 15 }}>
                            <FilledButton
                                title={'Đặt Phòng'}
                                onPress={() => {
                                    const currentDate = new Date();
                                    if (email === '' || fullname === '' || phone === '') {
                                        Alert.alert("Vui Lòng Nhập Đủ Thông Tin");
                                    } else if (checkIn <= currentDate) {
                                        Alert.alert("Ngày vào không hợp lệ");
                                    } else if (checkIn >= checkOut) {
                                        Alert.alert("Ngày ra không hợp lệ");
                                    } else {
                                        popup.show({
                                            type: 'confirm',
                                            textBody: `Tiền phòng của bạn là: ${(item.priceInt * Math.ceil(date / 86400000) * (100 - reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ  \n Thanh toán ngay để giảm thêm 10%`,
                                            bodyComponent: () => bodyComponent({ popup }),
                                            confirmText: 'CHỈ ĐẶT PHÒNG',
                                            iconEnabled: true,
                                            icon: require('./../img/iconpayment.png'),
                                            descTextStyle: {
                                                fontWeight: '600',
                                                fontSize: 18
                                            },
                                            confirmButtonStyle: { display: 'none' },
                                            confirmButtonTextStyle: {
                                                color: '#ffffff',
                                                paddingVertical: 10,
                                                paddingHorizontal: 40,
                                                backgroundColor: COLORS.green,
                                                borderRadius: 8,
                                                fontSize: 16,
                                                marginTop: 0
                                            },
                                            modalContainerStyle: {
                                                width: '90%',
                                                backgroundColor: '#fff',
                                                borderRadius: 8,
                                                alignItems: 'center',
                                                overflow: 'hidden',
                                                position: 'absolute',
                                                margin: 0,
                                                bottom: 530,
                                            },
                                            buttonEnabled: false,
                                            callback: () => {
                                                Alert.alert("Đặt Phòng Thành Công");
                                            }
                                        });
                                    }
                                }
                                }
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Root>

    );
}
const style = StyleSheet.create({

    logInButton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        marginTop: 10,
        height: 70,
        padding: 15,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    form: {
        marginTop: 10,
        marginHorizontal: 20,
    },

    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
    },
    input: {
        marginVertical: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textInput: {
        width: '85%',
        backgroundColor: '#e8e8e8',
        padding: 20,
        borderRadius: 8,
        color: 'black',
    },
    label: {
        color: COLORS.primary,
        fontSize: 16,
        marginVertical: 5,
        fontStyle: 'italic',
        marginLeft: 2,
        marginTop: 10
    }
});


