import { useSelector, useDispatch } from 'react-redux'
import { remove, bigFl, rmTotal } from '../redux/ShopSlice';

function ShopItem() {
    const colorr = useSelector((state) => state.colorBg.boolean)
    const items = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    const rmm = (id, price) => {
        dispatch(remove(id))
        window.localStorage.setItem(`remove-${id}`, `id:${id}`)
        setTimeout(() => {
            window.localStorage.removeItem(`remove-${id}`);
        }, 100);
        dispatch(rmTotal((parseFloat(price) * parseFloat(window.localStorage.getItem(`numPrd-${id}`)))))
        const newTotal = items.total - (parseFloat(price) * parseFloat(window.localStorage.getItem(`numPrd-${id}`)))
        setTimeout(() => {
            window.localStorage.setItem("totalPro", newTotal.toFixed(2))
        }, 100);
    }

    return (
        <>
            <div className={`flex flex-row justify-between items-center p-3 mb-3 
            ${colorr? 'text-white border-r-[1px] border-solid border-brdrW'
            : 'bg-drk border-r-[1px] border-solid border-brdrB'}`}>
                <h2 className={`${colorr? 'text-black ': 'text-white'}`}>Cart</h2>
                <button className={`bg-white px-3 py-1 rounded-md border-0 text-black`}
                 onClick={() => dispatch(bigFl())}>X</button>
            </div>
            <div className={`flex flex-col w-full g-4 p-2 ${colorr? 'text-white border-r-[1px] border-solid border-brdrW'
            : 'bg-drk border-r-[1px] border-solid border-brdrB'}`}>
                {items.prds.length > 0 ?
                    Array.from(new Set(items.prds.map((i) => i.id))).map((id) => {
                        const item = items.prds.find((i) => i.id === id);

                        return (

                            <div key={item.id}>
                                <div className='w-full flex flex-col md:flex-row justify-left items-center mb-1 p-2 gap-2'>
                                    <img src={item.image} className='card-img-left me-3' alt='...' style={{ maxWidth: '150px', height: '150px' }} />
                                    <div className='flex flex-row justify-between items-center w-[150px] md:w-full'>
                                        {/* <h5 className='card-title flex flex-col justify-between'> */}
                                            {/* <p>{item.name} </p> */}
                                            {/* <p className='text-body-secondary'>${item.price}</p> */}
                                        {/* </h5> */}
                                        {/* <div className='flex flex-row gap-3 justify-right items-center'> */}
                                            <h2 className={`self-end text-[20px] ${colorr? 'text-black ': 'text-white'}`}>${((parseInt(window.localStorage.getItem(`numPrd-${item.id}`))) * parseFloat(item.price)).toFixed(2)}</h2>
                                            <button className='btn border-red-500 border-solid border-[1px]  text-red-500 px-3 py-1 rounded-md' onClick={() => rmm(item.id, item.price)}>x</button>
                                        {/* </div> */}
                                    </div>
                                </div>
                                        <hr className='w-full h-[2px]'/>
                            </div>
                        );
                    }) : null
                }
            </div>
            {/* <h2 className='w-100 d-flex justify-content-end p-2 '>Total ${parseFloat(items.total)}</h2> */}
            {items.prds.length > 0 ? 
            (<h2 className={`w-full flex justify-end p-2 ${colorr? 'text-black ': 'text-white'}`}>Total ${parseFloat(items.total).toFixed(2)}</h2>):
            (<h2 className={`w-full flex justify-end p-2 ${colorr? 'text-black ': 'text-white'}`}>Total $0</h2>)}
        </>
    );
}
export default ShopItem