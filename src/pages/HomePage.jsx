import Button from "../components/Button";

const HomePage = () => {
  return (
    <section>
      <div className="container tablet:bg-[#F5F5F580] desktop:bg-[#F5F5F580]">
        <div className="flex max-w-91.5 m-auto desktop:max-w-desktop justify-between tablet:max-w-180.5 bg-[#46a3593a] desktop:bg-[#F5F5F580] tablet:bg-[#F5F5F580] desktop:pl-10 tablet:pl-8 pl-5.75 desktop:rounded-none tablet:rounded-none rounded-[30px] pb-3">
          <div className="desktop:pt-17 tablet:pt-11.5 pt-6">
            <p className="desktop:text-[14px] text-[11px] text-[#3D3D3D] mb-0 desktop:mb-1.75 font-medium">
              WELCOME TO GREENSHOP
            </p>
            <h1 className="desktop:text-[70px] font-black tablet:text-[40px] text-[24px] text-[#3D3D3D] leading-[100%] mb-0.75 desktop:mb-1.25">
              LET’S MAKE A <br />
              BETTER <span className="text-[#46A358]">PLANET</span>
            </h1>
            <p className="max-w-139.25 w-full hidden desktop:flex tablet:flex desktop:mb-11 tablet:mb-5 text-[#727272] text-[12px] desktop:text-[14px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <p className="max-w-139.25 w-full desktop:hidden tablet:hidden mb-2.5 text-[#727272] text-[12px]">
              We are an online plant shop offering a wide range{" "}
            </p>
            <button className="hidden desktop:flex tablet:flex w-35 h-10 rounded-md bg-[#46A358] text-white font-bold cursor-pointer duration-200 hover:bg-[#4caf60]">
              SHOP NOW
            </button>
            <div className="flex gap-0.5">
              <a href="#"><p className="text-[14px] text-[#46A358] font-bold duration-200 hover:text-[#227633]">SHOP NOW</p></a>
              <img src="/svg/right.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="/img/HeroImg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
