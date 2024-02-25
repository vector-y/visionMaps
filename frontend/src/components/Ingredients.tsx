import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { PaperClipIcon, PaperAirplaneIcon, QuestionMarkCircleIcon } from '@heroicons/react/16/solid';

const Ingredients = () => {
    return (
        <div className="font-inter bg-gray-200 rounded-2xl p-20 w-full max-w-xs">
            <div className="flex flex-col gap-2.5">
                <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">Options</p>
                {/* Button with Icon */}
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🍞 Bread</a>
                </button>
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🍅 Tomato</a>
                </button>
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🥬 Lettuce</a>
                </button>
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🍖 Steak</a>
                </button>
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🧅 Red Onions</a>
                </button>
                <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                    <a href="">🫓 Mayo</a>
                </button>
            </div>
        </div>
    );
}

export default Ingredients;
