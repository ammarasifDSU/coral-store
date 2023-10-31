import Image from "next/image";
import BannerImg from "@/public/banner.png";

const Banner = () => {
  return (
    <div className="outline-none rounded relative m-4">
      <div className="absolute rounded-2xl text-[12px] md:text-base right-[0px] min-w-[100px] md:min-w-[200px] lg:min-w-[600px] top-[50%] -translate-y-[50%] bg-[#dededeb3] p-6">
        <div className="max-w-[450px]">
          <h2 className="text-bannerBlue text-[12px] md:text-[24px] lg:text-[60px] font-bold leading-[1.2]">
            Carry your Funk
          </h2>

          <h3 className="text-bannerBlue text-[12px] md:text-[20px] space-y-0">
            Trendy handbags collection for your party animal
          </h3>
          <div className="bg-bannerBlue mt-2 w-30 md:w-40 text-center text-white md:text-[16px] p-2 md:p-2 md:px-4 rounded-lg inline-block cursor-pointer">
            -{">"} See more
          </div>
        </div>
      </div>

      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-right md:object-left-bottom"
        src={BannerImg}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Banner;
