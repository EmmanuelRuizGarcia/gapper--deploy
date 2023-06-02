/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import Tooltip from "../../../../Tooltip/Tooltip";

const TraditionalInsurance = ({ textTitle, data }) => {
  return (
    <Fragment>
      <div className="felx-col grid h-auto w-11/12 items-center justify-center md:flex md:w-1/2 md:flex-col md:items-start md:justify-start md:px-2">
        <div className="text-gapper-color-Cotiza-Contrata flex h-auto w-11/12 flex-col items-center justify-center text-center md:flex md:w-5/6 md:flex-col">
          <h3>
            <strong>{textTitle}</strong>
          </h3>
        </div>
        <div className="flex h-auto w-11/12 flex-col items-center justify-center text-center md:flex md:w-5/6 md:flex-col">
          <div className="flex h-auto w-1/2 flex-row items-start justify-center text-center md:flex md:flex-row">
            {data.map((item) => {
              return (
                <div key={item.id} className="m-2 min-h-full w-1/6">
                  <Tooltip text={item.textToolTip}>
                    <a href={item.link}>
                      <img
                        src={item.imageSrc}
                        alt={item.textAltImage}
                        className=""
                      />
                    </a>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TraditionalInsurance;
