import React from 'react';
import SplashScreen from './SplashScreen';
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import colors from '../../constants/colors';
import SkipSection from './skipSection';


const SplashScreen2 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }

    const whiteOverGrayBackgroundTopNotch = require('./../../../asssets/images/whiteOverGrayBackgroundTopNotch.png');
    const text = `And see what takes your fancy ____ `;
    const cardText = `Scroll through all the fantastic vanues involved... `;
    const purpleCard = require('./../../../asssets/images/purpleCardSideNotches.png');
    const pubs = require('./../../../asssets/images/pubs.png');
    const bars = require('./../../../asssets/images/bars.png');
    const resturant = require('./../../../asssets/images/resturant.png');


    return (
        <View style={styles.container}>
            <View style={styles.topNotch} />


            <ImageBackground
                source={whiteOverGrayBackgroundTopNotch}
                resizeMode="stretch"
                resizeMethod='scale'
                style={styles.secondLayerBackground}

            >
                <View style={styles.purpleCardContainer}>
                    <ImageBackground
                        source={purpleCard}
                        resizeMode="stretch"
                        resizeMethod='scale'
                        style={styles.thirdLayerBackground}

                    >
                        <View
                            style={styles.cardTextContainer}
                        >

                            <Text style={styles.cradText}> {cardText}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text} </Text>
                </View>
                <View style={styles.iconsContainerRow}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} resizeMode="contain" source={pubs} />
                        <Text style={styles.iconTitle}>Pubs</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} resizeMode="contain" source={bars} />
                        <Text style={styles.iconTitle}>Bars</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} resizeMode="contain" source={resturant} />
                        <Text style={styles.iconTitle}>Resturants</Text>
                    </View>

                </View>
                <SkipSection
                    isFirst={isFirst}
                    isLast={isLast}
                    steps={4}
                    currentStep={2}
                    nextRouteName='SplashScreen3'
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
    cardTextContainer: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    cradText: {
        color: colors.white,
        fontSize: 18,
        alignSelf: 'center'
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
        fontSize: 18,
        fontFamily: 'Regular',
    },
    textContainer: {
        width: '100%',
        flex: 1,
        marginLeft: 30,
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
    },
    purpleCardContainer: {
        width: '100%',
        flex: 2,
        marginTop: 100,
        paddingLeft: 30,
        paddingRight: 30,

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

export default SplashScreen2;
