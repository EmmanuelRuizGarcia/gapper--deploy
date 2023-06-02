import { Fragment, useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <div
        className="relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {isVisible && (
          <div className="absolute rounded-full translate-y-[calc(-100%)] translate-x-[-15%] bg-gapper-color-Cotiza-Contrata text-white p-2 w-min-200">
            {text}
          </div>
        )}
        <div className="inline-block h-10 w-10 md:h-14 md:w-14">{children}</div>
      </div>
    </Fragment>
  );
};

export default Tooltip;
