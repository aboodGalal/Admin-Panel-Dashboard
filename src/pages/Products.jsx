import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../redux/ProoductsSlice';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StoreItem from '../components/StoreItem';
import ShopItem from '../components/ShopItem';
import { db } from '../Firebese';
import { collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';


function Products() {
  const colorr = useSelector((state) => state.colorBg.boolean);
  const inf = useSelector((store) => store.user);
  const items = useSelector((state) => state.shop)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProducts())
  }, [])






  // const { id } = useParams()
  // const [data, setData] = useState([])
  // const user = data.filter((us) => us.id === id)[0]
  // const colorr = useSelector((state) => state.colorBg.boolean)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const list = []
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "products"));
  //       querySnapshot.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() })
  //       });
  //       setData(list)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData()
  // }, [])









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
          {/* {data && <StoreItem inf={data}/>} */}
        </div>
      </div>
    </div>
  );
}

export default Products;