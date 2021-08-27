import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { HStack, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import colors from '../constants/colors';

export default function ListItem({ item, index }) {
    const navigation = useNavigation();
    const outlinedArrrowIcon = <EvilIcons name='arrow-right' color={colors.purple} size={50} />
    const filledArrrowIcon = <Ionicons name='arrow-forward-circle' color={colors.purple} size={45} />
    const filledCircleIcon = <FontAwesomeIcons name='circle' size={45} color={colors.lightGray} />

    return (
        <View style={styles.listIemContainer}>
            <HStack alignItems="center" >
                <View style={styles.circleIconContainer}>
                    {filledCircleIcon}
                </View>
                <View style={styles.textContainer}>
                    <VStack>
                        <Text
                            style={styles.venueTitle}>
                            {item.title}
                        </Text>
                        <Text
                            style={styles.address}>
                            {item.address}
                        </Text>
                    </VStack>
                </View>
                {index % 2 === 0 ? filledArrrowIcon : outlinedArrrowIcon}
            </HStack>
        </View>
    )
}

const styles = StyleSheet.create({
    circleIconContainer: {
        marginLeft: 10,
    },
    listIemContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    venueTitle: {
        fontSize: 18,
        fontWeight: '300'
    },
    address: {
        fontSize: 14,
        color: 'gray'
    },
});
