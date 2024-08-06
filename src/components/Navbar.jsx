// import { NavLink } from 'react-router-dom'
// function Navbar() {

 
//   return (
//     <nav>
//       <div className="container-fluid">
//         <div className="navbar">
//           <li><NavLink className='caveat-text' to={'/'}>Home</NavLink></li>
//           <li><NavLink className='caveat-text' to={'/About'}>About</NavLink></li>
//           <li><NavLink className='caveat-text' to={'/Contact'}>Contact</NavLink></li>
//           <li><NavLink className='caveat-text' to={'/Skills'}>Skills</NavLink></li>
//           <li><NavLink className='caveat-text' to={'/Interests'}>Interests</NavLink></li>
//         </div>
//       </div>
//     </nav>

//   )
// }

// export default Navbar



import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ scrollToSection, refs }) {
  return (
    <nav>
      <div className="container-fluid">
        <div className="container navbar ">
          <li>
            <NavLink 
              className='roboto-condensed-text  fw-lighter' 
              to='/' 
              onClick={() => scrollToSection(refs.homeRef)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='roboto-condensed-text fw-lighter' 
              to='/About' 
              onClick={() => scrollToSection(refs.aboutRef)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='roboto-condensed-text fw-lighter' 
              to='/Contact' 
              onClick={() => scrollToSection(refs.contactRef)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='roboto-condensed-text fw-lighter' 
              to='/Skills' 
              onClick={() => scrollToSection(refs.skillsRef)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='roboto-condensed-text fw-lighter' 
              to='/Interests' 
              onClick={() => scrollToSection(refs.interestsRef)}
            >
              Interests
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
