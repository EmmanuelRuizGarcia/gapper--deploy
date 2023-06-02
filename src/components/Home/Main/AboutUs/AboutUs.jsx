import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <section
        id="AboutUs"
        className="bg-white text-gapper-color-AboutUs w-11/12 h-auto pb-4 flex flex-col items-center justify-center text-center md:flex md:flex-col md:items-center md:justify-center"
      >
        <h2 className="text-2xl font-medium py-8">
          ¿QUIÉNES <strong>SOMOS</strong>?
        </h2>
        <p className="text-lg leading-8 break-words w-11/12 py-2 text-justify md:text-center md:justify-center">
          Somos una empresa líder en el sector asegurador, 100% mexicana.
          Contamos con más de 30 años de experiencia brindando tranquilidad y
          protección a través de la prevención. Empresa innovadora la cual busca
          facilitar los trámites a través de la tecnología a nuestros clientes
          sin dejar de ser bróker boutique con asesoría personalizada para cada
          tipo de persona y de empresa.
        </p>
        <p className="text-lg leading-8 break-words w-11/12 py-2 text-justify md:text-center md:justify-center">
          <strong>
            Implementamos la tecnología para digitalizar nuestros procesos de
            contratación
          </strong>
        </p>
      </section>
    </Fragment>
  );
};

export default AboutUs;
