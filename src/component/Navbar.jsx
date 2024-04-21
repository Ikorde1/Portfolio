import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    
    return (
        <div className="shadow-md">
            <ul className=" nav flex justify-end   text-white bg-gray-800 px-6 pt-8 space-x-14 pb-6 pl-20 text-1xl items-center font-serif  cb:text-base">
                <h2 className=' text-white  kaushan-font absolute text-4xl left-8'>Portfolio</h2>
                <li className="hide hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>Home</li>
                <li className="hide hover:text-blue-600 cursor-pointer" onClick={() => navigate("/projects")}>Projects</li>
                <li className="hide hover:text-blue-600 cursor-pointer" onClick={() => navigate("/Blogs")}>Blogs</li>
                <li className="resume rounded text-center py-2 px-3 bg-lime-600 hover:bg-green-900 text-white"><a href="https://drive.google.com/uc?export=download&id=1hRJboJWoMSZHT106zTuYaS2f0DUdoNWX">Resume</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
