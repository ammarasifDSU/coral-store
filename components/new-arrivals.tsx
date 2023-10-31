"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ui/product-card";
import getProducts from "@/actions/get-products";
import { ProductResponse } from "@/types";

const NewArrivals = () => {
  const [productData, setProductData] = useState<
    ProductResponse[] | undefined
  >();

  const filterObj = {
    url: "/products/category/womens-bags",
    limit: 4,
  };

  useEffect(() => {
    const getProductData = async () => {
      let product = await getProducts(filterObj);
      setProductData(product);
    };
    getProductData();
  }, []);

  return (
    <div>
      <div className="m-4 pt-16 text-[12px] md:text-base">
        <div className="flex justify-between">
          <h2 className="lg:text-[34px] font-semibold">New Arrivals</h2>
          <h3 className="mt-2 lg:text-[16px] font-semibold text-bannerBlue cursor-pointer">
            View All <span className="text-black">{">"}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 mt-2 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-y-10">
          {productData?.products?.map((item, index) => (
            <ProductCard product={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
