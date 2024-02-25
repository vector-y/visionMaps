import React, { useEffect } from 'react';

const AudioPlayer = () => {
    // Array of audio file names in your public folder
    const audioFiles = ['step1.mp3', 'step2.mp3', 'step3.mp3', 'step4.mp3', 'step5.mp3', 'step6.mp3', 'step7.mp3'];

    useEffect(() => {
        let audioIndex = 0; // To track the current audio file, moved inside useEffect to avoid reset on re-renders

        // Function to play audio
        const playAudio = (audioFile: string) => {
            const audio = new Audio(`/audio_files/${audioFile}`);
            audio.play().catch((error) => console.error("Error playing the audio file:", error));
        };

        // Set interval to play next audio file at each tick
        const interval = setInterval(() => {
            if (audioIndex < audioFiles.length) {
                playAudio(audioFiles[audioIndex]!);
                audioIndex += 1; // Update index for next audio file
            } else {
                clearInterval(interval); // Stop the interval once all audio files have been played
            }
        }, 4000); // Adjust 4000 to your desired interval in milliseconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs only once on mount

    return <div></div>;
};

export default AudioPlayer;
