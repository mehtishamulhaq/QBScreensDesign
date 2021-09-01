import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';



const Progress = (props) => {
    const { steps, currentStep, color } = props;

    let style = {};
    let progressBar = [];
    for (let i = 1; i <= steps; i++) {
        style = i === currentStep ?
            { ...styles.highlightedStep, backgroundColor: color } :
            { ...styles.normalStep, backgroundColor: color };

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
        height: 2,
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
        opacity: 0.6
    }

});


export default Progress;