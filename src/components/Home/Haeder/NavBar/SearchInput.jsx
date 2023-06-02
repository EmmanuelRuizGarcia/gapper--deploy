// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaSistrix } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <div className='flex justify-between py-3 px-6 bg-backgroundMenu border-none'>
      <form>
        <div className='relative flex item-center text-gray-400'>
          <FaSistrix size={28} name="search" className='text-black absolute ml-13' />
          <input 
              type='text'
              name='search'
              placeholder='Buscar'
              autoComplete='off'
              aria-label='Buscar'
              className='
                w-full
                h-7
                pr-3
                pl-10 
                py-2 
                font-semibold 
                placeholder-gray-500 
                text-black 
                rounded-2xl 
                border-none 
                ring-2 
                ring-gray-300 
                focus:ring-gray-500 
                focus:ring-2'
              ></input>
        </div>
      </form>
    </div>
  )
}

export default SearchInput
