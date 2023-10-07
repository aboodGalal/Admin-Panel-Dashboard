import React from 'react'
import { useSelector } from 'react-redux'

function Table() {
    const colorr = useSelector((state) => state.colorBg.boolean)
  return (
    <div className={`flex flex-col shadow-md p-3 ${colorr?'':'shadow-sh'}`}>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-tx">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Tracking ID</th>
                  <th scope="col" className="px-6 py-4">Product</th>
                  <th scope="col" className="px-6 py-4">Customer</th>
                  <th scope="col" className="px-6 py-4">Date</th>
                  <th scope="col" className="px-6 py-4">Amount</th>
                  <th scope="col" className="px-6 py-4">Payment Method</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1143155</td>
                  <td className="whitespace-nowrap px-6 py-4">Acer Nitro 5</td>
                  <td className="whitespace-nowrap px-6 py-4">John Smith</td>
                  <td className="whitespace-nowrap px-6 py-4">1 March</td>
                  <td className="whitespace-nowrap px-6 py-4">785</td>
                  <td className="whitespace-nowrap px-6 py-4">Cash on Delivery</td>
                  <td className="whitespace-nowrap px-6 py-4"><p className={`bg-[#D8ECD8] text-center text-[#1b802f] rounded-lg py-1 px-1`}>Approved</p></td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2235235</td>
                  <td className="whitespace-nowrap px-6 py-4">Playstation 5</td>
                  <td className="whitespace-nowrap px-6 py-4">Michael Doe</td>
                  <td className="whitespace-nowrap px-6 py-4">1 March</td>
                  <td className="whitespace-nowrap px-6 py-4">900</td>
                  <td className="whitespace-nowrap px-6 py-4">Online Payment</td>
                  <td className="whitespace-nowrap px-6 py-4"><p className={`bg-[#f8f8e5] text-center text-[#e3af20] rounded-lg py-1 px-1`}>Pending</p></td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2342353</td>
                  <td className="whitespace-nowrap px-6 py-4">Redragon S101</td>
                  <td className="whitespace-nowrap px-6 py-4">John Smith</td>
                  <td className="whitespace-nowrap px-6 py-4">1 March</td>
                  <td className="whitespace-nowrap px-6 py-4">35</td>
                  <td className="whitespace-nowrap px-6 py-4">Cash on Delivery</td>
                  <td className="whitespace-nowrap px-6 py-4"><p className={`bg-[#f8f8e5] text-center text-[#e3af20] rounded-lg py-1 px-1`}>Pending</p></td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2357741</td>
                  <td className="whitespace-nowrap px-6 py-4">Razer Blade 15</td>
                  <td className="whitespace-nowrap px-6 py-4">Jane Smith</td>
                  <td className="whitespace-nowrap px-6 py-4">1 March</td>
                  <td className="whitespace-nowrap px-6 py-4">920</td>
                  <td className="whitespace-nowrap px-6 py-4">Online</td>
                  <td className="whitespace-nowrap px-6 py-4"><p className={`bg-[#D8ECD8] text-center text-[#1b802f] rounded-lg py-1 px-1`}>Approved</p></td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2342355</td>
                  <td className="whitespace-nowrap px-6 py-4">ASUS ROG Strix</td>
                  <td className="whitespace-nowrap px-6 py-4">Harold Carol</td>
                  <td className="whitespace-nowrap px-6 py-4">1 March</td>
                  <td className="whitespace-nowrap px-6 py-4">2000</td>
                  <td className="whitespace-nowrap px-6 py-4">Online</td>
                  <td className="whitespace-nowrap px-6 py-4"><p className={`bg-[#f8f8e5] text-center text-[#e3af20] rounded-lg py-1 px-1`}>Pending</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table