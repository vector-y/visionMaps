import React from 'react';

const Ingredients = () => {
    return (
        // Container for vertical centering
        <div className="flex items-center justify-center min-h-screen"> 
            {/* Card with limited height and overflow control */}
            <div className="font-inter mt-32 bg-gray-200 rounded-2xl p-20 w-full max-w-xs overflow-auto max-h-[500px]">
                <div className="flex flex-col gap-2.5">
                    <p className="leading-[19px] text-2xl font-bold mb-2.5">Ingredients</p>
                    {/* List of ingredients as buttons */}
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🍞 Bread</a>
                    </button>
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🍅 Tomato</a>
                    </button>
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🥬 Lettuce</a>
                    </button>
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🍖 Steak</a>
                    </button>
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🧅 Red Onions</a>
                    </button>
                    <button className="flex items-center justify-start gap-2 w-full p-2 rounded-md hover:bg-gray-100">
                        <a>🫓 Mayo</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;
