import React from 'react';
import VideoRecorder from './VideoRecorder';
import Card from './Instructions';
import Ingredients from './Ingredients';
import AudioPlayer from './AudioPlayer';

const VisionMap = () => {
    return (
        // This is the outer container that takes up the full width and height
        <div className="flex justify-center items-center w-full h-full bg-[#FFFFFF]">
            <div className="mx-auto flex flex-row justify-center items-center space-y-4">
                <Ingredients />
                <AudioPlayer />
                <VideoRecorder />
                <Card />
            </div>
        </div>
    );
}

export default VisionMap;
