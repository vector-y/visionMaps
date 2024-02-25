import React, { useState, useEffect } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/16/solid';

type TextUpdate = {
  title: string;
  description: string;
};

const textUpdates: TextUpdate[] = [
  { title: "Step 1", description: "Slice the sub roll horizontally." },
  { title: "Step 2", description: "Spread mayonnaise on each side of the sub roll." },
  { title: "Step 3", description: "Layer the beef on the bottom half of the sub roll." },
  { title: "Step 4", description: "Top the beef with a handful of lettuce." },
  { title: "Step 5", description: "Add tomato slices and red onion rings." },
  { title: "Step 6", description: "Close the sandwich with the top half of the sub roll." },
  { title: "Step 7", description: "Serve the sandwich immediately." },
];

const Instructions: React.FC = () => {
  // State for the current text update
  const [currentText, setCurrentText] = useState<TextUpdate>(textUpdates[0] as TextUpdate);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % textUpdates.length;
        setCurrentText(textUpdates[nextIndex] as TextUpdate);
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-inter bg-gray-200 rounded-2xl p-20 w-72 mx-auto">
      <div className="flex flex-col items-center space-y-2">
        <ClipboardDocumentIcon className="h-6 w-6 text-black" />
        <h3 className="font-bold text-2xl text-center">{currentText.title}</h3>
      </div>
      <p className="text-secondary text-lg text-center mt-2">
        {currentText.description}
      </p>
    </div>

  );
};

export default Instructions;
