"use client";

import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { ProductCategories } from "@/types";
import Link from "next/link";

interface MainNavProps {
  data: ProductCategories;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {data?.slice(0, 5)?.map((cat, indx) => (
        <Link
          key={indx}
          href={"#"}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black"
          )}
        >
          {capitalizeFirstLetter(cat)}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
