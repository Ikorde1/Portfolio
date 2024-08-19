import React from 'react';
import ProjectCard from './ProjectCard';
import img1 from '../images/Project_Screenshots/fashionfusion1.jpg';
import img2 from '../images/Project_Screenshots/fashionfusion2.jpg';
import img3 from '../images/Project_Screenshots/weather1.jpg';
import img4 from '../images/Project_Screenshots/weather2.jpg';
import img5 from '../images/Project_Screenshots/tour1.jpg';
import img6 from '../images/Project_Screenshots/tour2.jpg';
import img7 from '../images/Project_Screenshots/game1.jpg';
import img8 from '../images/Project_Screenshots/game2.jpg';

const projects = [
  {
    title: 'Fashion Fusion',
    images: [
      { src: img1 },
      { src: img2 }
    ],
    liveLink: 'https://ik-fashionfusion.vercel.app/',
    sourceCodeLink: 'https://github.com/Ikorde1/FashionFusion'
  },
  {
    title: 'WeatherLense',
    images: [
      { src: img3 },
      { src: img4 }
    ],
    liveLink: 'https://weather-lense.vercel.app/',
    sourceCodeLink: 'https://github.com/Ikorde1/WeatherLense'
  },
  {
    title: 'Journey Junction',
    images: [
      { src: img5 },
      { src: img6 }
    ],
    liveLink: 'https://tours-travel-three.vercel.app/',
    sourceCodeLink: 'https://github.com/Ikorde1/tours-travel'
  },
  {
    title: 'Tic-Tac Tactics',
    images: [
      { src: img7 },
      { src: img8 }
    ],
    liveLink: 'https://tic-tac-toe-mu-nine.vercel.app/',
    sourceCodeLink: 'https://github.com/Ikorde1/tic-tac-toe'
  }
];

export default function Projects() {
  return (
    <div>
      <div className='flex flex-col space-y-10 p-4'>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          images={project.images}
          liveLink={project.liveLink}
          sourceCodeLink={project.sourceCodeLink}
        />
      ))}
      
    </div>
        {/* Footer */}
      <div className='footer w-full text-white mt-8 py-2 bg-gray-800 text-center'>
        Get in touch: +91 8208771967 / +91 9767898127
      </div>
    </div>
  );
}
