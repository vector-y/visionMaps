import React from 'react';
import TeamGrid from './TeamGrid';
import { CurrencyDollarIcon, GlobeAmericasIcon, HeartIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import Explainer from './Explainer';

const AboutContent: React.FC = () => {
    return (
        <div className="bg-white font-inter">
            <div className="bg-white mt-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-1">
                        <div>
                            <div className='py-16'>
                                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</p>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    The transition from paper maps to navigation apps while driving was transformative for the user. We aim to elevate the user experience while following any set of instructions, from cooking to furniture building.
                                    Leveraging multi-modal AI models and spatial computing, we are reimagining the experience of learning new tasks. Imagine an expert along with you guiding you step by step while you learn to cook something new or assemble an IKEA chair. Through Augmented Reality we are incorporating AI into new modalities to more seamlessly improve people’s lives.
                                </p>
                            </div>
                            {/* <div className='pb-12'>
                                <Explainer />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen px-8 pb-12 lg:px-32">
                <div className='lg:mx-48'>
                    <h1 className="text-3xl mb-4 font-bold tracking-tight text-black sm:text-4xl">
                        Team
                    </h1>
                    <TeamGrid />
                </div>
            </div>
        </div>
    );
};

export default AboutContent;