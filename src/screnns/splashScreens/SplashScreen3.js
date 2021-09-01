import React from 'react';
import SplashScreen from './SplashScreen';
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import colors from '../../constants/colors';
import SkipSection from './skipSection';

const SplashScreen3 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }

    const greenOverPurpleBackgroundTopNotch = require('./../../../asssets/images/greenOverPurpleBackgroundTopNotch.png');
    const text = 'Any venue marked with a       is a Qbunk venue, and you can make your order direct in app and bunk the Q. ';
    const whiteCircle = require('./../../../asssets/images/whiteCircle.png');



    return (
        <View style={styles.container}>
            <View style={styles.topNotch} />


            <ImageBackground
                source={greenOverPurpleBackgroundTopNotch}
                resizeMode="stretch"
                resizeMethod='scale'
                style={styles.secondLayerBackground}

            >
                <View style={styles.aboveText}>
                    <Image
                        source={whiteCircle}
                        style={styles.thirdLayerBackground}
                        width={80}
                        height={80}

                    >
                    </Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text} </Text>
                </View>

                <SkipSection
                    isFirst={isFirst}
                    isLast={isLast}
                    steps={4}
                    currentStep={3}
                    nextRouteName='SplashScreen4'
                    color={colors.purple}
                />
            </ImageBackground>
        </View>

    );



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },

    secondLayerBackground: {
        flex: 1,
    },

    topNotch: {
        width: '100%',
        height: 30,
    },
    text: {
        color: colors.purple,
        fontSize: 30,
        fontFamily: 'Regular',
    },
    textContainer: {
        width: '100%',
        flex: 3,
        marginLeft: 30,
        marginRight: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    aboveText: {
        width: '100%',
        flex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 30,

    },
    belowText: {
        width: '100%',
        flex: 2,
    },
    iconsContainerRow: {
        width: '100%',
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
    },
    iconContainer: {
        flex: 1,
        margin: 20,
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        flex: 1,

    },
    iconTitle: {
        color: colors.black,
        fontFamily: 'Regular',
        marginTop: 20,
        fontSize: 16
    }
});

export default SplashScreen3;
