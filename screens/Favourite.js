import React from 'react';
import {
    FlatList, Image, StyleSheet,
    Text,
    View
} from 'react-native';
import FilledButton from '../components/FilledButton';
import Thumnail from '../components/Thumnail';
import apartments from '../constant/apartment';
import COLORS from '../constant/colors';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';

Favourite['navigationOptions'] = screenProps => ({
    title: 'Danh Sách Yêu Thích'
})
export default function Favourite({ navigation }) {
    const { directLogin } = React.useContext(AuthContext);
    const user = React.useContext(UserContext);
    return (
        <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
            {user !== undefined ?
                <FlatList
                    data={apartments.filter(item => item.favourite === true)}
                    contentContainerStyle={styles.containerList}
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
                :
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('./../img/favourite.jpg')}
                    />
                    <View style={styles.row}>
                        <Text style={styles.text}>Đăng nhập để thêm và quản lý căn hộ yêu thích </Text>
                    </View>
                    <FilledButton
                        title={'ĐĂNG NHẬP'}
                        style={styles.loginButton}
                        onPress={async () => {
                            directLogin();
                        }}
                    />
                </View>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    containerList: {
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 16
    },
    container: {
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
    },
    stretch: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: 32
    },
    text: {
        fontSize: 16,
        color: COLORS.dark,
        textAlign: 'center',
        width: '100%'
    },
    loginButton: {
        paddingTop: 24,
        marginVertical: 32,
        width: '80%',
    },
});