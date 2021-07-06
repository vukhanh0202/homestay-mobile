import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Thumnail from '../components/Thumnail';
import apartments from '../constant/apartment';

List['navigationOptions'] = navigation => ({
    title: 'Danh Sách'
})
export default function List({ navigation }) {
    return (
        <FlatList
            data={apartments}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({ item }) =>
                <View style={styles.wrapper}>
                    <Thumnail product={item}
                        onPress={() =>
                            navigation.navigate('ApartmentDetail', {
                                item: item,
                                title: item.title
                            })
                        }
                    />
                </View>
            }
            keyExtractor={(item) => `${item.id}`}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
