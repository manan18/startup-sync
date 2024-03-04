import React from "react";

const TTable = () => {
  return (
    <div className="p-3">
      <table className="table-fixed w-full border-2 ">
        <thead>
          <tr>
            <th className="text-left text-gray-400 text-base px-4 py-4">
              Date
            </th>
            <th className="text-left text-gray-400 text-base px-4 py-4">
              Payee
            </th>
            <th className="text-left text-gray-400 text-base px-4 py-4">
              Category
            </th>
            <th className="text-left text-gray-400 text-base px-4 py-4">
              Amount
            </th>
            <th className="text-left text-gray-400 text-base px-4 py-4">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-300">
            <td className="px-4 py-4 border-y-2">Feb 15, 2023</td>
            <td className="px-4 py-4 border-y-2">Amy Jane Cullen</td>
            <td className="px-4 py-4 border-y-2">Meals & Entertainment</td>
            <td className="px-4 py-4 border-y-2">$200.00</td>
            <td className="px-4 py-4 border-y-2">
              <div className="bg-cyan-200 inline-block w-auto py-1 px-2 rounded-lg text-xs text-cyan-600 font-bold">
                Unpaid
              </div>
            </td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="px-4 py-4 border-y-2">Feb 10, 2023</td>
            <td className="px-4 py-4 border-y-2">Amy Jane Cullen</td>
            <td className="px-4 py-4 border-y-2">Meals & Entertainment</td>
            <td className="px-4 py-4 border-y-2">$120.00</td>
            <td className="px-4 py-4 border-y-2">
              <div className="bg-green-200 inline-block w-auto py-1 px-2 rounded-lg text-xs text-green-600 font-bold">
                Paid
              </div>
            </td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="px-4 py-4 border-y-2">Feb 02, 2023</td>
            <td className="px-4 py-4 border-y-2">WeWork</td>
            <td className="px-4 py-4 border-y-2">Rent or Lease</td>
            <td className="px-4 py-4 border-y-2">$750.00</td>
            <td className="px-4 py-4 border-y-2">
              <div className="bg-green-200 inline-block w-auto py-1 px-2 rounded-lg text-xs text-green-600 font-bold">
                Paid
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TTable;
