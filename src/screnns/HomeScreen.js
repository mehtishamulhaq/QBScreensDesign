
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import dummyVenueData from '../constants/dummyVenueData';
import VenueList from '../components/VenuList';

const HomeScreen = (props) => {
    const acceptingOrder = dummyVenueData.filter(item => item.accepting)
    const notAcceptingOrder = dummyVenueData.filter(item => !item.accepting)
    return (
        <View flex={1} style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>
                        Chester Food & Drink Month
                    </Text>
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
                <View style={{ ...styles.titleContainer, ...styles.lightGreenBackground }}>
                    <Text style={styles.acceptingOrderTitle}>Accepting Orders</Text>
                </View>
                <View style={styles.list}>
                    <VenueList data={acceptingOrder} />
                </View>
            </View>
            <View style={styles.notAcceptingOrder}>
                <View style={{ ...styles.titleContainer, ...styles.lightGrayBackground }}>
                    <Text style={styles.acceptingOrderTitle}>Not Cuurently Accepting Orders</Text>
                </View>
                <View style={styles.list}>
                    <VenueList data={notAcceptingOrder} />
                </View>
            </View>

            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Chester Logo</Text>
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
        color: colors.purple,
    },
    titleContainer: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        paddingLeft: 30,
    },
    lightGreenBackground: {
        backgroundColor: colors.lightGreen
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
        backgroundColor: colors.purple,
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
    textContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
    },
    headerText: {
        color: colors.white,
        fontSize: 28,
        fontFamily: 'Degular Display',

    }
});

export default HomeScreen;

