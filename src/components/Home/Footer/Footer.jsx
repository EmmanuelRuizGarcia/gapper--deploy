import { Fragment } from "react"

import LetraGapper from '../../../assets/LetraGapperFooter.png'
import FaceBookIcon from '../../../assets/Social_Fb_Icon.svg'
import InstagramIcon from '../../../assets/Social_In_Icon.svg'
import TwitterIcon from '../../../assets/Social_Tw_Icon.svg'
import WhatsAppIcon from '../../../assets/Social_Wa_Icon.svg'

const Footer = () => {
  return (
    <Fragment>
        <footer className="flex flex-col w-12/12 h-4/5 bg-white text-black">
            {/* Separador superior */}
            <hr className="bg-hrFooter h-1 my-0 border-0"></hr>
            {/* Seccion de redes sociales y ubicacion de la Gapper */}
            <section className="text-gapper-color-footer flex flex-col items-center justify-center w-12/12 h-4/5 md:pt-4 md:w-11/12 md:flex-row">
              <div className="flex flex-col items-center justify-center w-12/12 h-4/5 md:float-left md:items-start md:justify-start">
                <div className="text-4xl font-semibold py-4 md:px-14">
                  <h2><img src={LetraGapper} alt="Letra G de Gapper" className="inline h-10"/> Gapper</h2>
                </div>
                <p className="text-lg break-all w-11/12 py-0 px-2 md:text-xs md:px-14">Gracias a la implementación tecnológica; logramos monitorizar y digitalizar los procesos de negocio de contratación, todo ello, de acuerdo a un plan estratégico previamente establecido.</p>
                <div className="flex flex-row items-center justify-center w-12/12 h-4/5 md:px-14">
                  <a href="#" target='_blank' className="py-3 px-2 md:scale-75 md:py-1 md:pt-12 md:px-1"><img src={FaceBookIcon} alt="FaceBook" className="inline" /></a>
                  <a href="#" target='_blank' className="py-3 px-2 md:scale-75 md:py-1 md:pt-12 md:px-1"><img src={InstagramIcon} alt="Instangram" className="inline" /></a>
                  <a href="#" target='_blank' className="py-3 px-2 md:scale-75 md:py-1 md:pt-12 md:px-1"><img src={TwitterIcon} alt="Twitter" className="inline" /></a>
                  <a href="#" target='_blank' className="py-3 px-2 md:scale-75 md:py-1 md:pt-12 md:px-1"><img src={WhatsAppIcon} alt="WhatsApp" className="inline" /></a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-12/12 h-4/5 md:float-right">
                <p className="text-lg break-all w-11/12 py-2 px-2 md:text-xs md:px-12 md:float-right">Prolongación Paseo de la Reforma 627. Of. 206, Santa Fe, Paso de las Lomas Cuajimalpa de Morelos, 01330 CDMX</p>
              </div>
            </section>
            {/* Seccion de telefonos y correo electronico */}
            <section className="flex flex-col text-white w-12/12 h-4/5 bg-backgroundMenu">
              <div className="flex flex-col items-center justify-center w-12/12 h-4/5 md:w-11/12 md:flex md:flex-row md:justify-between">
                <div className="order-1 py-1 md:order-1 md:pt-8 md:pb-9 md:pl-16">55 4140 0531</div>
                <div className="order-3 py-1 md:order-2 md:pt-8 md:pb-9">contacto@gapper.com.mx</div>
                <div className="order-2 py-1 md:order-3 md:pt-8 md:pb-9 md:pr-20">55 5488 1900</div>
              </div>
            </section>
        </footer>
    </Fragment>
  )
}

export default Footer
