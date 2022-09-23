import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Sidebar from './Sidebar'

import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  return (
    
   <main className='grid grid-cols-1   lg:grid-cols-9 lg:max-w-7xl mx-auto'> 
          {/* Stories  */}
          <section className='lg:col-span-2 md:col-span-1'>
            <div className="fixed top-20 ">
           <Sidebar/>
            </div>
         
          </section>
          <section className="lg:col-span-5 md:col-span-7 lg:ml-6  lg:mr-6 mt-6 rounded-lg">
              {/* <h1 className="ml-8  mr-8 font-bold text-xl">#Stories</h1> */}
              <Stories />
        <Posts />
          </section>
          {/* Posts  */}
          <section className="hidden lg:inline-grid lg:cols-span-2">
            <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
            </div>
          
          </section>
   </main>
    
  )
}

export default Feed