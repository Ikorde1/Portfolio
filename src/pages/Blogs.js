import React from 'react'



function Blogs() {
  return (
   <div className='blogs  w-[70%] ml-16 mt-10'>


<ul className='list-disc space-y-10 '>
        <li> {/* blog 1 */}
        <div className='blog1 space-y-4 list-disc'>
          <h2 className='text-2xl font-serif font-semibold flex'>Unveiling the Virtual DOM in React</h2>
          <date>27/02/2024</date>
          <p className='text-gray-500'>In the fast-paced world of web development, rendering performance is 
          key to creating seamless user experiences. Enter the Virtual DOM, a cornerstone
           of React’s efficiency. In this blog, we’ll explore the Virtual DOM, its pivotal 
           role in React, and how ...

        </p>
          <button className='p-2 hover:bg-slate-600 text-white rounded bg-gray-800'><a href='https://medium.com/@ishwayk123/unveiling-the-virtual-dom-in-react-89e491207d26' target='_blank'>Read More</a></button>
        </div></li>

        <li> {/* blog 2 */}
        <div className='blog2 space-y-4 list-disc'>
          <h2 className='text-2xl font-serif font-semibold flex'>Difference Between useEffect and useLayoutEffect in React</h2>
          <date>27/02/2024</date>
          <p className='text-gray-500'>In the world of React, hooks have revolutionised the way developers manage stateful logic and side effects within functional components. Two commonly used hooks for managing side effects are UseEffect and useLayoutEffect ...

        </p>
        <button className='p-2 hover:bg-slate-600 text-white rounded bg-gray-800'><a href='https://medium.com/@ishwayk123/understanding-the-difference-between-useeffect-and-uselayouteffect-in-react-2a4224ffb33d' target='_blank'>Read More</a></button>        </div></li>

        <li> {/* blog 3 */}
        <div className='blog1 space-y-4 list-disc'>
          <h2 className='text-2xl font-serif font-semibold flex'>The Power of State Lifting</h2>
          <date>28/02/2024</date>
          <p className='text-gray-500'>In React development, managing state efficiently is key to building robust applications. State lifting, a fundamental concept, simplifies this process by centralizing state management in higher-level components. Let’s ...

        </p>
        <button className='p-2 hover:bg-slate-600 text-white rounded bg-gray-800'><a href='https://medium.com/@ishwayk123/simplifying-react-state-management-the-power-of-state-lifting-1522f4a9c6db' target='_blank'>Read More</a></button>        </div></li>
        <li> {/* blog 4 */}
        <div className='blog1 space-y-4 list-disc'>
          <h2 className='text-2xl font-serif font-semibold flex'>Maximizing Performance with Lazy Loading in React</h2>
          <date>28/02/2024</date>
          <p className='text-gray-500'>In the dynamic world of web development, performance is paramount. As React developers, we strive to create fast, responsive applications that delight users. One powerful technique for achieving this goal is ...

        </p>
        <button className='p-2 hover:bg-slate-600 text-white rounded bg-gray-800'><a href='https://medium.com/@ishwayk123/maximizing-performance-with-lazy-loading-in-react-1e6dbbd1d3f0' target='_blank'>Read More</a></button> </div></li>
       </ul>

   </div>
  )
}

export default Blogs
