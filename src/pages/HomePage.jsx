import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../assets/svg/heart.svg?react";
import Shopping from "../assets/svg/shopping.svg?react";
import Icon from "../assets/svg/NavSearchBtn.svg?react";
import productService from "../service/product.service";
import Mob1 from "../assets/svg/MobBotoom1.svg?react";
import Mob2 from "../assets/svg/MobBotoom2.svg?react";
import Mob3 from "../assets/svg/MobBotoom3.svg?react";
import Mob4 from "../assets/svg/MobBotoom4.svg?react";

const PRODUCTS_PER_PAGE = 9;

const HomePage = () => {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const products = await productService.getProduct();
        setAllProducts(products || []);
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xato:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

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
            <button className="hidden pt-2 pl-6 desktop:flex tablet:flex w-35 h-10 rounded-md bg-[#46A358] text-white font-bold cursor-pointer duration-200 hover:bg-[#4caf60]">
              SHOP NOW
            </button>
            <div className="flex gap-0.5 desktop:hidden tablet:hidden">
              <a href="#">
                <p className="text-[14px] text-[#46A358] font-bold duration-200 hover:text-[#227633]">
                  SHOP NOW
                </p>
              </a>
              <img src="/svg/right.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="/img/HeroImg.png" alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex pt-11.5 justify-between tablet:gap-4 desktop:gap-12.5 mb-23">
            <div className="hidden desktop:flex flex-col tablet:flex">
              <div className="max-w-77.5 w-full bg-[#FBFBFB] py-3.5 px-5">
                <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-3">
                  Categories
                </h2>
                <ul className="flex flex-col gap-4 pl-2.5 mb-9">
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      House Plants <span className="ml-34.25">(33)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Potter Plants <span className="ml-34.75">(12)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Seeds <span className="ml-45">(65)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Small Plants <span className="ml-35.5">(39)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Big Plants <span className="ml-38.5">(23)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Succulents <span className="ml-37">(17)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Trerrariums <span className="ml-35.75">(19)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Gardening <span className="ml-37">(13)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Accessories <span className="ml-35.5">(18)</span>
                    </li>
                  </a>
                </ul>
                <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-5">
                  Price Range
                </h2>
                <img className="pl-2.5 mb-3.5" src="/svg/Setting.svg" alt="" />
                <p className="text-[15px] pl-3 mb-4">
                  Price:{" "}
                  <span className="font-bold text-[#46A358]">$39 - $1230</span>
                </p>
                <button className="w-22.5 ml-2.5 mb-11.5 h-8.75 bg-[#46A358] rounded-md font-bold text-white cursor-pointer duration-200 hover:bg-[#4caf60]">
                  Filter
                </button>
                <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-1.75">
                  Size
                </h2>
                <ul className="flex flex-col gap-4 pl-2.5 mb-4.75">
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Small <span className="ml-45">(119)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Medium <span className="ml-41">(86)</span>
                    </li>
                  </a>
                  <a href="#">
                    <li className="text-[#3D3D3D] text-[12px] desktop:text-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                      Large <span className="ml-45">(78)</span>
                    </li>
                  </a>
                </ul>
              </div>
              <img src="/img/SuperSaleBanner.png" alt="" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between desktop:w-209.5 tablet:w-100 mb-7.75">
                <div className="flex gap-9">
                  <h2 className="text-[13px] desktop:text-[15px] text-[#46A358] font-bold border-b-2 border-[#46A358]">
                    All Plants
                  </h2>
                  <h2 className="text-[13px] desktop:text-[15px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                    New Arrivals
                  </h2>
                  <h2 className="text-[13px] desktop:text-[15px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:text-[#46A358]">
                    Sale
                  </h2>
                </div>
                <h2 className="text-[13px] desktop:text-[15px] hidden desktop:flex tablet:flex">
                  Short by: Default sorting
                </h2>
              </div>

              {loading ? (
                <div className="text-center py-20 text-[#46A358] font-medium">
                  Yuklanmoqda...
                </div>
              ) : allProducts.length === 0 ? (
                <div className="text-center py-20 text-gray-600">
                  Hozircha mahsulot yo'q 😔
                </div>
              ) : (
                <>
                  <div className="grid desktop:grid-cols-3 grid-cols-2 mobile:grid-cols-1 tablet:gap-2 desktop:gap-17.5">
                    {currentProducts.map((product) => (
                      <div
                        key={product._id}
                        onClick={() => navigate(`/products/${product._id}`)}
                        className="group mb-5 cursor-pointer"
                      >
                        <div className="max-w-[260px] w-full desktop:h-[300px] tablet:h-[280px] h-[240px] desktop:rounded-none tablet:rounded-none rounded-[20px] desktop:pt-7.75 tablet:pt-3.5 px-1 bg-[#FBFBFB] relative mb-3 duration-200 cursor-pointer border border-transparent hover:border-t-[#46A358] hover:shadow-md transition-all">
                          <img
                            className="desktop:w-[250px] desktop:h-[250px] tablet:w-[150px] tablet:h-[150px] w-[168px] h-[168px] object-contain mx-auto"
                            src={
                              product.pictures?.[0] || "/img/placeholder.png"
                            }
                            alt={product.name}
                          />
                          <div className="absolute top-3 right-3">
                            <Heart className="w-5 h-5 text-[#46A358] hover:text-[#137727] duration-200 cursor-pointer" />
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex gap-6 left-1/2 -translate-x-1/2 bottom-4">
                            <Shopping className="w-5 h-5 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
                            <Heart className="w-5 h-5 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
                            <Icon className="w-5 h-5 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
                          </div>
                        </div>
                        <h2 className="desktop:text-[16px] text-[15px] mb-1.5 font-medium line-clamp-2">
                          {product.name}
                        </h2>
                        <p className="text-[#46A358] desktop:text-[18px] text-[16px] font-bold">
                          ${Number(product.price).toFixed(2)}
                        </p>
                        {product.discount > 0 && (
                          <p className="text-sm text-gray-500 mt-0.5">
                            Chegirma: {product.discount}%
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  {totalPages > 1 && (
                    <div className="flex justify-end items-center gap-2 mt-12 mb-16 flex-wrap">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-5 py-2.5 rounded-md bg-gray-100 text-[#3D3D3D] font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                      >
                        Oldingi
                      </button>

                      {getPageNumbers().map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-md text-sm font-medium min-w-[36px] transition-colors ${
                            currentPage === page
                              ? "bg-[#46A358] text-white"
                              : "text-[#3D3D3D] hover:bg-[#46A358]/10 hover:text-[#46A358]"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-5 py-2.5 rounded-md bg-gray-100 text-[#3D3D3D] font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                      >
                        Keyingi
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex desktop:gap-7 target:gap-3.5 gap-8 desktop:flex-row flex-col desktop:mb-34.5 mb-20">
            <div className="max-w-146.5 w-full min-h-62.5 bg-[#FBFBFB] flex desktop:flex-row tablet:flex-row flex-col pb-4">
              <img src="/img/summer1.png" alt="" />
              <div className="desktop:pt-9.25 tablet:pt-4 pt-2 desktop:pr-7.5 tablet:pr-3.5 pr-1.5 flex flex-col  text-end">
                <h2 className="text-[18px] font-bold mb-2">
                  Summer cactus <br />& succulents
                </h2>
                <p className="text-[14px] text-[#727272] mb-3.5">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <button className="w-35 h-10 cursor-pointer flex items-center justify-center gap-1 ml-15 rounded-md bg-[#46A358] text-[14px] text-white  duration-200 hover:bg-[#4caf60]">
                  Find More
                  <img src="/svg/ArrowRight.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="max-w-146.5 w-full min-h-62.5 bg-[#FBFBFB] flex desktop:flex-row tablet:flex-row flex-col pb-4">
              <img src="/img/summer2.png" alt="" />
              <div className="desktop:pt-9.25 tablet:pt-4 pt-2 desktop:pr-7.5 tablet:pr-3.5 pr-1.5 flex flex-col  text-end">
                <h2 className="text-[18px] font-bold mb-2">
                  Styling Trends <br />& much more
                </h2>
                <p className="text-[14px] text-[#727272] mb-3.5">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <button className="w-35 h-10 cursor-pointer flex items-center justify-center gap-1 ml-15 rounded-md bg-[#46A358] text-[14px] text-white  duration-200 hover:bg-[#4caf60]">
                  Find More
                  <img src="/svg/ArrowRight.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="max-w-52.25 w-full m-auto tablet:text-[26px] text-[22px] desktop:text-[30px] font-bold text-[#3D3D3D] mb-6">
            Our Blog Posts
          </h2>
          <p className="max-w-139.25 w-full desktop:text-[14px] text-[12px] text-[#727272] m-auto mb-8.75">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <div className="grid tablet:grid-cols-2 grid-cols-1 tablet:gap-0 desktop:gap-0 gap-8 desktop:grid-cols-4 mb-15 desktop:mb-25">
            <div className="max-w-67 w-full h-91 cursor-pointer bg-[#FBFBFB] duration-200 hover:shadow-2xl tablet:mb-10 m-auto">
              <img className="mb-2 desktop:w-67" src="/img/Blog1.png" alt="" />
              <p className="ml-3.75 text-[10px] tablet:text-[12px] desktop:text-[14px] text-[#46A358] font-medium mb-1">
                September 12 I Read in 6 minutes
              </p>
              <h2 className="ml-3.75 desktop:text-[20px] tablet:text-[16px] text-[13px] font-bold text-[#3D3D3D] mb-1">
                Cactus & Succulent <br />
                Care Tips
              </h2>
              <p className="ml-3.75 desktop:text-[14px] tablet:text-[12px] text-[10px] text-[#727272] mb-2 leading-[100%]">
                Cacti are succulents are easy care <br />
                plants for any home or patio.
              </p>
              <div className="flex items-center gap-1 ml-3.75">
                <p className="text-[14px] text-[#3D3D3D] duration-200 cursor-pointer hover:text-[#46A358]">
                  Read More
                </p>
                <img src="/svg/right.svg" alt="" />
              </div>
            </div>
            <div className="max-w-67 w-full h-91 cursor-pointer bg-[#FBFBFB] duration-200 hover:shadow-2xl m-auto">
              <img className="mb-2 desktop:w-67" src="/img/Blog2.png" alt="" />
              <p className="ml-3.75 text-[10px] tablet:text-[12px] desktop:text-[14px] text-[#46A358] font-medium mb-1">
                September 13 I Read in 2 minutes
              </p>
              <h2 className="ml-3.75 desktop:text-[20px] tablet:text-[16px] text-[13px] font-bold text-[#3D3D3D] mb-1">
                Top 10 Succulents for <br />
                Your Home
              </h2>
              <p className="ml-3.75 desktop:text-[14px] tablet:text-[12px] text-[10px] text-[#727272] mb-2 leading-[100%]">
                Best in hanging baskets. Prefers <br />
                medium to high light.
              </p>
              <div className="flex items-center gap-1 ml-3.75">
                <p className="text-[14px] text-[#3D3D3D] duration-200 cursor-pointer hover:text-[#46A358]">
                  Read More
                </p>
                <img src="/svg/right.svg" alt="" />
              </div>
            </div>
            <div className="max-w-67 w-full h-91 cursor-pointer bg-[#FBFBFB] duration-200 hover:shadow-2xl m-auto">
              <img className="mb-2 desktop:w-67" src="/img/Blog3.png" alt="" />
              <p className="ml-3.75 text-[10px] tablet:text-[12px] desktop:text-[14px] text-[#46A358] font-medium mb-1">
                September 15 I Read in 3 minutes
              </p>
              <h2 className="ml-3.75 desktop:text-[20px] tablet:text-[16px] text-[13px] font-bold text-[#3D3D3D] mb-1">
                Cactus & Succulent <br />
                Care Tips
              </h2>
              <p className="ml-3.75 desktop:text-[14px] tablet:text-[12px] text-[10px] text-[#727272] mb-2 leading-[100%]">
                Cacti and succulents thrive in <br />
                containers and because most are..
              </p>
              <div className="flex items-center gap-1 ml-3.75">
                <p className="text-[14px] text-[#3D3D3D] duration-200 cursor-pointer hover:text-[#46A358]">
                  Read More
                </p>
                <img src="/svg/right.svg" alt="" />
              </div>
            </div>
            <div className="max-w-67 w-full h-91 cursor-pointer bg-[#FBFBFB] duration-200 hover:shadow-2xl m-auto">
              <img className="mb-2 desktop:w-67" src="/img/Blog4.png" alt="" />
              <p className="ml-3.75 text-[10px] tablet:text-[12px] desktop:text-[14px] text-[#46A358] font-medium mb-1">
                September 15 I Read in 2 minutes
              </p>
              <h2 className="ml-3.75 desktop:text-[20px] tablet:text-[16px] text-[13px] font-bold text-[#3D3D3D] mb-1">
                Best Houseplants <br />
                Room by Room
              </h2>
              <p className="ml-3.75 desktop:text-[14px] tablet:text-[12px] text-[10px] text-[#727272] mb-2 leading-[100%]">
                The benefits of houseplants are <br />
                endless. In addition to..
              </p>
              <div className="flex items-center gap-1 ml-3.75">
                <p className="text-[14px] text-[#3D3D3D] duration-200 cursor-pointer hover:text-[#46A358]">
                  Read More
                </p>
                <img src="/svg/right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#00000000] flex desktop:hidden tablet:hidden h-25 fixed bottom-4 left-0 w-full z-50">
        <div className="w-103.5 relative m-auto">
          <img src="/svg/MobBottom.svg" alt="" />

          <div className="absolute left-39 bottom-9">
            <img className="cursor-pointer" src="/svg/MobBotoom.svg" alt="" />
          </div>

          <div className="absolute flex gap-13 items-center left-9 bottom-8.5">
            <Mob1 className="w-5 h-5 text-[#D9D9D9] hover:text-[#46A358] duration-200 cursor-pointer" />
            <Mob2 className="w-5 h-5 text-[#D9D9D9] hover:text-[#46A358] duration-200 cursor-pointer" />
          </div>

          <div className="absolute flex gap-13 items-center right-9 bottom-8.5">
            <Mob3 className="w-5 h-5 text-[#D9D9D9] hover:text-[#46A358] duration-200 cursor-pointer" />
            <Mob4 className="w-5 h-5 text-[#D9D9D9] hover:text-[#46A358] duration-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
