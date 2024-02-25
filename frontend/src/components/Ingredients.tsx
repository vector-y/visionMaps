import React, { useState, useEffect } from 'react';

const Ingredients = () => {
    // Initialize state with counts for each item
    const [counts, setCounts] = useState({
        '🍞 Bread': 5,
        '🍅 Tomato': 5,
        '🥬 Lettuce': 5,
        '🍖 Steak': 3,
        '🧅 RedOnions': 4,
        '🫓 Mayo': 2,
    });

    // The sequence of items to decrement
    const sequence = ['🍞 Bread', '🫓 Mayo', '🍖 Steak', '🍅 Tomato', '🧅 RedOnions', '🫓 Mayo'];
    // State to keep track of the current position in the sequence
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get the current item from the sequence
            const currentItem = sequence[currentIndex];

            // Decrement the count for the current item
            setCounts((prevCounts) => ({
                ...prevCounts,
                [currentItem]: prevCounts[currentItem] > 0 ? prevCounts[currentItem] - 1 : prevCounts[currentItem]
            }));

            // Move to the next item in the sequence or reset to the beginning if at the end
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sequence.length);
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [currentIndex]); // Dependencies array ensures the effect is only re-run when currentIndex changes

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="font-inter mt-32 bg-gray-200 rounded-2xl p-20 w-full max-w-xs overflow-auto max-h-[500px]">
                <div className="flex flex-col gap-2.5">
                    <p className="leading-[19px] text-2xl font-bold mb-2.5">Inventory</p>
                    {/* Render the list of ingredients */}
                    {sequence.map((item, index) => (
                        <div key={index} className="flex items-center justify-between w-full p-2 rounded-md bg-gray-100">
                            <span>{item}</span>
                            <span>x{counts[item]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ingredients;