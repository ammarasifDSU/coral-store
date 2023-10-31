"use client";

import { calculateAfterDiscountPrice } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/types";
import { useState } from "react";
import useCart from "@/hooks/use-cart";
import RatingComponent from "@/components/rating/rating";
import BlankStarIcon from "@/public/blankStarIcon.svg"
import FilledStarIcon from "@/public/filledStarIcon.svg"
import Image from "next/image";

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const cart = useCart();

  const onAddToCart = () => {
    console.log(quantity);
    const item = {
      product,
      quantity,
    };
    cart.addItem(item);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="text-[12px] md:text-base">
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className=" text-4xl font-medium mb-1">{product.title}</h1>
          <p className="mb-4">{product.brand}</p>
          <RatingComponent
            readonly
            initialRating={product.rating}
            emptySymbol={<Image src={BlankStarIcon} alt="star-icon"/>}
            fullSymbol={<Image src={FilledStarIcon} alt="star-icon"/>}
          />

          <div className="text-4xl font-bold mt-4">
            ${calculateAfterDiscountPrice(
                product.price,
                product.discountPercentage
              )}{" "}
            <del className="text-lightGray">
              ${product.price}
            </del>{" "}
            <span className="text-red-500 text-xl">
              {product.discountPercentage}%off
            </span>
          </div>
        </div>

        <div className="min-[300px]:block md:flex">
          <div className="min-[300px]:w-2/3 lg:w-1/2">
            <h3 className="font-semibold text-lg">Delivery Details</h3>
            <p>Check estimated delivery date/pickup option.</p>
          </div>
          <div className="min-[300px]:w-1/3 lg:w-2/3 mt-4 flex ml-auto">
            <div className="relative">
              <input
                type="text"
                className=" bg-sescondaryGray min-[300]:px-1 md:px-4 py-2 focus:outline-none"
                placeholder="Apply Valid Pincode"
              />
              <button className="absolute bg-sescondaryGray text-bannerBlue p-2 ">
                Check
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span>Quantity: </span>
          <div>
            <div className="flex items-center space-x-2 border-2 border-grayShade ml-4">
              <button
                id="decrement"
                className="px-2 py-1 text-gray-600"
                onClick={decrement}
              >
                -
              </button>
              <input
                id="quantity"
                type="text"
                className="w-4 text-center"
                value={quantity}
                readOnly
              />
              <button
                id="increment"
                className="px-2 py-1 text-gray-600"
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="border rounded-lg mt-4 md:mt-10 border-bannerBlue p-2 md:p-4 w-70 md:w-96">
          <div className="flex">
            <div className="w-2/3 ">
              <h2 className=" ">Get upto 30% off on order value above $100</h2>
              <h3 className="text-bannerBlue cursor-pointer  ">
                Terms & Conditions
              </h3>
            </div>
            <div className="bg-sescondaryGray   m-auto text-center text-black font-semibold p-2 md:p-3">
              Use Code <div>ORDER 100</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div
            className="flex rounded-lg bg-bannerBlue w-36 md:w-64 justify-center text-white cursor-pointer p-2"
            onClick={onAddToCart}
          >
            <ShoppingBag size={20} /> <span className="ml-2">Add to bag</span>
          </div>
          <div>
            <div className="flex rounded-lg border border-bannerBlue w-36 md:w-64  justify-center cursor-pointer text-bannerBlue p-2">
              <Heart size={20} /> <span className="ml-2">Add to Wishlist</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
