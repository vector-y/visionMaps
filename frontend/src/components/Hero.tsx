/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from "framer-motion"
import Image from "next/image";
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { MapIcon } from '@heroicons/react/16/solid';

const Hero = () => {
    return(
        <section className="w-full">
            <div className="bg-city bg-cover bg-center py-64 text-center bg-[#FFFFFF]">
                <h1 className="font-kollektif text-5xl text-black font-bold tracking-tight sm:text-6xl md:text-6xl lg:text-[5rem] xl:leading-[1.15] mb-2">Vision Maps</h1>
                <p className="font-inter text-lg font-medium mb-8 text-black lg:text-2xl">Crystal clear instructions start here.</p>
                <div className="flex flex-col mt-4 items-center sm:flex-col">
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                    <a href="/" className="font-inter inline-flex justify-center items-center py-4 px-10 text-base font-medium text-center rounded-xl bg-blue-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        <MapIcon className="h-6 w-6 text-white" />
                        <p className="font-bold text-xl ml-2 text-white">Map Vision</p>                
                    </a>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default Hero;