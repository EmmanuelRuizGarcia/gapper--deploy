import { useState } from 'react';

import Logo from '../../../../assets/Logo.png';
import NavLinks from './NavLinks';
import SearchInput from './SearchInput';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex justify-between bg-backgroundMenu text-white py-4 px-3'>
      <img src={Logo} alt="Logo Gapper" className='h-9 cursor-pointer' />
      <ul className='md:flex hidden items-center gap-10'>
        <NavLinks />
        <SearchInput />
      </ul>
      {/* Movil NavBar */}
      <ul className={`fixed top-0 z-50 bg-backgroundMenu w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? "right-0" : "right-[-100%]"}`}>
        <NavLinks />
        <SearchInput />
      </ul>
      <div className='text-2xl md:hidden z-50' onClick={()=>setOpen(!open)}>
        <ion-icon name="menu"></ion-icon>
      </div>
    </nav>
  )
}

export default NavBar;
