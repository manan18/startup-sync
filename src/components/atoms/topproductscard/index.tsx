import React from "react";
import { BsThreeDots } from "react-icons/bs";

const TopProductCard = () => {
  return (
    <div className="flex-col flex-1 rounded-lg bg-white p-2 border-1 shadow-md">
      <div className="flex justify-between items-center p-2">
        <div className="">
          <h1 className="font-semibold text-2xl">Top Products</h1>
        </div>
        <div className="hover:cursor-pointer">
          <BsThreeDots />
        </div>
      </div>

      <table className="table-auto text- w-full text-center">
        <thead className="text-slate-500">
          <tr>
            <th className="px-4 py-2 font-medium">No.</th>
            <th className="px-4 py-2 font-medium">Product</th>
            <th className="px-4 py-2 font-medium">Revenue</th>
            <th className="px-4 py-2 font-medium">Stock</th>
            <th className="px-4 py-2 font-medium">Status</th>
            <th className="px-4 py-2 font-medium">Interest</th>
          </tr>
        </thead>

        <tbody className=" text-slate-600 antialiased">
          <tr>
            <td className="px-4 py-2">1</td>
            <td className="px-6 py-2">Dell XPS 15</td>
            <td className="px-4 py-2">$ 2500</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">30%</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2</td>
            <td className="px-6 py-2">Macbook Pro</td>
            <td className="px-4 py-2">$ 2000</td>
            <td className="px-4 py-2">30</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">20%</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3</td>
            <td className="px-6 py-2">Lenovo Thinkpad</td>
            <td className="px-4 py-2">$ 1500</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">10%</td>
          </tr>
          <tr>
            <td className="px-4 py-2">4</td>
            <td className="px-6 py-2">HP Elitebook</td>
            <td className="px-4 py-2">$ 1000</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">Available</td>
            <td className="px-4 py-2">5%</td>
          </tr>
          {/* <tr>
                <td className="px-4 py-2">5</td>
                <td className="px-6 py-2">Asus Zenbook</td>
                <td className="px-4 py-2">$ 500</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">Available</td>
                <td className="px-4 py-2">2%</td>
            </tr> */}
        </tbody>

      </table>
    </div>
  );
};

export default TopProductCard;




