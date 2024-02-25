import React from 'react';
import TeamGrid from './TeamGrid';
import { CurrencyDollarIcon, GlobeAmericasIcon, HeartIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/20/solid'

const featured = [
    {
        name: 'Aggregating Sustainable Fashion',
        description:
            'Sleeve is a curated platform spotlighting undiscovered small to mid-sized fashion brands. We blend ethos with affordability, offering unique, quality selections that align with your values and budget effortlessly. Discover hidden gems with us.',
        icon: GlobeAmericasIcon,
    },
    {
        name: 'Supporting Sustainable Brands',
        description: 'At our core, Sleeve is invested in preventing fashion waste from entering our beaches and deserts. Our promise is to help brands sell out of their products to prevent overstock and idle inventory from being trashed.',
        icon: UserGroupIcon,
    },
    {
        name: 'Earning Commission Responsibly',
        description: 'We earn a commission based on the number of clicks and purchases we generate for these brands. This commission model incentivizes us to find you the best sustainable fashion options while ensuring fair compensation our partners.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Storytelling',
        description:
            'Sleeve transforms fashion shopping into a meaningful journey, spotlighting the rich stories behind small and mid-sized brands. We challenge the notion of clothing as mere transactions, fostering a deeper connection where each piece narrates the creator\'s passion and creativity.',
        icon: BookOpenIcon,
    },
    {
        name: 'Why It Matters',
        description: 'By shopping with Sleeve, you not only find the latest sustainable fashion trends but also contribute to reducing fashion waste and promoting ethical consumption. Together, we can make a positive impact on the fashion industry and the planet.',
        icon: HeartIcon,
    },
]

const features = [
    { name: 'Aggregating Sustainable Fashion', description: 'We curate a collection of excess inventory and clearance products from top sustainable fashion brands. By bringing these products together in one place, we simplify the shopping experience for you.' },
    { name: 'Supporting Sustainable Brands', description: 'Sleeve collaborates with boutique sustainable fashion companies, helping them sell their idle products that might otherwise go to waste. This not only supports sustainable practices but also empowers smaller brands in the industry.' },
    { name: 'Earning Commission Responsibly', description: 'We earn a commission based on the number of clicks and purchases we generate for these brands. This commission model incentivizes us to find you the best sustainable fashion options while ensuring fair compensation for the brands we feature.' },
    { name: 'Why It Matters', description: 'By shopping with Sleeve, you not only find the latest sustainable fashion trends but also contribute to reducing fashion waste and promoting ethical consumption. Together, we can make a positive impact on the fashion industry and the planet.' },
]

const AboutContent: React.FC = () => {
    return (
        <div className="bg-white">
            {/* <LoopingVideo/> */}
            <div className="bg-about bg-cover object-top py-80 mx-auto text-center max-w-screen-full bg-[#FFFFFF]" />
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-1">
                        <div>
                            <div className='py-16'>
                                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</p>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    Sleeve began in 2023 with a mission to reduce fashion waste from entering our beautiful beaches and landfills. Sustainable fashion is at the heart of our business as our goal is to help small to midsize fashion brands with their overstock by helping them sell out. We understand that clothing is expensive, so we’re curating affordable fashion pieces that uniquely tell a story.
                                </p>
                            </div>
                            <div className='pb-12'>
                                <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Our Promise</h1>
                                <dl className="mt-10 mx-4 space-y-8 text-base leading-7 text-gray-600">
                                    {featured.map((feature) => (
                                        <div key={feature.name} className="relative">
                                            <dt className="inline font-semibold text-gray-900 ml-8">
                                                <feature.icon className="absolute -left-4 top-0 h-8 w-8 text-emerald-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>
                                            <dd className="newline pl-8">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen px-8 pb-12 lg:px-8">
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