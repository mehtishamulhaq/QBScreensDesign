import React from 'react';
import SplashScreen from './SplashScreen';

const SplashScreen3 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }
    const image = require('./../../../asssets/images/qbss3.png');

    return (
        <SplashScreen
            isFirst={isFirst}
            isLast={isLast}
            steps={4}
            currentStep={3}
            image={image}
            nextRouteName='SplashScreen4'
        />
    );
}

export default SplashScreen3;