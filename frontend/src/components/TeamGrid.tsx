import React from 'react';
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: 'Bryan',
    title: 'Product Designer',
    imageSrc: '/team/bryan.png',
  },
  {
    name: 'Victor',
    title: 'Product Engineer',
    imageSrc: '/team/victor.jpg',
  },
  {
    name: 'Sam',
    title: 'Backend Developer',
    imageSrc: '/team/sam.jpg',
  },
  {
    name: 'Marcus',
    title: 'AI Researcher',
    imageSrc: '/team/marcus.jpg',
  },
  {
    name: 'Nate',
    title: 'AI Engineer',
    imageSrc: '/team/nate.jpeg',
  },
];

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col items-center group">
          <div className="text-left w-full">
            <motion.div 
                whileHover={{ scale: 1.03}}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
            <img
                src={member.imageSrc}
                alt={member.name}
                className="rounded-xl w-full h-64 object-cover mb-2"
            />
            </motion.div>
            <h2 className="text-lg font-bold group-hover:underline">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
