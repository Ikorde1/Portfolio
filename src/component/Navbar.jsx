import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
    const navigate = useNavigate();

    // Simulated download function that returns a promise
    const downloadResume = () => {
        return new Promise((resolve, reject) => {
            // Simulate a download process
            setTimeout(() => {
                // Simulate success or failure
                const success = true; // Change this to `false` to test error handling
                if (success) {
                    resolve('Resume Downloaded.');
                } else {
                    reject('Error occurred.');
                }
            }, 4000);
        });
    };

    const notify = () => {
        toast.promise(
            downloadResume(),
            {
                pending: 'Resume Downloading...',
                success: 'Resume Downloaded.',
                error: 'Error occurred.',
            },
            {
                position: "top-center",
                autoClose: 3000,
            }
        );
    };

    return (
        <div className="shadow-md">
            <ul className="nav flex justify-end text-white bg-gray-800 px-6 pt-8 space-x-14 pb-6 pl-20 text-1xl items-center font-serif cb:text-base">
                <h2 className='text-white cursor-pointer kaushan-font absolute text-4xl left-8' onClick={() => navigate("/")}>Portfolio</h2>
                <li className="hide hover:text-sky-700 cursor-pointer" onClick={() => navigate("/")}>Home</li>
                <li className="hide hover:text-sky-700 cursor-pointer" onClick={() => navigate("/projects")}>Projects</li>
                <li className="hide hover:text-sky-700 cursor-pointer" onClick={() => navigate("/Blogs")}>Blogs</li>
                <button
                    className="resume flex items-center cursor-pointer rounded text-center  bg-transparent text-white hover:text-sky-700 hover:bg-gray-900 shadow-[0_4px_6px_-1px_rgba(255,255,255,0.3)]"
                    onClick={() => {
                        notify();
                        navigate("/MyResume");
                    }}
                >
                    <a href="https://drive.google.com/uc?export=download&id=1ND9aHIjZZrC4UcqTPbZsGIgsHeDII_AN" className="flex py-1 px-2 items-center space-x-2" download>
                        <span>Resume</span>
                        <FaCloudDownloadAlt />
                    </a>
                </button>
                <ToastContainer />
            </ul>
        </div>
    );
}

export default Navbar;
