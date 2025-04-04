'use client'

// Import Libraries
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import './team.css';
import fabric from '@/public/images/background/curvy-fabric-light.png';

// Import Team Member Images
import mudenda from '@/public/images/team/person (1).jpeg';
import mwelwa from '@/public/images/team/person (5).jpeg';
import derek from '@/public/images/team/person (6).jpeg';
import andrew from '@/public/images/team/person (7).jpeg';

const teamMembers = [
  { 
    id: 1,
    name: "Maybin Mudenda",
    title: "Chief Executive",
    location: 'Zambia, South Africa',
    image: mudenda,
    bio: `
      Maybin Mudenda is a highly accomplished entrepreneur and
      business leader who founded African Grey Insurance in Zambia and
      currently serves as the Executive Chairman of Mudenda Capital
      Partners South Africa. He is also the Board Chairman of Insizwe
      Private Brokers and an active member of the boards of the
      American Chamber of Commerce and the French Business Circle.
    `
  },
  { 
    id: 2,
    name: "MWELWA CHIBESAKUNDA",
    title: "Executive Director",
    location: 'UK, USA, Zambia',
    image: mwelwa,
    bio: `
      Mwelwa Chibesakunda is a seasoned lawyer and advocate of the
      High Court and Supreme Court of Zambia with over 33 years of
      experience. He holds an LLM in International Commercial Law from the
      University of Bristol and is the Managing Partner of Chibesakunda & Company.
    `
  },
  { 
    id: 3,
    name: "C. DEREK CAMPBELL",
    title: "Executive Director",
    location: ' UAE, USA',
    image: derek,
    bio: `
      Derek Campbell has over 25 years of experience in deal origination,
      strategic business development, and risk mitigation for U.S. natural resources,
      energy, and infrastructure firms expanding into Africa.
    `
  },
  { 
    id: 4,
    name: "ANDREW SEKANDI",
    title: "Executive Director",
    location: 'UK',
    image: andrew,
    bio: `
      Andrew Sekandi is a seasoned professional with nearly two decades
      of experience in the natural resources sector, specializing in equity
      and debt financing, royalty and streaming agreements, and SPAC transactions.
    `
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div id='team' className='nav-padding flex justify-center flex-col' style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="relative w-fit mx-10 lg:mx-32 my-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="shape shape-11" 
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="main-heading text-black"
        >
          OUR <br/> EXECUTIVE <br/> TEAM
        </motion.h1>
      </div>

      <motion.div
        className="team-container mt-10 mb-20 py-10 relative text-black"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="team-content">
          <div className="shape shape-12" />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[10rem] px-10 relative z-[2]'>
            {teamMembers.map((member, index) => (
              <div key={member.id} className='team-member relative text-white md:text-black'>
                <Image
                  onClick={() => setSelectedMember(member)}
                  className={`cursor-pointer team-member-photo-${member.id}`}
                  src={member.image}
                  alt={member.name}
                  quality={100}
                />
                <p className='name m-0 md:text-black'>{member.name}</p>
                <p className="text-[1.3rem] mb-1 md:text-black">{member.title}</p>
                <p className="text-sm italic font-bold md:text-black">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 w-[100vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)} // Close modal when background is clicked
          >
            <motion.div
              className="bg-white/90 p-6 rounded-lg shadow-lg w-[95vw] md:w-[80vw] h-[90vh] md:h-[80vh] relative overflow-auto"
              style={{ backgroundImage: `url(${fabric.src})` }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* <button 
                className="text-black absolute top-2 right-7 text-5xl font-light cursor-pointer border w-[4rem] h-[4rem] flex justify-center items-center bg-red-500"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button> */}
              <div className="flex flex-col md:flex-row h-full relative gap-10">
                <Image 
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className={`w-[90vw] h-[90vw] md:w-auto md:h-auto  relative rounded-md object-cover flex-[2] team-member-photo-${selectedMember.id}`}
                />
                <div className="flex-col flex-[3] py-20 modal-content text-black">
                  <h2 className="text-5xl font-bold relative w-fit uppercase">
                    <span className="z-[1] relative">{selectedMember.name}</span>
                    <motion.div 
                      initial={{ opacity: 0, x: -100 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="shape modal-shape top-[-50%] md:top-[-90%] right-[20%] md:right-[-0.5rem]" 
                    />
                  </h2>
                  <p className="text-gray-900 text-xl">{selectedMember.title}</p>
                  <div className="flex justify-center items-center md:justify-start md:items-start">
                    <div className="w-[10rem] h-1 rounded-full bg-black" />
                  </div>
                  <p className="mt-4 text-xl">{selectedMember.bio}</p>
                  <p className="text-gray-900 text-xl italic">{selectedMember.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
