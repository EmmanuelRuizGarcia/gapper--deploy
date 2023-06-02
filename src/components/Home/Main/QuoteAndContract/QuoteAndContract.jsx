/* eslint-disable no-undef */
// imports of React JS and NPM
import { Fragment } from "react";

// imports of Images

// section of images Insurance Transport, Medical Espenses and Vehicle
import ImageMainProductInsuranceTransport from "../../../../assets/MainProductInsuranceTransport.png";
import ImageMainProductInsuranceMedicalExpenses from "../../../../assets/MainProductInsuranceMedicalExpenses.png";
import ImageMainProductInsuranceVehicle from "../../../../assets/MainProductInsuranceVehicle.png";

// section of Traditional Personal Insurance
import BackGroundImageSchool from "../../../../assets/Estudios.svg";
import BackGroundImageRetirement from "../../../../assets/Retiro.svg";
import BackGroundImageSaving from "../../../../assets/Ahorro.svg";
import BackGroundImageShield from "../../../../assets/Proteccion.svg";
import BackGroundImageHome from "../../../../assets/Hogar.svg";
import BackGroundImageDoctor from "../../../../assets/Medico.svg";
import BackGroundImageVehicle from "../../../../assets/Vehiculo.svg";

// section of Traditional Business Insurance
import BackGroundImageGroupMedicalExpenses from "../../../../assets/GroupMedicalExpenses.svg";
import BackGroundImageCarFleetInsurance from "../../../../assets/CarFleetInsurance.svg";
import BackGroundImageAccidentInsurance from "../../../../assets/AccidentInsurance.svg";
import BackGroundImageBusinessDamageInsurance from "../../../../assets/BusinessDamageInsurance.svg";
import BackGroundImageCyberSafe from "../../../../assets/CyberSafe.svg";
import BackGroundImageGeneralCivilLiability from "../../../../assets/GeneralCivilLiability.png";
import BackGroundImageBusinessLifeInsurance from "../../../../assets/BusinessLifeInsurance.svg";

// imports Utilities (React components)
import InsuranceMainProduct from "./InsuranceMainProduct/InsuranceMainProduct";
import TypeInsurance from "./TypeInsurance/TypeInsurance";
import { useState } from "react";
import TraditionalInsurance from "./TraditionalInsurance/TraditionalInsurance";

