import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=' w-full py-6 shadow-sm bg-white-bg-2 text-dark-bg dark:bg-dark-bg-2 dark:text-white-bg'>
        <div className='container'>
          <div className='flex md:justify-between lg:gap-0 gap-2 justify-center sm:text-center items-center flex-wrap'>
          <p>
            created with love by ahmed helal
          </p>
            <p>
              &copy; 2021 All rights reserved
            </p>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
