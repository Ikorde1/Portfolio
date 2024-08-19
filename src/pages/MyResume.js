import React from 'react';
import resume from '../images/Resume_Img.jpg'; // Adjust the path as needed

const MyResume = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white-00">
      <div className="absolute top-24 max-w-[800px] max-h-[1200px] border border-gray-300 bg-white shadow-2xl overflow-hidden">
        <img
          src={resume}
          alt="Resume"
          className="w-full h-full object-contain"
        />
      </div>
        {/* Footer */}
        <div className='footer w-full text-white fixed bottom-0 py-2 bg-gray-800 text-center'>
       Thanks for Visiting!
      </div>
    </div>
  );
};

export default MyResume;