const QuoteAndContract = () => {
  const personalInsurance = [
    {
      id: 1,
      contenido:
        "El objetivo de estos seguros es proteger a la persona ante diferentes situaciones que pongan y/o eventos que pueden presentarse en su vida. Las personas estamos expuestos a diferentes riesgos que podemos conocer o no. El fallecimiento, supervivencia, accidentes, alteraciones de la salud, daños a nuestro hogar por sismo o terremoto, son algunos de los eventos que pueden ocurrir y poner a prueba nuestra estabilidad financiera ye stilo de vida de manera importante. Conoce nuestras soluciones.",
    },
  ];
  const businessInsurance = [
    {
      id: 1,
      contenido:
        "Al igual que las personas, las empresas en todo el mundo, conviven día a día con muchos riesgos y posibles eventualidades que dañen su patrimonio como sus oficinas, planta industrial, maquinaria y equipo y todo aquello que las hace funcionar y brindar los productos y/o servicios que las hacen subsistir. Desde una inundación, un terremoto o un incendio hasta cosas que no te imaginas pueden ocurrir y vulnerar su estabilidad financiera.",
    },
  ];

  const [personalInsuranceSection, setPersonalInsuranceSection] =
    useState(true);

  const buttonHandlerTypeInsurance = () => {
    setPersonalInsuranceSection((current) => !current);
  };

  const traditionalPersonalInsuranceData = [
    {
      id: 1,
      textToolTip: "Seguro para la educación superior",
      link: "/",
      imageSrc: BackGroundImageSchool,
      textAltImage: "Icono seguro de Seguro para la educación superior",
    },
    {
      id: 2,
      textToolTip: "Seguro de Retiro",
      link: "/",
      imageSrc: BackGroundImageRetirement,
      textAltImage: "Icono seguro de retiro",
    },
    {
      id: 3,
      textToolTip: "Seguro de protección y ahorro",
      link: "/",
      imageSrc: BackGroundImageSaving,
      textAltImage: "Icono Seguro de protección y ahorro",
    },
    {
      id: 4,
      textToolTip: "Pura protección",
      link: "/",
      imageSrc: BackGroundImageShield,
      textAltImage: "Icono seguro de Pura protección",
    },
    {
      id: 5,
      textToolTip: "Seguro de hogar",
      link: "/",
      imageSrc: BackGroundImageHome,
      textAltImage: "Icono Seguro de hogar",
    },
    {
      id: 6,
      textToolTip: "Seguro de Gastos Médicos Mayores",
      link: "/",
      imageSrc: BackGroundImageDoctor,
      textAltImage: "Icono Seguro de Gastos Médicos Mayores",
    },
    {
      id: 7,
      textToolTip: "Seguro de automóvil/bicicleta",
      link: "/",
      imageSrc: BackGroundImageVehicle,
      textAltImage: "Icono Seguro de automóvil/bicicleta",
    },
  ];

  const traditionalBusinessInsuranceData = [
    {
      id: 1,
      textToolTip: "Gastos Médicos Grupo",
      link: "/",
      imageSrc: BackGroundImageGroupMedicalExpenses,
      textAltImage: "Icono seguro de Gastos Médicos Grupo",
    },
    {
      id: 2,
      textToolTip: "Seguro para flotillas de automóviles",
      link: "/",
      imageSrc: BackGroundImageCarFleetInsurance,
      textAltImage: "Icono seguro de Seguro para flotillas de automóviles",
    },
    {
      id: 3,
      textToolTip: "Seguro de Accidentes",
      link: "/",
      imageSrc: BackGroundImageAccidentInsurance,
      textAltImage: "Icono seguro de Seguro de Accidentes",
    },
    {
      id: 4,
      textToolTip: "Seguro para daños empresas",
      link: "/",
      imageSrc: BackGroundImageBusinessDamageInsurance,
      textAltImage: "Icono Seguro para daños empresas",
    },
    {
      id: 5,
      textToolTip: "Cyber Safe",
      link: "/",
      imageSrc: BackGroundImageCyberSafe,
      textAltImage: "Icono Cyber Safe",
    },
    {
      id: 6,
      textToolTip: "Responsabilidad Civil General",
      link: "/",
      imageSrc: BackGroundImageGeneralCivilLiability,
      textAltImage: "Icono seguro de Responsabilidad Civil General",
    },
    {
      id: 7,
      textToolTip: "Seguro de Vida empresarial",
      link: "/",
      imageSrc: BackGroundImageBusinessLifeInsurance,
      textAltImage: "Icono Seguro de Vida empresarial",
    },
  ];

  return (
    <Fragment>
      <div id="Personal_Business_Insurance" className="pb-8">
        <div className="bg-gapper-color-Cotiza-Contrata text-white text-left">
          <h2 className="py-4 px-4 text-xl font-medium md:pl-14 md:text-4xl md:font-semibold">
            COTIZA Y CONTRATA
          </h2>
        </div>
        <div className="w-11/12 h-auto pb-4 flex flex-col items-center justify-center">
          <p className="text-lg leading-8 break-words w-11/12 py-2 text-justify">
            Logramos monitorizar y digitalizar los procesos de negocio de
            contratación, todo ello, de acuerdo a un plan estratégico
            previamente establecido.
          </p>
          <p className="text-lg leading-8 break-words w-11/12 py-2 text-justify">
            Dando como resultado un proceso de contratación 100% digital y
            transparente de principio a fin.
          </p>
        </div>
        <div className="w-11/12 h-auto pb-4 flex flex-col items-center justify-center text-center md:flex md:flex-row md:text-center md:pl-12">
          <div className="py-4 px-4 w-11/12 md:w-1/3">
            <InsuranceMainProduct
              imagePicture={ImageMainProductInsuranceTransport}
              altPicture={"Imagen de transporte"}
              textTitle={"Transporte"}
              textButton={"COTIZAR"}
            />
          </div>
          <div className="py-4 px-4 w-11/12 md:w-1/3">
            <InsuranceMainProduct
              imagePicture={ImageMainProductInsuranceMedicalExpenses}
              altPicture={"Imagen de transporte"}
              textTitle={"Devolución deducible GM"}
              textButton={"COTIZAR"}
            />
          </div>
          <div className="py-4 px-4 w-11/12 md:w-1/3">
            <InsuranceMainProduct
              imagePicture={ImageMainProductInsuranceVehicle}
              altPicture={"Imagen de transporte"}
              textTitle={"Devolución deducible Autos"}
              textButton={"COTIZAR"}
            />
          </div>
        </div>
        <div className="w-full h-auto font-medium pb-4 flex flex-col items-center justify-center text-center text-gapper-color-Cotiza-Contrata">
          <h4 className="text-xl md:text-4xl">
            CONOCE NUESTROS PRODUCTOS TRADICIONALES
          </h4>
        </div>
        <div className="w-11/12 h-auto flex felx-row items-center justify-center md:inline md:flex-row md:items-start md:justify-start md:w-1/2 md:px-2 md:float-left">
          <div className="w-full h-auto flex flex-col items-center justify-center text-center pl-8 md:pl-12 md:flex md:flex-col md:items-start md:w-11/12 md:h-auto md:pb-4">
            <div className="flex flex-col justify-center items-center text-center md:flex md:flex-row md:justify-center md:items-center md:text-center md:w-11/12 md:h-auto">
              {personalInsuranceSection ? (
                <TypeInsurance
                  textTilte={"Seguros Personales:"}
                  textBody={personalInsurance}
                />
              ) : (
                <TypeInsurance
                  textTilte={"Seguros Empresariales:"}
                  textBody={businessInsurance}
                />
              )}
            </div>
            <div
              className="flex flex-col justify-center items-center text-center rounded-md shadow-sm md:flex md:flex-row md:justify-center md:items-center md:text-center md:w-11/12 md:h-auto"
              role="group"
            >
              <div className="flex h-1 space-x-4 pb-8 md:flex md:h-1 md:space-x-4 md:pb-8">
                <button
                  type="button"
                  id="btnPersonalInsurance"
                  className="px-4 py-2 text-sm font-medium text-transparent bg-transparent border border-gapper-color-Boton-Cortizar rounded-lg hover:bg-gapper-color-Boton-Cortizar hover:text-transparent focus:z-10 focus:ring-2 focus:ring-gapper-color-Boton-Cortizar focus:bg-gapper-color-Boton-Cortizar focus:text-transparent md:w-14 md:h-1"
                  onClick={
                    !personalInsuranceSection
                      ? buttonHandlerTypeInsurance
                      : undefined
                  }
                >
                  {" "}
                </button>
                <button
                  type="button"
                  id="btnBusinessInsurance"
                  className="px-4 py-2 text-sm font-medium text-transparent bg-transparent border border-gapper-color-Boton-Cortizar rounded-lg hover:bg-gapper-color-Boton-Cortizar hover:text-transparent focus:z-10 focus:ring-2 focus:ring-gapper-color-Boton-Cortizar focus:bg-gapper-color-Boton-Cortizar focus:text-transparent md:w-14 md:h-1"
                  onClick={
                    personalInsuranceSection
                      ? buttonHandlerTypeInsurance
                      : undefined
                  }
                >
                  {" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <TraditionalInsurance
          textTitle={"Seguros Personales"}
          data={traditionalPersonalInsuranceData}
        />
        <TraditionalInsurance
          textTitle={"Seguros Empresariales"}
          data={traditionalBusinessInsuranceData}
        />
      </div>
    </Fragment>
  );
};

export default QuoteAndContract;
