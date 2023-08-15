import logo from '../../public/logo.svg'
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div>
                <div>Login</div>
                <div>Sign Up</div>
            </div>
        </nav>
    )
}

export default Navbar