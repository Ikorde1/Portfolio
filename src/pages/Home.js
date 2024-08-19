import React, { useEffect, useState } from 'react';
import mypic from '../images/mypic.jpg';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
// import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import html from "../images/stack/HTML.png"
import CSS from  "../images/stack/CSS.png"
import Javascript from "../images/stack/Javascript.svg"
import ReactJs from '../images/stack/React.png'
import Redux from '../images/stack/Redux.svg'
import Next from '../images/stack/Next.svg'
import NodeJs from '../images/stack/NodeJs.svg'
import Express from '../images/stack/Express.png'
import Bash from '../images/stack/Bash.svg'
import Bootstrap from '../images/stack/Bootstrap.svg'
import Git from '../images/stack/Git.svg'
import Github from '../images/stack/Github.svg'
import Saas from '../images/stack/Saas.svg'
import Tailwind from '../images/stack/Tailwind.png'
import Vercel from '../images/stack/Vercel.svg'
import MongoDB from '../images/stack/MongoDB.svg'
import { useNavigate } from 'react-router-dom';




function Home() {
    const navigate = useNavigate();
    const [role, setRole] = useState("<Full Stack Developer/>");

    const changeName = () => {
        setRole(prevRole => prevRole === '<Full Stack Developer/>' ? '<MERN Developer/>' : '<Full Stack Developer/>');
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            changeName();
            console.log('Function executed');
        }, 1000); // Adjust the interval duration as needed

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []); // Empty dependency array since changeName doesn't depend on any external variables

    return (
        <div className='page'>
                    {/* introduction */}
                <div className='intro-section mt-24 flex  justify-around'>

{/* left side */}
    <div className='left-side flex-col'>
        <div className='box flex-col relative top-20 space-y-6'>
            <h3 className='text-4xl font-extrabold'>I AM A</h3>
            <h1 className=' role relative left-12 px-4 py-4 text-4xl h-15 w-[430px] bg-gray-800 font-serif text-white rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-transform duration-300 hover:scale-110'>{role}</h1>
            <p className='absolute text-sm font-sans italic leading-5'>Hey there! If you are looking for a MERN developer then you have come to the right place . Take a look around and if you like what you see, let's connect!</p>

            <div className='icons text-3xl flex justify-evenly  bg-red w-[29rem] relative py-4 top-[80px]'>
           
            <a href='https://github.com/Ikorde1' target='_blank' rel="noopener noreferrer"> <i className=' text-black hover:cursor-pointer hover:text-gray-700'><FaGithub /></i></a>               
            <a href='https://www.linkedin.com/in/ishwark/'  target='_blank' rel="noopener noreferrer"><i className='text-blue-800 hover:cursor-pointer hover:text-blue-800'> <IoLogoLinkedin /></i></a>
            <a href='https://x.com/KordeIshwar'  target='_blank' rel="noopener noreferrer"><i className='text-black-800 text-2xl hover:cursor-pointer  hover:text-gray-600'><RiTwitterXFill /></i></a>
            {/* <a href='https://www.instagram.com/korde.ishwar'  target='_blank' rel="noopener noreferrer"><i className='text-pink-600  hover:cursor-pointer  hover:text-pink-800'><IoLogoInstagram /></i></a> */}
            </div>
        </div>
        <button className="browse bg-gray-800 gap-x-2 relative top-44 left-36 hover:scale-105 transition-transform ease-in-out hover:bg-gray-900 shadow-[0_4px_6px_-1px_rgba(0,0,0,1)] text-white font-medium py-2 px-4 rounded inline-flex items-center"
        onClick={() => navigate("/projects")}
        >
        <span>Browse Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    
        </button> 
               
            
    </div>


{/* blog button for mobile screen */}
    <div className='blog-btn  lg:hidden absolute  top-[89%] left-[355px]'>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        onClick={() => navigate("/Blogs")}
        >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        CHECK MY BLOGS
            </span>
            </button>
    </div>
         



    {/* right side */}
    <div className='right-side'>
        
        <div className='box2 flex-col '>
            <img src={mypic} alt="" className='w-[300px] h-[400px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' />
            <h2 className='name relative left-[3rem] text-[2.25rem] top-2 text-gray-800 dancing-font'>Ishwar Korde</h2>
            <h3 className='title relative left-[1.5rem] font-serif text-slate-600'>Software Engineer at Infosys Ltd.</h3>
        </div>
       
       
    </div>
        
                </div>

                {/* skill section */}
                <div className='skill-section flex justify-around   mt-16 '>

                        {/* left side */}  
                        <div className="left-skill w-1/2 left-[100px]  relative flex flex-col space-y-10">
                            <h2 className=" heading font-bold text-[3.12rem] text-gray-800 leading-[3.125rem]">
                            <span className='text-[6rem]'>M</span>e and
                            <br />
                            My Tech Stack
                            </h2>
                            <div className='subHeading w-1/2'>
                            <p className='para'>
<<<<<<< HEAD
                            Hey everyone,
 
                            I'm Ishwar, a Full Stack Web Developer with 3 years of experience. Currently, I work at Infosys in Pune and freelance full-time. I'm passionate about creating beautiful UI/UX designs, and I'm currently focusing on Nextls. My expertise includes JavaScript, ReactJS, Node.js, and Express for developing web applications.
  
                            Feel free to connect!
=======
                            Hello, <br/><br/>

                            I’m Ishwar, a Frontend Developer with three years of experience currently working at Infosys Ltd. in Pune. My primary focus has been on React.js, and I am actively expanding my skills in the MERN stack and React Native. My passion lies in building dynamic and engaging web applications, and I’m continually seeking opportunities to enhance my expertise in modern development technologies.

>>>>>>> Portfolio_Redesigning_1.0
                             </p>
                            </div>
                            
                        </div>

                        {/* righ side */}
                     <div className="right-skill flex flex-wrap w-[40%]  gap-12 ">

                        <img src={html} alt="" className="skills-logo" />
                        <img src={CSS} alt="" className="skills-logo" />
                        <img src={Javascript} alt="" className="skills-logo" />
                        <img src={ReactJs} alt="" className="skills-logo" />
                        <img src={NodeJs} alt="" className="skills-logo" />
                        <img src={Next} alt="" className="skills-logo" />
                        <img src={Redux} alt="" className="skills-logo" />
                        <img src={Tailwind} alt="" className="skills-logo" />
                        <img src={Bootstrap} alt="" className="skills-logo" />
                        <img src={Express} alt="" className="skills-logo" />
                        <img src={Git} alt="" className="skills-logo" />
                        <img src={Github} alt="" className="skills-logo" />
                        <img src={MongoDB} alt="" className="skills-logo" />
                        <img src={Saas} alt="" className="skills-logo" />
                        <img src={Vercel} alt="" className="skills-logo" />
                        <img src={Bash} alt="" className="skills-logo" />

                     </div>

                    
                        
                </div>


                {/* footer */}
                <div className='footer w-full  text-white mt-8 py-2 bg-gray-800 text-center'>
                Get in touch: +91 8208771967 / +91 9767898127
                </div>
        </div>
    );
}

export default Home;
