
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen1 from './splashScreens/SplashScreen1';
import SplashScreen2 from './splashScreens/SplashScreen2';
import SplashScreen3 from './splashScreens/SplashScreen3';
import SplashScreen4 from './splashScreens/SplashScreen4';


const MyOrdersScreen = () => {
    const Stack = createStackNavigator();
    return (
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
    );
}



export default MyOrdersScreen;

