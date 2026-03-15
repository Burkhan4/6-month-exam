import { useState } from "react";
import Icon from "../assets/svg/NavSearchBtn.svg?react";
import Korsine from "../assets/svg/KorsineNav.svg?react";

const Navbar = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <section>
      <div className="container">
        <div className="desktop:flex tablet:flex hidden justify-between pt-6.25 items-start border-b-[0.1px] border-b-[#46A35880]">
          <img src="/svg/Logo.svg" alt="logo" />
          <ul className="desktop:flex max-w-87.75 w-full justify-between items-start hidden">
            <a href="#">
              <li className="text-[#000000] text-[16px] cursor-pointer pb-6.25 transition-all duration-300 hover:-translate-y-0.2 border-b-[3px] border-b-[#46A358] hover:text-[#46A358]">
                Home
              </li>
            </a>
            <a href="#">
              <li className="text-[#3d3d3dc9] text-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-0.2 hover:text-[#46A358]">
                Shop
              </li>
            </a>
            <a href="#">
              <li className="text-[#3d3d3dc9] text-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-0.2 hover:text-[#46A358]">
                Plant Care
              </li>
            </a>
            <a href="#">
              <li className="text-[#3d3d3dc9] text-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-0.2 hover:text-[#46A358]">
                Blogs
              </li>
            </a>
          </ul>
          <div className="flex max-w-52.5 w-full justify-between">
            <Icon className="w-5 h-5 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
            <Korsine className="w-7.25 h-6 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
            <button className="bg-[#46A358] text-white w-25 h-8.75 rounded-md cursor-pointer duration-200 hover:bg-[#4caf60] flex justify-center items-center gap-1">
              <img src="/svg/navLogout.svg" alt="" />
              Login
            </button>
          </div>
        </div>
        <div className="tablet:hidden desktop:hidden pt-10.25 max-w-92 w-full m-auto mb-4.25">
          <div className="flex items-center gap-0">
            <button className="w-10.25 h-11.25 rounded-l-[10px] bg-[#F8F8F8] pl-3"><Icon className="w-5 h-5 text-[#A5A5A5] hover:text-[#46A358] duration-200 cursor-pointer" /></button>
            <input
              type="text"
              className="max-w-79.5 w-full h-11.25 rounded-r-[10px] bg-[#F8F8F8] text-[16px]"
              placeholder="Find your plants"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
