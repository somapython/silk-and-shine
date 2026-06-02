import "./ReelSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "../productCard/ProductCard";

import saree1 from "../../assets/images/saree1.jpg";
import saree2 from "../../assets/images/saree2.jpg";
import saree3 from "../../assets/images/saree3.jpg";
import saree4 from "../../assets/images/saree4.jpg";
// import saree5 from "../../assets/images/saree5.jpg";
// import saree6 from "../../assets/images/saree6.jpg";

const ReelSlider = () => {

  const products = [
    {
      image: saree1,
      title: "Royal Silk Saree",
      price: 2499,
      oldPrice: 3999
    },
    {
      image: saree2,
      title: "Wedding Collection",
      price: 3499,
      oldPrice: 4999
    },
    {
      image: saree3,
      title: "Designer Saree",
      price: 2899,
      oldPrice: 4599
    },
    {
      image: saree4,
      title: "Elegant Silk Saree",
      price: 2699,
      oldPrice: 4199
    },
    // {
    //   image: saree5,
    //   title: "Premium Silk Saree",
    //   price: 3299,
    //   oldPrice: 5199
    // },
    // {
    //   image: saree6,
    //   title: "Luxury Collection",
    //   price: 3999,
    //   oldPrice: 5999
    // }
  ];

  return (
    <div className="reel-slider">

      <h2>Trending Collection</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >

        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default ReelSlider;