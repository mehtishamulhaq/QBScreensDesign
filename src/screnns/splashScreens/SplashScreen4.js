import React from 'react';
import SplashScreen from './SplashScreen';

const SplashScreen4 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }
    const image = require('./../../../asssets/images/qbss2.png');

    return (
        <SplashScreen
            isFirst={isFirst}
            isLast={isLast}
            steps={4}
            currentStep={4}
            image={image}
            nextRouteName=''
        />
    );
}

export default SplashScreen4;