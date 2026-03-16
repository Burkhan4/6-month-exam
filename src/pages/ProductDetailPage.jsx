import Icon from "../assets/svg/NavSearchBtn.svg?react";
import Groop from "../assets/svg/Group40.svg?react";
import Product1 from "../assets/svg/Product1.svg?react";
import Product2 from "../assets/svg/Product2.svg?react";
import Product3 from "../assets/svg/Product3.svg?react";
import Product4 from "../assets/svg/Product4.svg?react";
import Heart from "../assets/svg/heart.svg?react";
import Icon1 from "../assets/svg/prodict-icon1.svg?react";
import Icon2 from "../assets/svg/prodict-icon2.svg?react";
import Icon3 from "../assets/svg/prodict-icon3.svg?react";
import Icon4 from "../assets/svg/prodict-icon4.svg?react";
import Back from "../assets/svg/Back.svg?react";
import Heart1 from "../assets/svg/Mob-heart.svg?react";
import Line from "../assets/svg/MobVector.svg?react";
import Mob3 from "../assets/svg/MobBotoom3.svg?react";
import Group46 from "../assets/svg/Group46.svg?react";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../service/product.service";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState(1);
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (!id) {
      setError("Mahsulot ID topilmadi");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
        setActiveImageIndex(0);
      } catch (err) {
        setError("Mahsulot yuklanmadi. Qayta urinib ko'ring.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-20 text-center text-[#46A358] text-xl">
        Yuklanmoqda...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-20 text-center text-red-600">
        {error || "Mahsulot topilmadi 😔"}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 block mx-auto px-6 py-3 bg-[#46A358] text-white rounded-md"
        >
          Orqaga qaytish
        </button>
      </div>
    );
  }
  const mainImage =
    product.pictures?.[activeImageIndex] || "/img/placeholder.png";
  const thumbnails = product.pictures?.slice(0, 4) || [];
  return (
    <section className="">
      <div className="container">
        <h2 className="desktop:text-[15px] tablet:text-[14px] text-[12px] font-bold mb-10.75">
          Home / <span className="font-normal">Shop</span>
        </h2>
        <div className="hidden tablet:flex desktop:flex mb-23">
          <div className="flex max-w-299.75 w-full justify-between">
            <div className="flex max-w-143.25 w-full justify-between">
              <div className="flex flex-col gap-4">
                {thumbnails.map((img, index) => (
                  <div
                    key={index}
                    className={`w-25 h-25 bg-[#FBFBFB] cursor-pointer border-2 ${
                      activeImageIndex === index
                        ? "border-[#46A358]"
                        : "border-transparent"
                    } hover:border-[#46A358] transition-all`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                    />
                  </div>
                ))}
                {Array(4 - thumbnails.length)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={`placeholder-${i}`}
                      className="w-25 h-25 bg-[#FBFBFB] opacity-50"
                    />
                  ))}
              </div>
              <div className="max-w-111 max-h-111 w-full h-full relative bg-[#FBFBFB] rounded-md tablet:pt-4 tablet:pl-2 desktop:pt-6.25 desktop:pl-4.25">
                <img
                  className="w-101 h-101 object-contain mx-auto"
                  src={mainImage}
                  alt={product.name}
                />
                <div className="w-7.5 h-7.5 rounded-full bg-white pt-1.5 pl-1.5 absolute top-3.25 right-3.25">
                  <Icon className="w-4.5 h-4.5 text-[#3D3D3D] hover:text-[#46A358] duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="text-start max-w-143.5 w-full">
              <h2 className="tablet:text-[24px] text-[20px] font-bold mb-5.25 desktop:text-[28px] text-[#3D3D3D]">
                {product.name}
              </h2>

              <div className="flex max-w-143.25 w-full justify-between items-center border-b-[0.5px] border-[#46A35880] mb-4 pb-3">
                <p className="tablet:text-[18px] desktop:text-[22px] text-[#46A358] font-bold">
                  ${Number(product.price).toFixed(2)}
                </p>
                <Groop className="w-59.75 h-4" />
              </div>

              <h2 className="text-[15px] text-[#3D3D3D] font-medium mb-2.5">
                Short Description:
              </h2>
              <p className="tablet:text-[12px] leading-6 mb-6 desktop:text-[14px] text-[#727272]">
                {product.description || "Mahsulot tavsifi mavjud emas."}
              </p>

              <h2 className="text-[15px] text-[#3D3D3D] font-medium mb-2.75">
                Size:
              </h2>
              <div className="flex gap-2.5 items-center mb-5.75">
                <Product1
                  onClick={() => setActiveSize(1)}
                  className={`w-7 h-7 cursor-pointer ${
                    activeSize === 1 ? "text-[#46A358]" : "text-[#727272]"
                  }`}
                />
                <Product2
                  onClick={() => setActiveSize(2)}
                  className={`w-7 h-7 cursor-pointer ${
                    activeSize === 2 ? "text-[#46A358]" : "text-[#727272]"
                  }`}
                />
                <Product3
                  onClick={() => setActiveSize(3)}
                  className={`w-7 h-7 cursor-pointer ${
                    activeSize === 3 ? "text-[#46A358]" : "text-[#727272]"
                  }`}
                />
                <Product4
                  onClick={() => setActiveSize(4)}
                  className={`w-7 h-7 cursor-pointer ${
                    activeSize === 4 ? "text-[#46A358]" : "text-[#727272]"
                  }`}
                />
              </div>

              <div className="flex max-w-116.25 w-full justify-between mb-6.5">
                <div className="flex max-w-29.75 w-full justify-between items-center">
                  <button
                    onClick={() => count > 1 && setCount(count - 1)}
                    className="w-8.25 h-8.25 bg-[#46A358] text-white rounded-full hover:bg-[#4caf60] transition"
                  >
                    -
                  </button>
                  <p className="text-[20px] text-[#3D3D3D]">{count}</p>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="w-8.25 h-8.25 bg-[#46A358] text-white rounded-full hover:bg-[#4caf60] transition"
                  >
                    +
                  </button>
                </div>

                <button className="w-32.5 h-10 bg-[#46A358] rounded-md text-white font-bold hover:bg-[#4caf60] transition">
                  BUY NOW
                </button>

                <button className="w-32.5 h-10 bg-white border border-[#46A358] rounded-md text-[#46A358] font-bold hover:bg-[#46A358] hover:text-white transition">
                  ADD TO CART
                </button>

                <button className="w-10 h-10 bg-white border border-[#46A358] rounded-md hover:bg-[#46A358] hover:text-white transition flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[15px] text-[#727272bf] mb-2.5">
                SKU:{" "}
                <span className="text-[#727272]">{product._id.slice(-10)}</span>
              </p>
              <p className="text-[15px] text-[#727272bf] mb-2.5">
                Categories:{" "}
                <span className="text-[#727272]">
                  {product.category || "Noma'lum"}
                </span>
              </p>
              <p className="text-[15px] text-[#727272bf] mb-6.5">
                Tags:{" "}
                <span className="text-[#727272]">Home, Garden, Plants</span>
              </p>

              <div className="flex items-center max-w-67.25 w-full justify-between">
                <p className="text-[15px] text-[#3D3D3D] font-medium">
                  Share this product:
                </p>
                <Icon1 className="w-4.5 h-4.5 hover:text-[#46A358] cursor-pointer transition" />
                <Icon2 className="w-4.5 h-4.5 hover:text-[#46A358] cursor-pointer transition" />
                <Icon3 className="w-4.5 h-4.5 hover:text-[#46A358] cursor-pointer transition" />
                <Icon4 className="w-4.5 h-4.5 hover:text-[#46A358] cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:hidden desktop:hidden bg-[#F4F4F4] mb-71">
        <div className="container">
          <div className="pt-5.75 px-7.25">
            <div className="max-w-89 w-full h-89 m-auto relative">
              <img
                className="w-89 h-89"
                src={
                  product.pictures?.[activeImageIndex] || "/img/ProductImg.png"
                }
                alt={product.name || "Mahsulot rasmi"}
              />
              <div className="absolute top-2.5 left-0">
                <Back
                  className="w-8.75 h-8.75 cursor-pointer"
                  onClick={() => navigate(-1)}
                />
              </div>
              <div className="absolute top-2.5 right-0">
                <Heart1 className="w-8.75 h-8.75 text-[#46A358] hover:text-[#108627] duration-200 cursor-pointer" />
              </div>
              <div className="absolute bottom-1.75 left-37.5">
                <Line className="w-14 h-1.75 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-tl-[31px] bg-white rounded-tr-[31px] h-25">
          <div className="container pt-8.5">
            <div className="flex gap-33.75 items-center mb-6">
              <h2 className="text-[20px] text-[#3D3D3D] font-medium">
                {product.name || "Mahsulot nomi"}
              </h2>
              <img src="/img/Mob-star.png" alt="" />
            </div>
            <p className="text-[#727272] text-[14px] mb-5">
              {product.description || "Mahsulot tavsifi mavjud emas."}
            </p>

            <h2 className="text-[15px] text-[#3D3D3D] font-medium mb-2.75">
              Size:
            </h2>
            <div className="flex gap-2.5 items-center mb-5.75">
              <Product1
                onClick={() => setActive(1)}
                className={`w-7 h-7 cursor-pointer ${
                  active === 1 ? "text-[#46A358]" : "text-[#727272]"
                }`}
              />

              <Product2
                onClick={() => setActive(2)}
                className={`w-7 h-7 cursor-pointer ${
                  active === 2 ? "text-[#46A358]" : "text-[#727272]"
                }`}
              />

              <Product3
                onClick={() => setActive(3)}
                className={`w-7 h-7 cursor-pointer ${
                  active === 3 ? "text-[#46A358]" : "text-[#727272]"
                }`}
              />

              <Product4
                onClick={() => setActive(4)}
                className={`w-7 h-7 cursor-pointer ${
                  active === 4 ? "text-[#46A358]" : "text-[#727272]"
                }`}
              />
            </div>

            <p className="text-[15px] text-[#727272bf] mb-2.5">
              SKU:{" "}
              <samp className="text-[#727272]">
                {product._id?.slice(-10) || "Noma'lum"}
              </samp>
            </p>
            <p className="text-[15px] text-[#727272bf] mb-2.5">
              Categories:{" "}
              <samp className="text-[#727272]">
                {product.category || "Noma'lum"}
              </samp>
            </p>
            <p className="text-[15px] text-[#727272bf] mb-6.5">
              Tags: <samp className="text-[#727272]">Home, Garden, Plants</samp>
            </p>
          </div>
        </div>

        <div className="h-41 bg-white fixed bottom-0 pt-5 left-0 w-full z-50 rounded-tl-[40px] rounded-tr-[40px] shadow-[0px_0px_20px_0px_#CDCDCD4D]">
          <div className="max-w-90 w-full m-auto">
            <div className="flex justify-between mb-5">
              <div className="flex gap-3 items-center">
                <p className="text-[15px] text-[#727272]">Qty</p>
                <button
                  onClick={() => count > 1 && setCount(count - 1)}
                  className="w-6 h-6 bg-[#46A358] duration-200 cursor-pointer text-[14px] text-white rounded-full hover:bg-[#4caf60]"
                >
                  -
                </button>

                <p className="text-[18px] text-[#3D3D3D]">{count}</p>

                <button
                  onClick={() => setCount(count + 1)}
                  className="w-6 h-6 bg-[#46A358] duration-200 cursor-pointer text-[14px] text-white rounded-full hover:bg-[#4caf60]"
                >
                  +
                </button>
              </div>
              <p className="text-[16px] text-[#46A358] font-bold">
                ${Number(product.price || 0).toFixed(2)}
              </p>
            </div>

            <div className="flex gap-2.5 items-center">
              <button className="bg-[#46A358] w-49 h-15 rounded-[40px] text-white font-bold text-[16px] shadow-[0px_10px_20px_0px_#46A3584D] cursor-pointer duration-200 hover:bg-[#4caf60]">
                Buy Now
              </button>
              <button className="flex bg-[#F6F6F6] text-[#727272] items-center justify-center w-15 h-15 rounded-full hover:text-[#46A358] duration-200 cursor-pointer">
                <Mob3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-7.5 border-b-[0.3px] border-[#46A35880] mb-4.5">
          <h2 className="pb-3 cursor-pointer border-b-[3px] border-[#46A358] text-[14px] text-[#46A358] font-bold desktop:text-[17px]">
            Product Description
          </h2>
          <p className="cursor-pointer desktop:text-[17px] text-[14px] text-[#3D3D3D]">
            Reviews (19)
          </p>
        </div>
        <div className="mb-17 desktop:mb-31.75">
          <p className="desktop:text-[14px] text-[12px] text-[#727272] mb-4.5">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.{" "}
            <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
          <h2 className="text-[#3D3D3D] text-[14px] font-bold mb-1">
            Living Room:
          </h2>
          <p className="desktop:text-[14px] text-[12px] text-[#727272] mb-4.5">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2 className="text-[#3D3D3D] text-[14px] font-bold mb-1">
            Dining Room:
          </h2>
          <p className="desktop:text-[14px] text-[12px] text-[#727272] mb-4.5">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <h2 className="text-[#3D3D3D] text-[14px] font-bold mb-1">Office:</h2>
          <p className="desktop:text-[14px] text-[12px] text-[#727272] mb-4.5">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-7.5 border-b-[0.3px] border-[#46A35880] mb-11">
          <h2 className="pb-3 cursor-pointer text-[14px] text-[#46A358] font-bold desktop:text-[17px]">
            Releted Products
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="grid tablet:grid-cols-3 grid-cols-2 gap-4 desktop:grid-cols-5 mb-15">
            <div className="desktop:w-54.75 tablet:w-54.75 w-[153.3px] cursor-pointer duration-200 hover:shadow-2xl">
                <img src="/img/Releted1.png" alt="" />
                <p className="mt-3 text-[#3D3D3D] text-[15px] mb-1.25">Beach Spider Lily</p>
                <p className="text-[16px] text-[#46A358] mb-2">$129.00</p>
            </div>
            <div className="desktop:w-54.75 tablet:w-54.75 w-[153.3px] cursor-pointer duration-200 hover:shadow-2xl">
                <img src="/img/Releted2.png" alt="" />
                <p className="mt-3 text-[#3D3D3D] text-[15px] mb-1.25">Blushing Bromeliad</p>
                <p className="text-[16px] text-[#46A358] mb-2">$139.00</p>
            </div>
            <div className="desktop:w-54.75 tablet:w-54.75 w-[153.3px] cursor-pointer duration-200 hover:shadow-2xl">
                <img src="/img/Releted3.png" alt="" />
                <p className="mt-3 text-[#3D3D3D] text-[15px] mb-1.25">Aluminum Plant</p>
                <p className="text-[16px] text-[#46A358] mb-2">$179.00</p>
            </div>
            <div className="desktop:w-54.75 tablet:w-54.75 w-[153.3px] cursor-pointer duration-200 hover:shadow-2xl">
                <img src="/img/Releted4.png" alt="" />
                <p className="mt-3 text-[#3D3D3D] text-[15px] mb-1.25">Bird's Nest Fern</p>
                <p className="text-[16px] text-[#46A358] mb-2">$99.00</p>
            </div>
            <div className="desktop:w-54.75 tablet:w-54.75 w-[153.3px] cursor-pointer duration-200 hover:shadow-2xl">
                <img src="/img/Releted5.png" alt="" />
                <p className="mt-3 text-[#3D3D3D] text-[15px] mb-1.25">Chinese Evergreen</p>
                <p className="text-[16px] text-[#46A358] mb-2">$39.00</p>
            </div>
        </div>
        <div className="max-w-14 w-full m-auto desktop:mb-32 mb-16"><Group46 className="w-14 h-3" /></div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
