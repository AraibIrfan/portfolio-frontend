// import React from 'react'
// import 'animate.css';
// import image from '../images/avatar.png'
// import HTML from '../images/icons8-html-5-48 (1).png'
// import CSS from '../images/icons8-css3-48.png' 
// import ReactLogo from '../images/icons8-react-80.png'
// import Nodejs from '../images/icons8-node-js-48.png'
// import Postgres from '../images/icons8-postgresql-48.png'
// import JS from '../images/icons8-javascript-48.png'

// function Home() {

//   return (
//     <>
//       <div className='text container-fluid '>
//       <img src={image} alt='avatar' height='500px'/>
//       <h1 className='caveat-text'>Frontend Developer, Backend Developer & AI Enthusiast</h1>
//       <h3 className='caveat-text'>It's what I do and it's what I love.</h3>
//       </div>
//       <div className='container-fluid logo-container'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-2'><img src={HTML}  alt='logo'/></div>
//           <div className='col-2'><img src={CSS}  alt='logo'/></div>
//           <div className='col-2'><img src={JS} alt='logo'/></div>
//           <div className='col-2'><img src={Nodejs}  alt='logo'/></div>
//           <div className='col-2'><img src={ReactLogo} alt='logo'/></div>
//           <div className='col-2'><img src={Postgres} alt='logo'/></div>

//         </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Home

// import React, { useRef, useEffect } from 'react';
import 'animate.css';
import image from '../images/avatar.png';
import HTML from '../images/icons8-html-5-48 (1).png';
import CSS from '../images/icons8-css3-48.png';
import ReactLogo from '../images/icons8-react-80.png';
import Nodejs from '../images/icons8-node-js-48.png';
import Postgres from '../images/icons8-postgresql-48.png';
import JS from '../images/icons8-javascript-48.png';

function Home({ ref }) {
  return (
  <>
      <div className='text ' id="home" ref={ref}>
        <img src={image} alt='avatar' height='500px' />
        <h1 className='roboto-condensed-text'>Frontend Developer, Backend Developer & AI Enthusiast</h1>
        <h3 className='roboto-condensed-text'>It's what I do and it's what I love.</h3>
      </div>
      <div className='container-fluid logo-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'><img src={HTML} alt='logo' /></div>
            <div className='col-2'><img src={CSS} alt='logo' /></div>
            <div className='col-2'><img src={JS} alt='logo' /></div>
            <div className='col-2'><img src={Nodejs} alt='logo' /></div>
            <div className='col-2'><img src={ReactLogo} alt='logo' /></div>
            <div className='col-2'><img src={Postgres} alt='logo' /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
