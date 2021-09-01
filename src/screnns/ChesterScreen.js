
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import dummyVenueData from '../constants/dummyVenueData';
import VenueList from '../components/VenuList';
const ChesterFoodNDrinkWeekLogo = require('./../../asssets/images/ChesterFood&DrinkWeekLogo.png');

const ChesterScreen = (props) => {
    const acceptingOrder = dummyVenueData.filter(item => item.accepting)
    const notAcceptingOrder = dummyVenueData.filter(item => !item.accepting)
    return (
        <View flex={1} style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.qbunkLogoContainer}>
                    <Image
                        style={styles.qbunkLogo}
                        source={require('./../../asssets/images/qbunk-logo.png')}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                        color='white'
                        size={40}
                        name='account-circle-outline'
                        style={styles.headerIcon} />
                </View>
            </View>
            <View style={styles.acceptingOrder}>
                <View style={{ ...styles.titleContainer, ...styles.purpleBackground }}>
                    <Text style={styles.acceptingOrderTitle}>Accepting Orders</Text>
                </View>
                <View style={styles.list}>
                    <VenueList data={acceptingOrder} />
                </View>
            </View>
            <View style={styles.notAcceptingOrder}>
                <View style={{ ...styles.titleContainer, ...styles.lightGrayBackground }}>
                    <Text style={styles.notAcceptingOrderTitle}>Not Cuurently Accepting Orders</Text>
                </View>
                <View style={styles.list}>
                    <VenueList data={notAcceptingOrder} />
                </View>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={ChesterFoodNDrinkWeekLogo}
                    width={250}
                    height={40}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    acceptingOrder: {
        flex: 3,
        width: '100%',
    },
    acceptingOrderTitle: {
        color: colors.white,
    },
    notAcceptingOrderTitle: {
        color: colors.purple,
    },
    titleContainer: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        paddingLeft: 30,
    },
    purpleBackground: {
        backgroundColor: colors.purple
    },
    lightGrayBackground: {
        backgroundColor: colors.lightGray
    },
    list: {
        width: '100%',
        flex: 1,
    },
    logoText: {
        color: colors.white,
    },
    logoContainer: {
        width: '100%',
        backgroundColor: colors.purple,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
    notAcceptingOrder: {
        flex: 5,
        width: '100%',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        height: 110,
        width: '100%',
        backgroundColor: colors.black,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerIcon: {
        fontWeight: 'normal',
    },
    iconContainer: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    qbunkLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    qbunkLogo: {
        width: 160,
        height: 45,
    }
});

export default ChesterScreen;

