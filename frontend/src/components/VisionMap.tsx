/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from "framer-motion"
import Image from "next/image";
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { MapIcon } from '@heroicons/react/16/solid';
import VideoRecorder from './VideoRecorder';

const VisionMap = () => {
    return (
        <section className="w-full">
            <div className="bg-city bg-cover bg-center text-center bg-[#FFFFFF]">
                <VideoRecorder />
            </div>
        </section>
    );
}

export default VisionMap;