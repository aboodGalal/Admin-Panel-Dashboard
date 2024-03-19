import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FetchData } from '../redux/products/ProoductsSlice';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Products() {
  const selector = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const colorr = useSelector((state) => state.colorBg.boolean);

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  return (
    <div className='flex overflow-x-hidden'>
      <div className='flex-1'>
        <Sidebar />
      </div>
      <div className={`flex-[6] gap-5 ${colorr ? '' : 'bg-drk'}`}>
        <Navbar />
        <div className={`p-3 flex justify-center ${colorr ? '' : 'bg-drk'}`}>
          {selector && selector.loading && <h1>Loading ...</h1>}
          {selector && !selector.loading && selector.error && (
            <h1>{selector.error}</h1>
          )}
          {selector && !selector.loading && selector.data && (
            <ul className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4'>
              {selector.data.map((prd) => (
                <li key={prd.id} className={`bg-white rounded-lg  gap-3 
                p-4 flex flex-col items-center justify-between w-[250px] h-[450px]
                ${colorr?'':'bg-d rk shadow-sh'} shadow-lg`}>
                    <h1 className='text-center text-sm text-tx font-bold mb-2'>{prd.title}</h1>
                    <div className='h-[220px] w-full'><img src={prd.image} alt={prd.title} className='w-full h-full mb-2' /></div>
                    <p className='text-gray-700'>Price: ${prd.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;