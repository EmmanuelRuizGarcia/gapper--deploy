import { Fragment } from "react";

const InsuranceMainProduct = ({
  imagePicture,
  altPicture,
  textTitle,
  textButton,
}) => {
  return (
    <Fragment>
      <div className="max-w-sm rounded-lg text-center items-center flex flex-col justify-center">
        <img
          src={imagePicture}
          alt={altPicture}
          className="rounded-t-lg w-60 text-center"
        />
        <div className="w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gapper-color-Cotiza-Contrata py-4">
            {textTitle}
          </h5>
          <button className="w-1/2 h-13 bg-gapper-color-Boton-Cortizar hover:bg-gapper-color-Cotiza-Contrata text-white font-bold py-2 px-4 rounded-full">
            {textButton}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default InsuranceMainProduct;
