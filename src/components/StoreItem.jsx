import { useSelector } from "react-redux";
import CartItem from "./CartItem";

// import CartItem from './CartItem'
function StoreItem(props) {
  const colorr = useSelector((state) => state.colorBg.boolean);
  const prd = props.inf

    return (
        <>
            <ul className='grid grid-cols-1 grid-rows-flow md:grid-cols-2 lg:grid-cols-3 
              gap-y-10 gap-x-5 justify-center items-center '>
              {prd.map((pr) => (
                <li key={pr.id} className={`rounded-lg gap- 3
                    p-3 flex flex-col items-center justify-between max-w-[320px] h-[440px]
                    ${colorr?'bg-white':'bg-drk text-tx shadow-sh'} shadow-lg`}>
                    <div className='h-[220px] w-full'>
                      <img src={pr.image} alt={pr.name} className='w-full h-full mb-1'/>
                      </div>
                    <h5 className="text-tx flex flex-col items-center justify-center text-center gap-4 
                    my-1 text-[17px] md:text-[20px]">
                        <p>{pr.name}</p>
                        <p>${pr.price}</p>
                    </h5>
                    <CartItem user={pr} />

                </li>
              ))}
            </ul>
        </>
    )
}
export default StoreItem