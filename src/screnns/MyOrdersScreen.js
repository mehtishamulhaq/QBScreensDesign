
import React from 'react';
import { Text, View, StyleSheet } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen1 from './splashScreens/SplashScreen1';
import SplashScreen2 from './splashScreens/SplashScreen2';
import SplashScreen3 from './splashScreens/SplashScreen3';
import SplashScreen4 from './splashScreens/SplashScreen4';
import colors from '../constants/colors';


const MyOrdersScreen = ({ route }) => {
    let skipSurvey = false;
    if (route && route.params) {
        skipSurvey = route.params.skipSurvey;
    }
    const Stack = createStackNavigator();
    return (<>

        {skipSurvey ? (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Orders Screen !
                    </Text>
                </View>
            </View>
        ) : (
            <Stack.Navigator
                initialRouteName='SplashScreen1'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="SplashScreen1"
                    component={SplashScreen1}
                    options={{ title: '' }}
                    initialParams={{ isFirst: true, }}
                />
                <Stack.Screen
                    name="SplashScreen2"
                    component={SplashScreen2}
                    options={{ title: '' }}
                />
                <Stack.Screen
                    name="SplashScreen3"
                    component={SplashScreen3}
                    options={{ title: '' }}
                />
                <Stack.Screen
                    name="SplashScreen4"
                    component={SplashScreen4}
                    options={{ title: '' }}
                    initialParams={{ isLast: true, }}
                />
            </Stack.Navigator>
        )}
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGreen,
    },
    text: {
        fontSize: 30,
        fontFamily: 'Regular',
        color: colors.purple,
    }
})


export default MyOrdersScreen;

