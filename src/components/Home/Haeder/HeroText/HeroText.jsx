import LetraGapper from '../../../../assets/LetraGapper.png'
import PathDashedLine from '../../../../assets/Path_Dashed_Line.svg'

const HeroText = () => {
  return (
    <>
      <article className='
        flex items-center float-center justify-center text-white w-12/12 h-4/5 
        md:w-6/12 md:text-start md:grid md:justify-start md:items-start md:pt-20 md:pl-14 md:float-left md:flex-col'>
        <div className='
          grid place-items-center w-11/12 
          md:justify-start md:float-left md:grid md:place-items-start'>
          <h1 className='text-4xl font-black md:text-5xl'>SE<img src={LetraGapper} alt="Letra G de Gapper" className='inline h-10 md:h-12'></img>UROS</h1>
          <h2 className='text-2xl break-all font-semibold md:text-4xl'>en cada momento</h2>
          <h2 className='text-2xl break-all font-semibold md:text-4xl'>de nuestra vida</h2>
          <p className='text-xl break-all font-medium md:text-2xl md:w-11/12'>Te acompañamos día a día en la protección de tu patrimonio y de tu familia</p>
          <div className='w-12/12'>
            <img src={PathDashedLine} alt="Linea punteada" className='hidden md:block md:pt-4 md:pl-16 md:w-full md:h-1/2 md:object-cover'></img>
          </div>
        </div>
      </article>
    </>
  )
}

export default HeroText
