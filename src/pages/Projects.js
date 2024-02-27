import gif1 from '../images/animated.gif'
import img1 from '../images/Project_Screenshots/fashionfusion1.jpg'
import img2 from '../images/Project_Screenshots/fashionfusion2.jpg'
import img3 from  '../images/Project_Screenshots/weather1.jpg'
import img4 from  '../images/Project_Screenshots/weather2.jpg'
import img5 from '../images/Project_Screenshots/tour1.jpg'
import img6 from '../images/Project_Screenshots/tour2.jpg'
import img7 from '../images/Project_Screenshots/game1.jpg'
import img8 from '../images/Project_Screenshots/game2.jpg'


export default function Projects(){

  return(
//     <div className='flex justify-center items-center'>
//     <img src={gif1} alt=""
//         className='w-[800px] h-[600px]'
//     />
// </div>



  <div className='container flex flex-col space-y-10'>

          {/* project one */}
    
        <div className='project-one justify justify-center items-center flex flex-col p-10 space-y-10 '>
              <h2 className='font-extrabold text-5xl  text-gray-800'>Fasion Fusion</h2>
              <div className='image-section  flex justify-center space-x-8 items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <img src={img1} alt = "" className='imgs h-[300px] w-[600px]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300'/>
                 
                <img src={img2} alt = "" className='imgs h-[300px] w-[600px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300 '/>
              </div>
              <div className='buttons space-x-8 flex p-4 text-white font-semibold '>
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'><a href='https://ik-fashionfusion.vercel.app/' target='_blank'> See Live</a></button>
               
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'><a href='https://github.com/Ikorde1/FashionFusion' target='_blank'> Source Code</a></button>
              </div>
              <div className='dash relative top-2'>_________________________________________________________________________</div>

        </div>

        {/* project two */}
        <div className='project-one justify justify-center items-center flex flex-col p-10 space-y-10 '>
              <h2 className='font-extrabold text-5xl  text-gray-800'>WeatherLense</h2>
              <div className='image-section  flex justify-center space-x-8 items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <img src={img3} alt = "" className='imgs h-[300px] w-[600px]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300'/>
                 
                <img src={img4} alt = "" className='imgs h-[300px] w-[600px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300 '/>
              </div>
              <div className='buttons space-x-8 flex p-4 text-white font-semibold '>
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://weather-lense.vercel.app/' target='_blank'> See Live</a>
                </button>
               
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://github.com/Ikorde1/WeatherLense' target='_blank'> Source Code</a>
                </button>
              </div>
              <div className='dash relative top-2'>_________________________________________________________________________</div>

        </div>

        {/* project three */}
        <div className='project-one justify justify-center items-center flex flex-col p-10 space-y-10 '>
              <h2 className='font-extrabold text-5xl  text-gray-800'>Journey Junction</h2>
              <div className='image-section  flex justify-center space-x-8 items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <img src={img5} alt = "" className='imgs h-[300px] w-[600px]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300'/>
                 
                <img src={img6} alt = "" className='imgs h-[300px] w-[600px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300 '/>
              </div>
              <div className='buttons space-x-8 flex p-4 text-white font-semibold '>
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://tours-travel-three.vercel.app/' target='_blank'> See Live</a>
                </button>
               
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://github.com/Ikorde1/tours-travel' target='_blank'> Source Code</a>
                </button>
              </div>
              <div className=' dash relative top-2 '>_________________________________________________________________________</div>

        </div>

        {/* project 4 */}
        <div className='project-one justify justify-center items-center flex flex-col p-10 space-y-10 '>
              <h2 className='font-extrabold text-5xl  text-gray-800'>Tic-Tac Tactics</h2>
              <div className='image-section  flex justify-center space-x-8 items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <img src={img7} alt = "" className='imgs h-[300px] w-[600px]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300'/>
                 
                <img src={img8} alt = "" className='imgs h-[300px] w-[600px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-110 ease-in duration-300 '/>
              </div>
              <div className='buttons space-x-8 flex p-4 text-white font-semibold '>
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://tic-tac-toe-mu-nine.vercel.app/' target='_blank'> See Live</a></button>
               
                <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                <a href='https://github.com/Ikorde1/tic-tac-toe' target='_blank'> Source Code</a></button>
              </div>
             

        </div>



       {/* footer */}
       <div className='footer w-full  text-white mt-8 py-2 bg-gray-800 text-center'>
                Get in touch: +91 8208771967 / +91 9767898127
                </div>

</div>

  )};