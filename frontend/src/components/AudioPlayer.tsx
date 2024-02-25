import React, { useEffect } from 'react';

const AudioPlayer = () => {
    // Array of audio file names in your public folder
    const audioFiles = ['step1.mp3', 'step2.mp3', 'step3.mp3', 'step4.mp3', 'step5.mp3', 'step6.mp3', 'step7.mp3'];
    let audioIndex = 0; // To track the current audio file

    useEffect(() => {
        // Function to play audio
        const playAudio = (audioFile: string) => { // Add the string type here
            const audio = new Audio(`/audio_files/${audioFile}`);
            audio.play().catch((error) => console.error("Error playing the audio file:", error));
        };

        // Set interval to play next audio file at each tick
        const interval = setInterval(() => {
            playAudio(audioFiles[audioIndex]!);
            // Update index for next audio file, loop back to start if at the end
            audioIndex = (audioIndex + 1) % audioFiles.length;
        }, 5000); // Adjust 5000 to your desired interval in milliseconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs only once on mount

    return <div></div>;
};

export default AudioPlayer;
