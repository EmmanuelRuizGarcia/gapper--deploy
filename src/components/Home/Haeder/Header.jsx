import HeroText from './HeroText/HeroText'
import NavBar from './NavBar/NavBar'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className='bg-HeroHome bg-cover bg-center w-full h-screen py-0 md:px-0 px-0 bg-backgroundMenu'>
        <NavBar />
        <HeroText />
      </header>
    </Fragment>
  )
}

export default Header
