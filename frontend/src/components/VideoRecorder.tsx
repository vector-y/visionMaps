import React, { useState, useEffect, useRef } from 'react';

const VideoRecorder: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    startVideo(); // Automatically start the video when the component mounts

    return () => { // Cleanup function to stop the video stream when the component unmounts
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="font-inter flex flex-col pt-32 items-center justify-center p-4">
      <video ref={videoRef} className="w-full max-w-4xl rounded-2xl" autoPlay playsInline />
    </div>
  );
};

export default VideoRecorder;
