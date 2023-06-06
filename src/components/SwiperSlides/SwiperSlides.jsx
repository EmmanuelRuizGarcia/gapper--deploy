import { Fragment, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

const SwiperSlides = ({ clients }) => {
  const [active, setActive] = useState(null);

  return (
    <Fragment>
      <div className="w-full max-w-5xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
        >
          {clients.map((client, i) => (
            <SwiperSlide key={i}>
              <div className="h-96 flex text-gapper-color-Cotiza-Contrata">
                <div
                  className={`card ${
                    active === i && "card-active"
                  } to-backgroundMenu/10`}
                >
                  <div className="logo">
                    <img src={client.logo} alt="Nuestro Cliente GNP" />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold uppercase">
                    {client.name}
                  </h2>
                  <p className="para">{client.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SwiperSlides;
