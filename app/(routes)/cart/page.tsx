"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import useCart, { CartStore } from "@/hooks/use-cart";
import Summary from "@/components/summary";
import CartItem from "@/components/cart-item";
import Breadcrumbs, { BreadcrumbItem } from "@/components/breadcrumbs";

export const revalidate = 0;

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartStore>();
  const cart = useCart();

  const crumbs: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "My Cart", link: "/cart" },
  ];

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    <div className="bg-white text-[12px] md:text-base">
      <Container>
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumbs crumbs={crumbs} />
          </div>
          <div className="mt-4">
            <h1 className="text-[34px] font-semibold text-bannerBlue ">
              My Cart
            </h1>
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className=" lg:col-span-7">
              <div className=" w-full h-7 text-type-low-emphasis">
                <div className="grid grid-cols-6 gap-4 ">
                  <div className=" col-span-3 leading-[20px] pb-2 text-grayShade font-medium">
                    Product Name
                  </div>
                  <div className=" col-span-1 leading-[20px] pb-2 text-grayShade font-medium">
                    Price
                  </div>
                  <div className="col-span-1 leading-[20px] pb-2 text-grayShade font-medium">
                    Qty
                  </div>
                  <div className="col-span-1 leading-[20px] pb-2 text-grayShade font-medium">
                    Subtotal
                  </div>
                </div>

                <div className=" box-border lg:w-[711px] h-px border-t-[1px] border-solid border-seperator" />
              </div>
              {cartItems?.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cartItems?.items.map((item) => (
                  <CartItem
                    key={item?.product?.id}
                    data={item.product}
                    quantity={item.quantity}
                  />
                ))}
              </ul>

              <div className="mt-4">
                <div className="border-b">
                  <p className="font-semibold pb-2">Apply Coupon Code</p>
                </div>

                <div className="w-1/3 md:w-2/3 mt-4 flex">
                  <div className="relative">
                    <input
                      type="text"
                      className=" bg-sescondaryGray px-4 py-2 focus:outline-none"
                      placeholder="Apply Coupon Code"
                    />
                    <button className="absolute bg-sescondaryGray text-bannerBlue p-2 ">
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
