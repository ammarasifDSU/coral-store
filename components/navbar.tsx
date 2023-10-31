"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { User2, Heart, Menu, ShoppingBag, Search } from "lucide-react";
import { NavLinks } from "@/lib/constants";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setCartItemsCount(cart.items.length);
  }, [cart]);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav>
        <div className="max-w-7xl mx-auto ">
          <div className="flex mx-4 justify-between">
            <div className="flex items-center gap-16 my-6">
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <Image src={logo} alt="logo" />
                </a>
              </div>
              <div className="hidden lg:flex gap-8 ">
                {NavLinks?.map((links, indx) => (
                  <a key={indx} href="#" className="">
                    {links}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-6 ">
              <div className="hidden lg:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <div className="relative p-2">
                    <div className="absolute left-2 top-1/2 px-1 transform -translate-y-1/2 text-gray-400">
                      <Search />
                    </div>
                    <input
                      type="text"
                      className="pl-10 pr-2 py-2 text-sm border bg-sescondaryGray border-gray-300 focus:outline-none"
                      placeholder="Search products or brands..."
                    />
                  </div>
                  <Heart className="h-6 w-6" />
                  <User2 className="h-6 w-6" />
                  <button
                    onClick={() => router.push("/cart")}
                    className="flex items-center rounded-full  py-2"
                  >
                    <ShoppingBag className="h-6 w-6" />
                    <span className="text-sm font-medium text-black mt-1">
                      {cartItemsCount}
                    </span>
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => router.push("/cart")}
                  className="flex items-center rounded-full  py-2 mr-4"
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span className="text-sm font-medium text-black mt-1">
                    {cartItemsCount}
                  </span>
                </button>
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Menu className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed w-full  bg-sescondaryGray overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 pt-4">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              {NavLinks?.map((links, indx) => (
                <a href="#" key={indx} className="">
                  {links}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
