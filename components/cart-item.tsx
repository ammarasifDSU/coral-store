import Image from "next/image";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Link from "next/link";
import { calculateAfterDiscountPrice } from "@/lib/utils";

interface CartItemProps {
  data: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ data, quantity }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const totalPrice = (price: number, quantity: number) => {
    return Number((price * quantity).toFixed(2));
  };

  const discountedPrice = calculateAfterDiscountPrice(data?.price,data?.discountPercentage)

  return (
    <li className="flex py-6 ">
      <div className="w-full text-type-low-emphasis">
        <div className="grid grid-cols-6 gap-4 ">
          <div className="col-span-3 flex">
            <div className="relative h-28 w-28 rounded-md overflow-hidden sm:h-20 sm:w-20">
              <Image
                fill
                sizes="100vw"
                priority
                src={data?.images[0]}
                alt=""
                className="object-cover object-center "
              />
            </div>
            <div className="ml-3">
              <p className="  text-black">{data?.title}</p>
              <p className="  text-grayShade mt-1">{data?.brand}</p>
              <p className="text-grayShade mt-1">Qty - {quantity}</p>
            </div>
          </div>
          <div className="col-span-1">${discountedPrice}</div>
          <div className="col-span-1">{quantity}</div>
          <div className="col-span-1">{totalPrice(discountedPrice, quantity)}</div>
        </div>
        <div className="flex justify-end">
          <div>
            <Link
              className="underline text-bannerBlue mr-4 font-semibold"
              href={"#"}
            >
              Move to Wishlist
            </Link>
          </div>
          <div>
            <Link
              className="underline text-red-700 font-semibold"
              onClick={onRemove}
              href={"#"}
            >
              Remove
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
