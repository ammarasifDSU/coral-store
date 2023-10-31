import { Facebook, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { footerAbout, footerCategory, footerPolicy } from "@/lib/constants";

const footer = () => {
  return (
    <div className="w-full text-white bg-[#1B4B66] py-20 text-[12px] md:text-base">
      <div className="max-w-container mx-auto grid grid-cols-4 md:grid-cols-6  xl:grid-cols-6 px-6 md:px-12 gap-24 md:gap-10">
        <div>
          <h2 className="">Shop by Category</h2>
          <ul className="text-lightGray mt-2 flex flex-col gap-2">
            {footerCategory.map((link, indx) => (
              <li
                key={indx}
                className="font-titleFont  text-lightText hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>About</h2>
          <ul className="flex flex-col mt-2 text-lightGray gap-2">
            {footerAbout.map((link, indx) => (
              <li
                key={indx}
                className="font-titleFont  text-lightText hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Policy</h2>
          <ul className="flex flex-col mt-2 text-lightGray gap-2">
            {footerPolicy.map((link, indx) => (
              <li
                key={indx}
                className="font-titleFont  text-lightText hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 md:px-4 flex ml-auto">
          <div>
            <div className="flex gap-4 justify-between md:justify-start">
              <div>
                <Facebook />
              </div>
              <div>
                <Instagram />
              </div>
              <div>
                <Twitter />
              </div>
              <div>
                <Youtube />
              </div>
            </div>

            <div>
              <div className="flex flex-col mt-4 ml-1 justify-end">
                <div className="flex">
                  <MapPin size={18} />
                  <span className="ml-2">United States</span>
                </div>
                <p className=" text-gray-300 mt-2 ml-1">
                  &copy; 2021 | Cora Leviene All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
