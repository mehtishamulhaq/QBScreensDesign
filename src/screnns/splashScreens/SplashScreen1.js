import React from 'react';
import SplashScreen from './SplashScreen';

const SplashScreen1 = ({ route }) => {
    let isFirst = false;
    let isLast = false;
    if (route && route.params) {
        isFirst = route.params.isFirst;
        isLast = route.params.isLast;
    }
    const image = require('./../../../asssets/images/qbss1.png');

    return (
        <SplashScreen
            isFirst={isFirst}
            isLast={isLast}
            steps={4}
            currentStep={1}
            image={image}
            nextRouteName='SplashScreen2'
        />
    );
}

export default SplashScreen1;
