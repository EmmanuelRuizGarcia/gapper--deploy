import { Fragment } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const TypeInsurance = ({ textTilte, textBody }) => {
  if (!textBody) {
    return null;
  }
  return (
    <Fragment>
      <div className="text-gapper-color-Cotiza-Contrata">
        <h4 className="text-xl font-semibold text-left">{textTilte}</h4>
        {textBody.map((item) => {
          return (
            <div className="py-4 pr-4" key={item.id}>
              <div className="text-justify">
                <p>{item.contenido}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TypeInsurance;
