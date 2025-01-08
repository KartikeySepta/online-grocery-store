import { LayoutGrid, SearchCheckIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center p-2'>
    <div className='flex items-center gap-8'>

    <Image src='/logo.png' alt='logo'
    width={150}
    height={100}
    />
        <h2 className='flex gap-2 items-center
        border rounded-full p-2 px-10 bg-slate-200
    
        '> 
            <LayoutGrid className='h-5 w-5' /> Category</h2>-0  

            <div className='md:flex gap-3 item-center border rounded-full p-2 px-5
            hidden
            ' >
                <SearchIcon/>
                <input type="text" 
                placeholder='Search'
                className='outline-none'/>
            </div>
    
    </div>
    </div>
  )
}

export default Header