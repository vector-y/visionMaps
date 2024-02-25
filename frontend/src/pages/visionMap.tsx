import React from 'react';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';
import VisionMap from '~/components/VisionMap';

const visionMap: React.FC = () => {
    return (
        <>
            <Navigation />
            <VisionMap />
            <Footer />
        </>
    );
};

export default visionMap;
