import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleCountry = () => {
  const { country } = useParams();
  const location = useLocation();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${country}`)
      .then(res => {
        setData(res.data[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [location, country]);

  return (
    <>
      <div className='container my-10'>
        <Link to='/' className='flex items-center gap-2 w-fit bg-white-bg-2 hover:bg-slate-200 dark:bg-dark-bg-2 dark:text-white-bg transition-opacity shadow-lg px-7 py-2 font-bold rounded-md text-dark-bg'>
          <i className="fa-solid fa-left-long"></i>
          <span>back</span>
        </Link>
      </div>

      <section className='mb-15'>
        <div className='container mb-10 mt-24'>
          {data && (
            <div key={data?.nativeName?.ara?.official} className='grid lg:grid-cols-2 grid-cols-1 gap-9'>
              <div className='mx-auto w-3/4'>
                <img src={data?.flags?.png} alt='flag' className='w-full h-full object-cover' />
              </div>
              <div>
                <h1 className='text-3xl font-semibold mb-4'>{data?.name?.common}</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                  <div className="flex flex-col gap-3">
                    <p><span className='font-semibold'>Native Name:</span> <span className='text-slate-400'>{data?.name?.common}</span></p>
                    <p><span className='font-semibold'>Population:</span><span className='text-slate-400'>{data?.population}</span></p>
                    <p><span className='font-semibold'>Region:</span> <span className='text-slate-400'>{data?.region}</span></p>
                    <p><span className='font-semibold'>Sub Region:</span> <span className='text-slate-400'>{data?.subregion}</span></p>
                    <p><span className='font-semibold'>Capital:</span> <span className='text-slate-400'>{data?.capital}</span></p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p><span className='font-semibold'>Top Level Domain:</span> <span className='text-slate-400'>{data?.tld}</span></p>
                    <p><span className='font-semibold'>Currencies:</span> <span className='text-slate-400'>{Object.values(data?.currencies || {}).join(', ')}</span></p>
                    <p><span className='font-semibold'>Languages:</span><span className='text-slate-400'>{Object.values(data?.languages || {}).join(', ')}</span></p>
                  </div>
                </div>
                <div className='mt-8 flex items-center flex-wrap lg:gap-4 gap-3'>
                  <p className='font-semibold'>Border Countries:</p>
                  <div className='grid grid-flow-col md:gap-4 gap-3 '>
                    {data?.borders && data?.borders.map((border, index) => (
                      <div key={index} className='bg-white-bg-2 dark:bg-dark-bg-2 dark:text-white-bg text-dark-bg shadow-lg px-4 py-1 font-bold rounded-md '>{border}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SingleCountry;
