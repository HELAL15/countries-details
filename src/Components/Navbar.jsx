import React, { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {
    
    const isDark = localStorage.getItem('isDark') === 'true';
    
    document.documentElement.classList.toggle('dark', isDark);
  }, []); 

  const handleDarkMode = () => {
    
    let isDark = localStorage.getItem('isDark') === 'true';
    
    isDark = !isDark;
    
    document.documentElement.classList.toggle('dark', isDark);
    
    localStorage.setItem('isDark', isDark);
  };

  


  return (
    <nav className='bg-white-bg dark:bg-dark-bg shadow-lg text-dark-bg-2 dark:text-white-bg-2'>
      <div className='container flex flex-wrap items-center justify-between text-slate-200 py-4'>
        <p className='text-dark-bg-2 dark:text-white-bg-2 font-medium text-xl'>where in the world?</p>
        <button onClick={handleDarkMode} className='bg-white-bg-2 hover:bg-slate-200 dark:bg-dark-bg-2 dark:text-white-bg transition-opacity  shadow-sm px-6 py-2 font-bold  rounded-md text-dark-bg'>Dark Mode</button>
      </div>
    </nav>
  )
}

export default Navbar
