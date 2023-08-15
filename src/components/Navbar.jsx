import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa6'
import logo from '../../public/logo.svg'

function Navbar() {
    return (
        <nav className='flex items-center px-6 py-10'>
            <img src={logo} alt="logo" />
            <ul className='fixed top-[100px] left-[7%] w-[86%] bg-violet text-white rounded-xl flex flex-col items-center'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <hr />
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
            <IconContext.Provider value={{color: 'hsl(257, 7%, 63%)', size: '1.8em', className:'ml-auto t-violete'}}>
                <FaBars />
            </IconContext.Provider>
        </nav>
    )
}

export default Navbar