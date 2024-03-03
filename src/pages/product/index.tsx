import Button from "@/components/atoms/button";
import React from "react";
import Input from "@/components/atoms/input";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "@/components/sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import ProductCard from "@/components/atoms/productcard";
import { AiOutlineDollarCircle } from "react-icons/ai";
import TopProductCard from "@/components/atoms/topproductscard";
import { CustomerCard } from "@/components/atoms/customercard";
import { SalesCard } from "@/components/atoms/salescard";
import { OrderCard } from "@/components/atoms/ordercard";

const ProductPage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-col flex-1 bg-[#f1f7fe] font-sans">
        <div className="flex justify-between p-3 px-6">
          <div className="flex rounded-md">
            <Input
              className="border-slate-300 border rounded-md"
              type="text"
              placeholder="Search for products"
              endAdornment={<IoIosSearch className="text-slate-600" />}
            />
          </div>
          <div className="flex justify-center p-2 gap-4 text-3xl">
            <IoIosNotificationsOutline />
            <FaUserCircle />
          </div>
        </div>

        <div className="">
          <div>
            <h1 className="px-5 pt-3 font-bold text-2xl">Sales Overview</h1>
          </div>

          <div className="flex rounded-lg p-4 gap-2 justify-between">
            <ProductCard
              icon={<AiOutlineDollarCircle />}
              title="Total Sales"
              amount="$24.412.00"
              profit="+5.3%"
              description="vs last year"
            />

            <ProductCard
              icon={<AiOutlineDollarCircle />}
              title="Total Purchase"
              amount="$18.690.00"
              profit="+2.3%"
              description="vs last year"
            />

            <ProductCard
              icon={<AiOutlineDollarCircle />}
              title="Total Return"
              amount="$12.550.00"
              profit="+1.3%"
              description="vs last year"
            />

            <ProductCard
              icon={<AiOutlineDollarCircle />}
              title="Total Marketing"
              amount="$8.310.00"
              profit="+3.3%"
              description="vs last year"
            />
          </div>

          <div className="flex">
            <div className="p-4">
              <OrderCard />
            </div>
            <div className="p-4">
              <SalesCard />
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div>
              <TopProductCard />
            </div>
            <div>
              <CustomerCard
                title="Customer"
                current="Current Customer"
                newcust="New Customer"
                retargeting="Retargeted Customer"
                percent1="60%"
                percent2="20%"
                percent3="20%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
