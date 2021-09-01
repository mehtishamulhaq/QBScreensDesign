import React from 'react';
import SplashScreen from './SplashScreen';
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import colors from '../../constants/colors';
import SkipSection from './skipSection';


const SplashScreen1 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }

    const whiteOvergreenBackgroundTopNotch = require('./../../../asssets/images/whiteOvergreenBackgroundTopNotch.png');
    const text = `Welcome to your Pocket guide to Chester Food & Drink Month`;
    const locationImage = require('./../../../asssets/images/locationImage.png');
    const grayImageCircle = require('./../../../asssets/images/grayCircle.png');
    const fortWithCircle = require('./../../../asssets/images/fortWithCircle.png');


    return (
        <View style={styles.container}>
            <View style={styles.topNotch} />


            <ImageBackground
                source={whiteOvergreenBackgroundTopNotch}
                resizeMode="stretch"
                resizeMethod='scale'
                style={styles.secondLayerBackground}

            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text} </Text>
                </View>

                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={fortWithCircle}
                        resizeMode="contain"
                        resizeMethod='scale'
                        style={styles.thirdLayerBackground}

                    >

                    </ImageBackground>
                </View>
                <SkipSection
                    isFirst={isFirst}
                    isLast={isLast}
                    steps={4}
                    currentStep={1}
                    nextRouteName='SplashScreen2'
                    color={colors.gray}
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
    thirdLayerBackground: {
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
        margin: 30,
        marginTop: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageContainer: {
        flex: 1,
    },
    skipSection: {
        width: "100%",
        height: 120,
        backgroundColor: 'red'
    },
    grayImageCircle: {
        marginLeft: 30
    }
});

export default SplashScreen1;
