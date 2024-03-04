import React from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import employees from "@/data/employees/employees";
import { FaChevronLeft } from "react-icons/fa";

export function EmployeeTable({
  data,
  start,
  end,
}: {
  data: any[];
  start: number;
  end: number;
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className=" rounded-lg overflow-hidden dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200  flex-col">
                <thead className="bg-gray-200 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Employee Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      User Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      E-mail Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Mobile Number
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {data.slice(start, end).map((employee, index) => (
                    <tr key={index}>
                      <td className="py-2 whitespace-nowrap flex justify-center">
                        <img
                          src={employee.img}
                          alt=""
                          className="h-16 rounded-full "
                        />
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text  flex-col ">
                        {employee.name}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex-col ">
                        {employee.type}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex-col ">
                        {employee.department}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex-col ">
                        {employee.title}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex-col ">
                        {employee.mail}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex-col ">
                        {employee.mobile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
