import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa6'
import logo from '../../public/logo.svg'
import Button from './Button'
import classNames from 'classnames'

function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(true)
    
    const toggleMobileNav = () => setShowMobileNav(prev => !prev)

    //List sm device styles
    const smStyles = 'fixed top-[100px] left-[7%] w-[86%] bg-violet-200 text-white rounded-xl flex flex-col items-center space-y-8 py-9 px-7 font-bold text-lg'

    //List md device styles
    const mdStyles = 'md:static md:flex md:flex-row md:w-auto md:space-y-0 md:py-0 md:px-0 md:w-full md:bg-white md:text-violet-100 md:text-sm'
    
    const listStyles = classNames(smStyles, mdStyles, {'fixed': showMobileNav}, {'hidden': !showMobileNav})

    return (
        <nav className='flex items-center px-[7%] py-10 md:py-12 md:space-x-12 lg:px-[12%]'>
            <img src={logo} alt="logo" />
            <ul className={listStyles}>
                <li className='hover:cursor-pointer hover:opacity-80'>Features</li>
                <li className='hover:cursor-pointer hover:opacity-80 md:ml-7'>Pricing</li>
                <li className='hover:cursor-pointer hover:opacity-80 md:ml-7'>Resources</li>
                <div className='h-[1px] w-full bg-violet-100 opacity-30 md:hidden'/>
                <li className='hover:cursor-pointer hover:opacity-80 md:ml-auto'>Login</li>
                <li className='w-full md:w-auto md:ml-7'>
                    <Button variant='base' rounded='full' size='sm' className='w-full md:w-max'>Sign Up</Button>
                </li>
            </ul>
            <IconContext.Provider value={{color: 'hsl(257, 7%, 63%)', size: '1.8em', className:'ml-auto t-violete hover:cursor-pointer md:hidden'}}>
                <FaBars onClick={toggleMobileNav} />
            </IconContext.Provider>
        </nav>
    )
}

export default Navbar