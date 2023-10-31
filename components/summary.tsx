"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useCart, { CartStore } from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { calculateAfterDiscountPrice, grandTotalPrice } from "@/lib/utils";

const Summary = () => {
  const [cartItem, setCartItem] = useState<CartStore>();
  const searchParams = useSearchParams();
  const deliveryFee = 20;
  const cart = useCart();

  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      cartItem?.removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, cartItem?.removeAll]);

  const totalPrice = cartItem?.items.reduce((total, item) => {
    const product = item.product;
    const quantity = item.quantity;
    const discountAmount = calculateAfterDiscountPrice(product.price,product.discountPercentage)
    const itemTotal = discountAmount * quantity;
    return Number((total + itemTotal).toFixed(2));
  }, 0);

  const totalDiscountedPrice = cartItem?.items.reduce((total, item) => {
    const product = item.product;
    const quantity = item.quantity;

    const itemTotal = product.price * quantity;
    const totalWithDelivery = total + itemTotal;
    const discountAmount =
      (totalWithDelivery * item.product.discountPercentage) / 100;

    return Number(discountAmount.toFixed(2));
  }, 0);

  return (
    <div className="mt-14 rounded-lg px-4 lg:col-span-5 lg:mt-0 ">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-2 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <div className=" font-medium text-gray-500">Sub Total</div>
          <div className="font-semibold text-black"> ${totalPrice}</div>
        </div>
        <div className="flex items-center justify-between ">
          <div className=" font-medium text-gray-500">Discount</div>
          <div className="font-semibold text-black">
            ${totalDiscountedPrice}
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <div className=" font-medium text-gray-500">Delivery Fee</div>
          <div className="font-semibold text-black">${cartItem?.items.length && cartItem?.items.length>0?deliveryFee:0}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className=" font-semibold text-black">Grand total</div>
          <div className="font-semibold text-black"> ${cartItem?.items.length && cartItem?.items.length>0?grandTotalPrice(totalPrice?totalPrice:0,deliveryFee):0}</div>
        </div>
      </div>
      <div className="flex mt-6 justify-between">
        <button
          disabled={cartItem?.items.length === 0}
          className="w-28 md:w-48 text-center rounded-lg p-2 bg-bannerBlue text-white"
        >
          Place Order
        </button>
        <button
          disabled={cartItem?.items.length === 0}
          className="w-32 md:w-48 text-center rounded-lg p-2 border border-bannerBlue"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Summary;
