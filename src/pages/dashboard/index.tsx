import React from "react";
import Sidebar from "@/components/sidebar";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "@/components/dropdown";
import Link from "next/link";
import { RiProfileLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import BarChart from "@/components/charts/bar";
import DoughnutChart from "@/components/charts/doughnut";
import TransactionCard from "@/components/atoms/transactionCard";
import ria from '@/assets/img/ria2.jpg'
import Transactions from "@/data/transaction/transactionData";

const Dashboard = () => {
  const menubar = [{
    title: "Profile",
    icon: <RiProfileLine className="text-xl" />,
  }, {
    title: "Settings",
    icon: <IoSettingsOutline className="text-xl" />,
  }, {
    title: "Logout",
    icon: <MdLogout className="text-xl" />,
  }]
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col p-4 bg-[#f4f7fe] overflow-y-scroll">
        <div className="flex justify-between p-2">
          <h1 className="tracking-wide font-semibold text-2xl">Welcome Back, Ria!</h1>
          <div className="flex gap-3 items-center">
            <BsBell className="text-2xl" />
            <Dropdown activeCondition={false}>
              {(handleClick, open) => (
                <div className="relative">
                  <FaUserCircle className="text-2xl cursor-pointer" onClick={handleClick} />
                  {open && (
                    <div className="absolute top-8 right-0 min-w-[200px] bg-white p-3 rounded-lg py-2 text-gray-500 shadow-md">
                      <ul>
                        {menubar.map((item, index) => {
                          return (
                            <li key={index} className="py-2 hover:bg-gray-100 hover:rounded-md px-2">
                              <Link className="flex items-center gap-1" href="#">
                                {item.icon}
                                <span className="ml-2">{item.title}</span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </Dropdown>
          </div>
        </div>
        <div className="grid-cols-[auto,auto,auto] grid-rows-[225px,auto,225px,auto] h-full grid gap-2 p-2">
          <div className="col-span-2 row-span-2 bg-white p-6 rounded-md shadow-md flex flex-col">
            <h1 className="text-2xl font-semibold">Sales Overview</h1>
            <BarChart />
          </div>
          <div className="row-span-2 bg-white rounded-md shadow-md flex flex-col">
            <h1 className="text-2xl font-semibold p-6">Financial Overview</h1>
            <DoughnutChart />
          </div>
          <div className="row-span-2 bg-white rounded-md shadow-md px-2">
            <h1 className="text-2xl font-semibold p-4">Recent Transactions</h1>
            {Transactions.map((transaction, index) => (
              <TransactionCard key={index} image={transaction.image} name={transaction.name} date={transaction.date} amount={transaction.amount} />
            ))}
          </div>
          <div className="col-span-2 bg-red-300"></div>
          <div className="col-span-2 bg-red-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
