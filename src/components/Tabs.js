import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import HomeScreen from './../screnns/HomeScreen';
import ChesterScreen from './../screnns/ChesterScreen';
import MyHistoryScreen from './../screnns/MyHistoryScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                activeColor="black"
                barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <EntypoIcon name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ChesterScreen"
                    component={ChesterScreen}
                    options={{
                        tabBarLabel: 'Chester',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="crown" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="MyHistoryScreen"
                    component={MyHistoryScreen}
                    options={{
                        tabBarLabel: 'My History',
                        tabBarIcon: ({ color }) => (
                            <EntypoIcon name="text-document" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;