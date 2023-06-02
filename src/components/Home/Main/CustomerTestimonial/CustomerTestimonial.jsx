import { Fragment } from "react"

import ImgTestimonial from '../../../../assets/CustomerTestimonial.png'
import ImgCarlos from '../../../../assets/CarlosGuillem.png'
import ImgIvan from '../../../../assets/IvanFranco.png'

const CustomerTestimonial = () => {
  return (
    <Fragment>
      <section className="bg-gapper-color-AboutUs text-white w-full h-auto flex flex-col items-center justify-center px-0 
                          md:flex md:flex-row md:place-items-start">
        <div className="w-11/12 pl-8 items-center justify-center 
                        md:w-9/12 md:pt-16">
          <img className="h-4/5 w-4/5 
                          md:h-8/12 md:w-8/12md:pl-16" 
                src={ImgTestimonial} alt="Imagen de testimonios" />
        </div>
        <div className="w-11/12 items-center justify-center 
                        md:w-9/12">
          <h2 className="text-xl font-medium py-8 pl-4 
                         md:text-3xl md:pl-0 md:py-16">ESTO DICEN NUESTROS CLIENTES</h2>
          <div className="group flex flex-col items-center justify-center pb-8 w-12/12 h-4/5 
                          md:flex-row">
            <div className="duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 flex flex-col justify-center items-center w-12/12 
                            md:w-1/2 md:flex md:flex-col md:justify-start md:items-start">
              <img src={ImgCarlos} alt="Testimonio Carlos" className="pb-2 h-3/5 w-3/5 
                                                                      md:pb-4 md:h-1/2 md:w-1/2" />
              <h4 className="md:w-12/12 md:text-xl">Carlos Guillém, 43</h4>
              <a href="#"><h4 className="md:w-12/12 md:text-base md:pl-8">Leer testimonio</h4></a>
            </div>
            <div className="duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 flex flex-col justify-center items-center w-12/12 
                            md:w-1/2 md:flex md:flex-col md:justify-start md:items-start">
              <img src={ImgIvan} alt="Testimonio Ivan" className="pb-2 h-3/5 w-3/5 
                                                                  md:pb-4 md:h-1/2 md:w-1/2" />
              <h4 className="md:w-12/12 md:text-xl md:pl-3">Iván Franco, 65</h4>
              <a href="#"><h4 className="md:w-12/12 md:text-base md:pl-6">Leer testimonio</h4></a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CustomerTestimonial
