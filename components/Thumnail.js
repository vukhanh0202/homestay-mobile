import React, { useState } from 'react';
import {
    Dimensions, Image, StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constant/colors';


const { width } = Dimensions.get('screen');
const cardWidth = width / 2.2;
const Thumnail = ({ product, onPress }) => {
    const [favourite, setFavourite] = useState(product.favourite)
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ ...style.card }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}>
                    <View style={style.priceTag}>
                        <Text
                            style={{ color: COLORS.white, fontSize: 14, fontWeight: 'bold' }}>
                            {product.price}đ
                        </Text>
                    </View>
                    <Image source={product.img} style={style.cardImage} />
                </TouchableOpacity>
                <View style={style.cardDetails}>
                    <View style={{ position: 'relative', width: '100%' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onPress}>
                            <View style={{ paddingLeft: 5, position: 'absolute', left: 0, top: 0 }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                }}>
                                    {product.title.substring(0, 14)}
                                </Text>
                                <Text style={{ color: COLORS.grey, fontSize: 10 }}>
                                    {product.type} - {product.people}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setFavourite(!favourite)}>
                            {favourite === true ?
                                <Icon name="favorite" style={{ position: 'absolute', right: 0, top: 0, paddingRight: 5 }} size={26} color={COLORS.primary} />
                                :
                                <Icon name="favorite-outline" style={{ position: 'absolute', right: 0, top: 0, paddingRight: 5 }} size={26} color={COLORS.primary} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
        width: 90,
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
        left: '2%',
        paddingTop: 15,
        width: '96%',
        alignItems: 'center'
    },
});

export default Thumnail;
