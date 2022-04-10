import React, {useState} from 'react'
import Logo from '../../assets/logo-3.svg'
import './Navbar.css';
import { HiShoppingCart } from 'react-icons/hi'
import { BiSearchAlt2} from 'react-icons/bi'
import { AiOutlineBars,
         AiOutlineClose

} from 'react-icons/ai'
const Navbar = () => {

  const[showMenu,setShowMenu] = useState(false);

  const toggleMenu=() => (
     setShowMenu(!showMenu)
  )
  return (
    <div className="all-nav">
       <div className="nav-content container">
          <div className="nav-left">
               <img src={Logo} alt='logo-img'></img>
          </div>
          <div className="nav-right">
               <ul className='nav-links' id={showMenu ? "showmobile" : "hideshowmobile"}>
                   <li><a href="#">Home</a></li>
                   <li><a href="#blog">Blog</a></li>
                   <li><a href="#services">Services</a></li>
                   <li><a href="#gallery">Gallery</a></li>
                   <li><a href="#contact">Contact</a></li>
               </ul>
               <div className="cart">
                   <HiShoppingCart className='cart-icon' size={20}/>
               </div>
               <div className="search">
                   <BiSearchAlt2 size={20}/>
               </div>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>

            {
              showMenu ? ( <AiOutlineClose size={20}/>) : ( <AiOutlineBars size={20}/>)
            }
               
               
          </div>
       </div>
    </div>
  )
}

export default Navbar
