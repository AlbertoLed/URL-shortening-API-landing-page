import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa6'
import logo from '../../public/logo.svg'
import Button from './Button'

function Navbar() {
    return (
        <nav className='flex items-center px-6 py-10'>
            <img src={logo} alt="logo" />
            <ul className='fixed top-[100px] left-[7%] w-[86%] bg-violet-200 text-white rounded-xl flex flex-col items-center space-y-8 py-9 px-7 font-bold text-lg'>
                <li className='hover:cursor-pointer hover:opacity-80'>Features</li>
                <li className='hover:cursor-pointer hover:opacity-80'>Pricing</li>
                <li className='hover:cursor-pointer hover:opacity-80'>Resources</li>
                <hr className='w-full border-violet-100 opacity-30'/>
                <li className='hover:cursor-pointer hover:opacity-80'>Login</li>
                <li className='w-full'><Button variant='base' rounded='full' className='w-full'>Sign Up</Button></li>
            </ul>
            <IconContext.Provider value={{color: 'hsl(257, 7%, 63%)', size: '1.8em', className:'ml-auto t-violete hover:cursor-pointer'}}>
                <FaBars />
            </IconContext.Provider>
        </nav>
    )
}

export default Navbar