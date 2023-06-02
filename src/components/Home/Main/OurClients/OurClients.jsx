import { Fragment } from "react";

// imports of Images

// Our Clients
import ImageOurClientGNP from "../../../../assets/OurGNPClient.png";
import ImageOurClientZurich from "../../../../assets/OurZurichClient.png";
import ImageOurClientRedEnlace from "../../../../assets/OurRedEnlaceClient.png";
import ImageOurClientGapper from "../../../../assets/LogoGapper.svg";
import ImageOurClientMapfre from "../../../../assets/OurMapfreClient.png";
import ImageOurClientQualitas from "../../../../assets/OurQualitasClient.png";
import ImageOurClientAnaSeguros from "../../../../assets/OurAnaSegurosClient.png";

// Our Client Big Image
import ImageOurClientBigImage from "../../../../assets/OurClientsImage.svg";
import SwiperSlides from "../../../SwiperSlides/SwiperSlides";

const OurClients = () => {
  const clients = [
    {
      name: "GNP",
      logo: ImageOurClientGNP,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Zurich",
      logo: ImageOurClientZurich,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Red Enlace",
      logo: ImageOurClientRedEnlace,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Gapper",
      logo: ImageOurClientGapper,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Mapfre",
      logo: ImageOurClientMapfre,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Qualitas",
      logo: ImageOurClientQualitas,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
    {
      name: "Ana Seguros",
      logo: ImageOurClientAnaSeguros,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita exercitationem non magnam cumque eaque voluptate maxime minima.",
    },
  ];
  return (
    <Fragment>
      <div>
        <div className="flex justify-center items-center h-full">
          <SwiperSlides clients={clients} />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-gapper-color-Cotiza-Contrata">
          <h3 className="uppercase text-2xl font-semibold mt-8 md:text-4xl">
            ¿Tienes algún siniestro pendiente?
          </h3>
          <p className="font-medium">
            Nosotros te ofrecemos asesoria de forma gratuita sin que formes
            parte de nuestros clientes.
            <strong className="uppercase"> ¡nosotros te asesoramos!</strong>
          </p>
        </div>
        <div>
          <img src={ImageOurClientBigImage} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default OurClients;
