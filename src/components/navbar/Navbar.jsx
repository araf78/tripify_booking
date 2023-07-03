import  './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <span data-aos="zoom-in" data-aos-duration="1900" className='logo'>T r i p i f y</span>
          <div className='navItems'>
            <div data-aos="flip-right" data-aos-duration="1900" className="navButton">Register</div>
            <div data-aos="flip-left" data-aos-duration="1900" className="navButton">Login</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar