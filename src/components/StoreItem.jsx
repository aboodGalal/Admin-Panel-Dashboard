import { useSelector } from "react-redux";
import CartItem from "./CartItem";

// import CartItem from './CartItem'
function StoreItem(props) {
  const colorr = useSelector((state) => state.colorBg.boolean);

    return (
        <>
            <ul className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4'>
              {props.inf.map((user) => (
                <li key={user.id} className={`bg-white rounded-lg  gap-3
                    p-3 flex flex-col items-center justify-start w-[250px] h-[490px]
                    ${colorr?'':'bg-d rk shadow-sh'} shadow-lg`}>
                    <div className='h-[220px] w-full'><img src={user.image} alt={user.title} className='w-full h-full mb-1' /></div>
                    <h5 className="text-tx flex flex-col items-center justify-between text-center h-[100px]">
                        <p>{user.title}</p>
                        <p>${user.price}</p>
                    </h5>
                    <CartItem user={user} />

                </li>
              ))}
            </ul>
        </>
    )
}
export default StoreItem