import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faGlobe,
  faMoon,
  faCompress,
  faBell,
  faMessage,
  faListUl,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { Toggle } from '../redux/ColorBg';
import { bigTr } from '../redux/ShopSlice';


function Navbar(props) {
  const colorr = useSelector((state) => state.colorBg.boolean);
  const items = useSelector((state) => state.shop)
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className={`w-full h-[67px] border-b-[1px] border-solid ${colorr ? 'bg-white border-brdrW' : 'bg-drk border-brdrB'
        } flex flex-row justify-between items-center px-5`}
    >
      <div className='relative'>
        <input
          type='text'
          placeholder='Search'
          className={`w-[20px] md:w-[200px] h-[30px] border-solid md:border-[1px] text-[0px] md:text-[12px] p-3 ${colorr
              ? 'border-brdrW'
              : 'border-gray-400 bg-drk text-gray-700 '
            }`}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={`text-tx absolute right-[5px] top-[6px] hover:cursor-pointer`}
        />
      </div>
      <div
        className={`flex flex-row items-center gap-4`}
      >
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faGlobe} className={`text-tx`} />
          <p className={`text-tx`}>English</p>
        </div>
        <a
          onClick={() => dispatch(Toggle())}
          className={`relative cursor-pointer`}
        >
          <FontAwesomeIcon icon={faMoon} className={`text-tx`} />
        </a>
        <FontAwesomeIcon icon={faCompress} className={`hidden md:flex text-tx`} />
        <a className={`hidden md:block relative note cursor-pointer`}>
          <FontAwesomeIcon icon={faBell} className={`text-tx`} />
        </a>
        <a className={`hidden md:block relative note2 cursor-pointer`}>
          <FontAwesomeIcon icon={faMessage} className={`text-tx`} />
        </a>
      </div>
      {props.bl === true ? (
        <div className='dropdown'>
          <div role="button" onClick={() => dispatch(bigTr())} className='shop rounded-full flex 
           hover:text-white justify-center items-center my-5'>
            <div className='text-tx hover:text-white w-full h-full flex justify-center items-center'><FontAwesomeIcon icon={faCartShopping} /></div>
            <div className='cnt rounded-circle'>{items.prds.filter((i, index, arr) => arr.findIndex((j) => j.id === i.id) === index).length}</div>
          </div>
        </div>
      ) : (
        null
      )}
    </section>
  );
}

export default Navbar;
