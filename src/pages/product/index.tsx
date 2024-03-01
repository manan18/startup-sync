import Button from "@/components/atoms/button";
import React from "react";
import Input from "@/components/atoms/input";

const ProductPage = () => {
  return (
    <div>
      <div>
        <Input className="" type="text" placeholder="Search for products" endAdornment={}/>
          {/* <Button className="bg-blue-500 text-white">Search</Button> */}
      </div>

      <div>
        <h1>Sales Overview</h1>
      </div>
    </div>
  );
};

export default ProductPage;
