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

const ProductPage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-col flex-1">
        <div className="flex justify-between">
          <Input
            className=""
            type="text"
            placeholder="Search for products"
            endAdornment={<IoIosSearch />}
          />
          <div className="flex ">
            <IoIosNotificationsOutline />
            <FaUserCircle />
          </div>
        </div>

        <div className="bg-[#f4f7fe]">
          <div>
            <h1 className="font-sans px-5 pt-3 font-bold">Sales Overview</h1>
          </div>

          <div className="flex rounded-lg p-4 gap-2 justify-between px-4">
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

          {/* <div>
          order and sales overview
        </div> */}

          <div className="flex gap-4 p-4">
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
