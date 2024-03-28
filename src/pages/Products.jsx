import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../redux/ProoductsSlice';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StoreItem from '../components/StoreItem';
import ShopItem from '../components/ShopItem';

function Products() {
  const colorr = useSelector((state) => state.colorBg.boolean);
  const inf = useSelector((store) => store.user);
  const items = useSelector((state) => state.shop)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchUsers())
  }, [])
  useEffect(() =>{
    const dr = document.querySelector(".dr")
    if(dr){
        if(items.boolean === false){
            dr.style.right = '-100%'
            dr.style.opacity = 1
            document.body.style.opacity = 1
        }else if(items.boolean === true){
            dr.style.right = '0';
            dr.style.opacity = 1
        }
    }
},[items.boolean])

// window.localStorage.clear()


  return (
    <div className='flex overflow-x-hidden relative'>
      <div className={`absolute  z-30 dr ${colorr? 'text-white bg-white': 'bg-drk'}`}><ShopItem /></div>
      <div className='flex-1'>
        <Sidebar />
      </div>
      <div className={`flex-[6] gap-5 ${colorr ? '' : 'bg-drk'}`}>
        {!inf.loading && inf.data ? <Navbar bl={true}/> : null}
        <div className={`p-3 flex justify-center ${colorr ? '' : 'bg-drk'}`}>
          {inf && inf.loading && <h1>Loading ...</h1>}
          {inf && !inf.loading && inf.error && (
            <h1>{inf.error}</h1>
          )}
          {!inf.loading && inf.data ? <StoreItem inf={inf.data}/> : null}
        </div>
      </div>
    </div>
  );
}

export default Products;