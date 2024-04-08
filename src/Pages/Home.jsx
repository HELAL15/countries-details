import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

const regions = {
  Africa: 'Africa',
  Americas: 'Americas',
  Asia: 'Asia',
  Europe: 'Europe',
  Oceania: 'Oceania'
};

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => { setData(res.data); })
      .catch(error => { console.error('Error fetching data:', error); });
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the data based on the selected region and search query
  const filteredData = data.filter(country => {
    return (
      (!selectedRegion || country.region === selectedRegion) && // Filter by region
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
    );
  });

  const itemsPerPage = 8; // Number of items to display per page
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate the index range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Slice the filtered data array to display only the items for the current page
  const currentItems = filteredData.slice(startIndex, endIndex);
  
  // Handle page navigation
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <section className='mt-10'>
        <div className='container'>
          <div className='flex justify-between items-center gap-10'>
            <form className='input-group relative  lg:w-1/3 w-2/4'>
              <button className='fas fa-search absolute top-1/2 left-4' style={{ transform: 'translate(-20%, -50%)' }}></button>
              <input 
                autoComplete='on'
                autoCorrect='on'
                type='search' 
                className='px-4 pl-10 py-3 w-full border dark:border-gray-800 border-gray-300 dark:bg-dark-bg-2 rounded-lg focus:outline-none focus:border-dark-bg-2' 
                name='searchBar' 
                placeholder='Search for a country. . .' 
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
            </form>
            <select  className='rounded-lg lg:w-1/6 w-2/4 dark:bg-dark-bg-2 bg-white-bg-2 px-4 py-3 text-dark-bg dark:text-white-bg shadow-sm' onChange={handleRegionChange}>
              <option defaultValue={'Filter by region'}  disabled>Filter by region</option>
              <option value={""} >all</option>
              {Object.values(regions).map((region, index) => (
                <option key={index} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 my-10">
            {currentItems.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 my-6">
            <button className={`  transition-opacity shadow-sm px-6 py-2 font-bold rounded-md  ${currentPage === 1 ? 'bg-slate-300 text-dark-bg cursor-not-allowed' : 'dark:text-white-bg text-dark-bg bg-white-bg-2 hover:bg-slate-200 dark:bg-dark-bg-2'}`} onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <p>Page {currentPage} of {totalPages}</p>
            <button className={`  transition-opacity shadow-sm px-6 py-2 font-bold rounded-md  ${currentPage === totalPages ? 'bg-slate-300 text-dark-bg cursor-not-allowed' : 'dark:text-white-bg text-dark-bg bg-white-bg-2 hover:bg-slate-200 dark:bg-dark-bg-2'}`} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
