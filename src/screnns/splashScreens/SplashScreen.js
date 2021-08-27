
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

const SplashScreen = ({ isFirst, isLast, steps, currentStep, image, nextRouteName }) => {

    const nextIcon = <EvilIcons name='arrow-right' color={colors.gray} size={60} onPress={() => navigation.navigate(nextRouteName)} />
    const previousIcon = <EvilIcons name='arrow-left' color={colors.gray} size={60} onPress={() => navigation.goBack()} />
    const navigation = useNavigation();

    return (
        <View flex={1} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    resizeMethod="scale"
                    resizeMode='cover'
                />
            </View>
            <View style={styles.skipSections}>
                <HStack alignItems='center'>
                    <View style={styles.previousIcon}>
                        {!isFirst ? previousIcon : null}
                    </View>
                    <View style={styles.progressbar}>
                        <Progress steps={steps} currentStep={currentStep} />
                    </View>
                    <View style={styles.nextIcon}>
                        {!isLast ? nextIcon : null}
                    </View>
                </HStack>
                <View style={styles.skipTextContainer}>
                    <View style={styles.underline}>
                        <Text style={styles.skipText}>Skip</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
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
        flex: 3,
    },

    skipSections: {
        height: 120,
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
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

export default SplashScreen;

