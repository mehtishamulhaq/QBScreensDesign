import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

const Progress = (props) => {
    const { steps, currentStep } = props;

    let style = {};
    let progressBar = [];
    for (let i = 1; i <= steps; i++) {
        style = i === currentStep ? styles.highlightedStep : styles.normalStep;
        progressBar.push(<View key={i} style={style} />)
    }

    return (
        <View style={styles.container}>
            {progressBar}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: colors.lightGray,
        display: 'flex',
        flexDirection: 'row',
    },
    highlightedStep: {
        flex: 1,
        height: 2,
        backgroundColor: colors.black,
    },
    normalStep: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGray,
    }

});


export default Progress;