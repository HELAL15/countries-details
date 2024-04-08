import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {

  return (
    <>
      <Link to={`/${data.name.common}`} className='bg-white-bg-2 dark:bg-dark-bg-2 text-dark-bg dark:text-white-bg shadow-md rounded-md '>
        <img src={data.flags.png} alt='flag' className='w-full h-52 object-contain'/>
        <div className='p-6'>
          <h1 className='text-lg font-semibold mb-2'>{data.name.common}</h1>
          <p className='mb-2'><span className='font-semibold'>Population:</span> <span className='text-slate-400'>{data.population}</span></p>
          <p className='mb-2'><span className='font-semibold'>Region:</span> <span className='text-slate-400'>{data.region}</span></p>
          <p className='mb-2'><span className='font-semibold'>Capital:</span> <span className='text-slate-400'>{data.capital}</span></p>
        </div>
      </Link>
    </>
  )

}

export default Card
