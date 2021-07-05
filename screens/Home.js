import React from 'react';
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constant/colors';
import hotels from '../constant/apartment';
import Thumnail from '../components/Thumnail';
import apartments from '../constant/apartment';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

export default function Home() {
    const navigationOptions = {
        title: 'Trang Chủ'
    };
    const TopHotelCard = ({ hotel }) => {
        return (
            <View style={style.topHotelCard}>
                <View
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        zIndex: 1,
                        flexDirection: 'row',
                    }}>
                </View>
                <Image style={style.topHotelCardImage} source={hotel.image} />
                <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{hotel.name}</Text>
                    <Text style={{ fontSize: 7, fontWeight: 'bold', color: COLORS.grey }}>
                        {hotel.location}
                    </Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={style.header}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Tìm kiếm
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>tại </Text>
                        <Text
                            style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>
                            Homestay Travel
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 10, borderColor: 'red', borderStyle: '1px solid red' }}>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                    }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>
                        Địa điểm nổi bật
                    </Text>
                    <Text style={{ color: COLORS.grey }}>Show all</Text>
                </View>
                <FlatList
                    data={hotels}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        marginTop: 20,
                        paddingBottom: 30,
                    }}
                    renderItem={({ item }) => <TopHotelCard hotel={item} />}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                    }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>
                        Homestay hấp dẫn hôm nay
                    </Text>
                    <Text style={{ color: COLORS.grey }}>Show all</Text>
                </View>
                <View>
                    <FlatList
                        data={apartments}
                        contentContainerStyle={style.container}
                        numColumns={2}
                        renderItem={({ item }) => <Thumnail product={item} />}
                        keyExtractor={(item) => `${item.id}`} />

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const style = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    topHotelCard: {
        height: 120,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    topHotelCardImage: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
});
