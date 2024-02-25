import React from 'react';
import VideoRecorder from './VideoRecorder';
import Card from './Instructions';
import Ingredients from './Ingredients';

const VisionMap = () => {
    return (
        // This is the outer container that takes up the full width and height
        <div className="flex justify-center items-center w-full h-full bg-[#FFFFFF]">
            {/* This is the inner container that groups the VideoRecorder and Card components together */}
            <div className="mx-auto flex flex-row justify-center items-center space-y-4"> {/* Adjusted for vertical layout and spacing */}
                <Ingredients/>
                <VideoRecorder />
                <Card />
            </div>
        </div>
    );
}

export default VisionMap;
