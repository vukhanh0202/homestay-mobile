import React from 'react';
import {
    Dimensions,
    FlatList, Image, SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, View, TouchableOpacity
} from 'react-native';
import Thumnail from '../components/Thumnail';
import apartments from '../constant/apartment';
import categories from '../constant/category';
import COLORS from '../constant/colors';

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

Home['navigationOptions'] = screenProps => ({
    title: 'Trang Chủ'
})
export default function Home({ navigation }) {
    const TopHotelCard = ({ category, onPress }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
                    <Image style={style.topHotelCardImage} source={category.img} />
                    <View style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 5,
                        backgroundColor: 'transparent',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.white }}>{category.address}</Text>
                        <Text style={{ fontSize: 9, fontWeight: 'bold', color: COLORS.white_light }}>
                            {category.number} Chỗ ở
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
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
                            HOMESTAY TRAVEL
                        </Text>
                    </View>
                </View>
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
                </View>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 10,
                        paddingBottom: 20,
                    }}
                    renderItem={({ item }) => <TopHotelCard category={item}
                        onPress={() =>
                            navigation.navigate('List', {
                                item: item,
                            })
                        }
                    />}
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
                    <TouchableOpacity activeOpacity={0.8} onPress={() =>
                        navigation.navigate('List', {
                        })
                    }>
                        <Text style={{ color: COLORS.grey }}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={apartments.slice(5, 13)}
                        contentContainerStyle={style.container}
                        numColumns={2}
                        renderItem={({ item }) => <Thumnail product={item}
                            onPress={() =>
                                navigation.navigate('ApartmentDetail', {
                                    item: item,
                                    title: item.title
                                })
                            }
                        />}
                        keyExtractor={(item) => `${item.id}`} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const style = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 0,
        paddingLeft: 8,
        paddingRight: 8
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
        height: 140,
        width: 100,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 5,
        borderRadius: 10,
        position: 'relative'
    },
    topHotelCardImage: {
        height: 140,
        width: '100%',
        borderRadius: 10,
    },
});
