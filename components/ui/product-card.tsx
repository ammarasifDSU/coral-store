"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  return (
    <div>
      <div className="px-4 max-w-[400px]">
        <div>
          <Image
            className="w-56 h-56 object-cover rounded-xl cursor-pointer"
            src={product.thumbnail}
            onClick={handleClick}
            width={250}
            height={250}
            alt={product.title}
          />
        </div>

        <div className="space-y-2 py-2">
          <div className="flex justify-between">
            <h2
              className="text-accent font-medium uppercase cursor-pointer"
              onClick={handleClick}
            >
              {product.title}
            </h2>
            <Heart className="cursor-pointer mt-1" size={16} />
          </div>
          <p className="text-gray-500 max-w-[150px]">{product.brand}</p>

          <div className="font-bold flex gap-4">${product.price}</div>
        </div>
      </div>
    </div>
  );
}
