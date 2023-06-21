import  './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <span className='logo'>T r i p i f y</span>
          <div className='navItems'>
            <div className="navButton">Register</div>
            <div className="navButton">Login</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar