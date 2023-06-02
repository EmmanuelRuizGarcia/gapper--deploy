import { Fragment } from "react";
import AboutUs from "./AboutUs/AboutUs";
import CustomerTestimonial from "./CustomerTestimonial/CustomerTestimonial";
import OurClients from "./OurClients/OurClients";
import QuoteAndContract from "./QuoteAndContract/QuoteAndContract";

const Main = () => {
  return (
    <Fragment>
      <main className="flex flex-col w-12/12 h-auto bg-white">
        <AboutUs />
        <QuoteAndContract />
        <CustomerTestimonial />
        <OurClients />
      </main>
    </Fragment>
  );
};

export default Main;
