import React from 'react';
import {
    Dimensions, Image, StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constant/colors';


const { width } = Dimensions.get('screen');
const cardWidth = width / 2.2;
const Thumnail = ({ product }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginTop: 10 }}>
            <View style={{ ...style.card }}>
                <View style={style.priceTag}>
                    <Text
                        style={{ color: COLORS.white, fontSize: 14, fontWeight: 'bold' }}>
                        {product.price}đ
                    </Text>
                </View>
                <Image source={product.image} style={style.cardImage} />
                <View style={style.cardDetails}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                                {product.name}
                            </Text>
                            <Text style={{ color: COLORS.grey, fontSize: 10 }}>
                                {product.location}
                            </Text>
                        </View>
                        <Icon name="favorite-outline" style={{ paddingRight: 5 }} size={26} color={COLORS.primary} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    card: {
        height: 150,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        marginTop: 10
    },
    cardImage: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    priceTag: {
        height: 30,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        height: 60,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 5,
        left: 0,
        paddingTop: 15,
        width: '100%',
    },
});

export default Thumnail;
