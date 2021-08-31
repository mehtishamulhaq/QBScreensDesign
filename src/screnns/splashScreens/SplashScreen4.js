import React from 'react';
import SplashScreen from './SplashScreen';
import { ImageBackground, Image, StyleSheet, Text, View, Button, TouchableHighlight } from "react-native";
import colors from '../../constants/colors';
import SkipSection from './skipSection';

const SplashScreen3 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }

    const purpleOverGreenBackgroundTopNotch = require('./../../../asssets/images/purpleOverGreenBackgroundTopNotch.png');
    const text = 'Qbunk are proud to be the headline sponsor of';
    const whiteBackgroundTopNotch = require('./../../../asssets/images/whiteBackgroundTopNotch.png');
    const greenCard = require('./../../../asssets/images/greenCard.png');
    const greenCardText = 'What are you waiting for...';



    return (
        <View style={styles.container}>
            <View style={styles.topNotch} />


            <ImageBackground
                source={purpleOverGreenBackgroundTopNotch}
                resizeMode="stretch"
                resizeMethod='scale'
                style={styles.secondLayerBackground}

            >

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text} </Text>
                </View>
                <View style={styles.lowerHalf}>
                    <ImageBackground
                        source={whiteBackgroundTopNotch}
                        resizeMode="stretch"
                        resizeMethod='resize'
                        style={styles.secondLayerBackground}

                    >
                        <View style={styles.greenCardContainer}>
                            <ImageBackground
                                source={greenCard}
                                // resizeMode="contain"
                                style={styles.greenCard}

                            >
                                <View style={styles.greenCardTextContainer}>
                                    <Text style={styles.greenCardText}>{greenCardText}</Text>
                                </View>
                                <View style={styles.gettingStarted}>
                                    <TouchableHighlight onPress={() => { }} underlayColor="white">
                                        <View style={styles.gettingStartedButton}>
                                            <Text style={styles.gettingStartedText}>TouchableHighlight</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </ImageBackground>
                        </View>

                        <SkipSection
                            isFirst={isFirst}
                            isLast={isLast}
                            steps={4}
                            currentStep={4}
                            nextRouteName=''
                        />
                    </ImageBackground>
                </View>



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
        display: 'flex',
    },

    topNotch: {
        width: '100%',
        height: 30,
    },
    text: {
        color: colors.white,
        fontSize: 30,
        fontFamily: 'Regular',
    },
    textContainer: {
        width: '100%',
        flex: 4,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    lowerHalf: {
        width: '100%',
        flex: 6,
        display: 'flex',

    },
    greenCardContainer: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: 10,
    },
    greenCard: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    greenCardTextContainer: {
        width: '100%',
        flex: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenCardText: {
        color: colors.purple,
        fontSize: 20
    },
    gettingStarted: {
        width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    gettingStartedButton: {
        borderColor: colors.purple,
        borderWidth: 1,
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    gettingStartedText: {
        color: colors.purple,
        fontSize: 14,
    }
});

export default SplashScreen3;
