import Location from "../assets/svg/FooterLocation.svg?react";
import Massage from "../assets/svg/FooterMessage.svg?react";
import Calling from "../assets/svg/FooterCalling.svg?react";
import Facebook from "../assets/svg/FooterFacebook.svg?react";
import Instagram from "../assets/svg/FooterInstagram.svg?react";
import Twitter from "../assets/svg/FooterTwitter.svg?react";
import Linkedin from "../assets/svg/FooterLinkedin.svg?react";
import Youtube from "../assets/svg/FooterYoutube.svg?react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="bg-[#FBFBFB] mb-35 desktop:mb-0 tablet:mb-0">
        <div className="flex flex-col desktop:flex-row py-1.5 px-3 desktop:py-6 desktop:px-6 tablet:flex-row items-center">
          <div className="max-w-59.5 w-full flex flex-col items-center desktop:items-start tablet:items-start">
            <img
              className="w-15 desktop:w-19.25"
              src="/svg/Footer-img1.svg"
              alt=""
            />
            <h2 className="mt-4.25 text-[14px] desktop:text-[17px] text-[#3D3D3D] font-bold mb-2.25">
              Garden Care
            </h2>
            <p className="max-w-51 w-full text-[#727272] text-[10px] desktop:text-[14px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="my-2.5 w-49 h-px tablet:w-px tablet:h-46.75 desktop:w-px desktop:h-46.75 bg-[#46A3581A] mr-6.75"></div>
          <div className="max-w-59.5 w-full flex flex-col items-center desktop:items-start tablet:items-start">
            <img
              className="w-17 desktop:w-20.75"
              src="/svg/Footer-img2.svg"
              alt=""
            />
            <h2 className="mt-4.25 text-[14px] desktop:text-[17px] text-[#3D3D3D] font-bold mb-2.25">
              Plant Renovation
            </h2>
            <p className="max-w-51 w-full text-[#727272] text-[10px] desktop:text-[14px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="my-2.5 w-49 h-px tablet:w-px tablet:h-46.75 desktop:w-px desktop:h-46.75 bg-[#46A3581A] mr-6.75"></div>
          <div className="max-w-59.5 w-full desktop:mb-0 tablet:mb-0 mb-10 desktop:mr-15.5 tablet:mr-6.5  flex flex-col items-center desktop:items-start tablet:items-start">
            <img
              className="w-19 desktop:w-22.5"
              src="/svg/Footer-img3.svg"
              alt=""
            />
            <h2 className="mt-4.25 text-[14px] desktop:text-[17px] text-[#3D3D3D] font-bold mb-2.25">
              Watering Graden
            </h2>
            <p className="max-w-51 w-full text-[#727272] text-[10px] desktop:text-[14px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="min-w-52.5">
            <h2 className="text-[14px] desktop:text-[17px] text-[#3D3D3D] font-bold mb-4.5">
              Would you like to join newsletters?
            </h2>
            <div
              className="flex gap-0 max-w-88.5 w-full h-10 rounded-md mb-4.25"
              style={{ boxShadow: "0px 0px 20px 0px #0000000F" }}
            >
              <input
                type="text"
                placeholder="enter your email address..."
                className="desktop:text-[14px] text-[10px] bg-[#FFFFFF] max-w-67.25 w-full h-10 pl-2.75 rounded-l-md"
              />
              <button className="max-w-21.25 w-full h-10 bg-[#46A358] text-white text-[16px] font-bold rounded-r-md cursor-pointer duration-200 hover:bg-[#57c66d]">
                Join
              </button>
            </div>
            <p className="hidden max-w-88.5 w-full text-[#727272] text-[14px] desktop:flex">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
            <p className="hidden max-w-88.5 w-full text-[#727272] text-[10px] tablet:flex">
              We usually post offers and challenges in newsletter. We’re to
              yours!
            </p>
          </div>
        </div>
        <div className="min-h-22 bg-[#46A3581A] flex flex-col items-center pl-5.75 pr-2 desktop:flex-row tablet:flex-row">
          <img
            className="desktop:mr-21.75 tablet:mr-11 mt-2"
            src="/svg/Logo.svg"
            alt=""
          />
          <div className="flex gap-2.25 items-center desktop:mr-15 tablet:mr-7 desktop:my-0 tablet:my-0 my-2">
            <Location className="w-5 h-5 text-[#46A358] hover:text-[#0f5d1f] duration-200 cursor-pointer" />
            <p className="desktop:text-[14px] text-[10px]">
              70 West Buckingham Ave. <br />
              Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex gap-2.25 items-center desktop:mr-15 tablet:mr-7 desktop:my-0 tablet:my-0 my-2">
            <Massage className="w-5 h-5 text-[#46A358] hover:text-[#0f5d1f] duration-200 cursor-pointer" />
            <p className="desktop:text-[14px] text-[10px]">
              contact@greenshop.com
            </p>
          </div>
          <div className="flex gap-1.5 items-center desktop:my-0 tablet:my-0 my-2">
            <Calling className="w-5 h-5 text-[#46A358] hover:text-[#0f5d1f] duration-200 cursor-pointer" />
            <p className="desktop:text-[14px] text-[10px]">+88 01911 717 490</p>
          </div>
        </div>
        <div className="desktop:py-7.5 desktop:px-5.75 tablet:py-4.5 tablet:px-3.5 py-2 px-3 flex flex-col desktop:flex-row tablet:flex-row items-center desktop:gap-0 tablet:gap-0 gap-10 border-b border-[#46A35833] mb-1.75">
          <ul className="flex flex-col  gap-2 desktop:mr-41.5 tablet:mr-16">
            <a href="#">
              <li className="text-[#3D3D3D] text-[16px] desktop:text-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bold hover:text-[#46A358]">
                My Account
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                My Account
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Our stores
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Contact us
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Career
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Specials
              </li>
            </a>
          </ul>
          <ul className="flex flex-col gap-2 desktop:mr-38.5 tablet:mr-14">
            <a href="#">
              <li className="text-[#3D3D3D] text-[16px] desktop:text-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bold hover:text-[#46A358]">
                Help & Guide
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Help Center
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                How to Buy
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Shipping & Delivery
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Product Policy
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                How to Return
              </li>
            </a>
          </ul>
          <ul className="flex flex-col gap-2 desktop:mr-43.25 tablet:mr-16">
            <a href="#">
              <li className="text-[#3D3D3D] text-[16px] desktop:text-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bold hover:text-[#46A358]">
                Categories
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                House Plants
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Potter Plants
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Seeds
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Small Plants
              </li>
            </a>
            <a href="#">
              <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                Accessories
              </li>
            </a>
          </ul>
          <div>
            <h2 className="text-[#3D3D3D] text-[16px] desktop:text-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bold hover:text-[#46A358] mb-5">
              Social Media
            </h2>
            <div className="flex gap-2.5 items-center mb-8.25">
              <div className="w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-[#46A358] duration-200 cursor-pointer">
                <Facebook className="w-7.5 h-7.5 text-[#46A358] hover:text-[#FFFFFF] duration-200" />
              </div>
              <div className="w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-[#46A358] duration-200 cursor-pointer">
                <Instagram className="w-7.5 h-7.5 text-[#46A358] hover:text-[#FFFFFF] duration-200" />
              </div>
              <div className="w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-[#46A358] duration-200 cursor-pointer">
                <Twitter className="w-7.5 h-7.5 text-[#46A358] hover:text-[#FFFFFF] duration-200" />
              </div>
              <div className="w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-[#46A358] duration-200 cursor-pointer">
                <Linkedin className="w-7.5 h-7.5 text-[#46A358] hover:text-[#FFFFFF] duration-200" />
              </div>
              <div className="w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-[#46A358] duration-200 cursor-pointer">
                <Youtube className="w-7.5 h-7.5 text-[#46A358] hover:text-[#FFFFFF] duration-200" />
              </div>
            </div>
            <h2 className="text-[#3D3D3D] text-[16px] desktop:text-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1 font-bold hover:text-[#46A358] mb-3.25">We accept</h2>
            <img src="/img/FooterPay.png" alt="" />
          </div>
        </div>
        <h2 className="text-[#3D3D3D] max-w-64.25 w-full text-[14px] font-normal mb-3.25 m-auto">© 2021 GreenShop. All Rights Reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
