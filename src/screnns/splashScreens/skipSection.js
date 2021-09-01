
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constants/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { HStack } from 'native-base';
import Progress from '../../components/Progress';
import { backgroundColor } from 'styled-system';

const SkipSection = ({ isFirst, isLast, steps, currentStep, nextRouteName, color }) => {

    const nextIcon = <EvilIcons name='arrow-right' color={color} size={60} onPress={() => navigation.navigate(nextRouteName)} />
    const previousIcon = <EvilIcons name='arrow-left' color={color} size={60} onPress={() => navigation.goBack()} />
    const navigation = useNavigation();

    return (
        <View style={styles.skipSections}>
            <HStack alignItems='center'>
                <View style={styles.previousIcon}>
                    {!isFirst ? previousIcon : null}
                </View>
                <View style={styles.progressbar}>
                    <Progress steps={steps} currentStep={currentStep} color={color} />
                </View>
                <View style={styles.nextIcon}>
                    {!isLast ? nextIcon : null}
                </View>
            </HStack>
            <View style={styles.skipTextContainer}>
                <View style={{ ...styles.underline, borderBottomColor: color }}>
                    <Text style={{ ...styles.skipText, color: color }}>Skip</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1
    },
    nextIcon: {
        marginRight: 60,
        flex: 1
    },
    previousIcon: {
        marginLeft: 60,
        flex: 1
    },
    progressbar: {
        marginRight: 10,
        marginLeft: 10,
        flex: 3,
    },

    skipSections: {
        height: 120,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipTextContainer: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },
    skipText: {
        color: colors.gray,
    },
    underline: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        paddingBottom: 4,
    }
});

export default SkipSection;

