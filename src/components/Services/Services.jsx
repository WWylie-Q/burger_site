import React from "react";
import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Cheeseburger Symphony",
    description:
      "An opulent rendition of the timeless. Our Classic Cheeseburger captivates with prime beef, artisan cheese, and a symphony of savory nostalgia.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Chicken Delight",
    description:
      "An opulent rendition of the timeless. Our Classic Cheeseburger captivates with prime beef, artisan cheese, and a symphony of savory nostalgia.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veggie Elegance",
    description:
      "Savor the symphony of garden-fresh delights in our Veggie Bliss Burger—a harmony of vibrant flavors, crisp textures, and culinary finesse.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Services"
            subtitle="Our Services"
            description={
              "Indulge in a symphony of flavors at Flipside Flavors, where each bite is a culinary masterpiece. Our artisanal burgers, meticulously crafted with the finest ingredients, ignite a gastronomic adventure. From the mouthwatering classics to avant-garde creations, our menu caters to diverse palates, ensuring an unforgettable dining experience. Immerse yourself in a blend of creativity and quality, where passion for exceptional food is served with every sizzling delight. Welcome to a realm where burgers transcend expectations – welcome to Flipside Flavors."
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
