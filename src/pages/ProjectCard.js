import React from 'react';

const ProjectCard = ({ title, images, liveLink, sourceCodeLink }) => {
  return (
    <div className='project-one justify justify-center items-center flex flex-col p-10 space-y-10'>
      <h2 className='font-extrabold text-5xl text-gray-800'>{title}</h2>
      <div className='image-section flex justify-center space-x-8 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || ''}
            className='imgs h-[300px] w-[600px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300'
          />
        ))}
      </div>
      <div className='buttons space-x-8 flex p-4 text-white font-semibold'>
        <button className='text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>See Live</a>
        </button>
        <button className='text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
          <a href={sourceCodeLink} target='_blank' rel='noopener noreferrer'>Source Code</a>
        </button>
      </div>
      <div className='dash relative top-2'>_________________________________________________________________________</div>
    </div>
  );
};

export default ProjectCard;
