// import React from 'react'

// function About() {
//   return (
//     <div>This is About page</div>
//   )
// }

// export default About


import React from 'react';
import Frontend from '../images/website-layout.png'
import Backend from '../images/backend.png'
import Inspiration from '../images/inspiration.png'

function About({ ref }) {
  return (
    <div id="about" className='container about roboto-condensed-text fs-3 pt-2 fw-light text-center' ref={ref}>
      <div className='col-4 border-right'>
        <img src={Frontend} height='92' alt='logo' />
        Frontend Developer
        <p className='fs-4 text-center pt-1'>I like to code from scratch rather than using templates.</p>

        <div className='languages pt-2'>
          <h4 className='fw-light'>Tools I know:</h4>
          <ol>
            <li className='text-start  fw-light'>HTML</li>
            <li className='text-start fw-light'>CSS</li>
            <li className='text-start fw-light'>JavaScript</li>
            <li className='text-start fw-light'>React.js</li>
          </ol>
        </div>

      </div>

      <div className='col-4'>
        <img src={Backend} height='92' alt='logo' />
        Backend Developer
        <p className='fs-4 text-center pt-1' >I love core programming, working with databases and building complex functionality on the backend.</p>
        <div className='languages pt-2'>
          <h4 className='fw-light'>Tools I know:</h4>
          <ol>
            <li className='text-start fw-light'>Node.js</li>
            <li className='text-start fw-light'>Express.js</li>
            <li className='text-start fw-light'>PostgreSQL</li>
            <li className='text-start fw-light'>REST API</li>
            <li className='text-start fw-light'>EJS</li>

          </ol>
        </div>
      </div>

      <div className='col-4 border-left'>
        <img src={Inspiration} height='92' alt='logo' />
        My AI Enthusiasm
        <p className='fs-4 text-center pt-1' >The future is Artificial Intelligence! </p>
        <div className='languages pt-'>
          <h4 className='fw-light'>Coding Skills</h4>
          <ol>
            <li className='text-start fw-light'>Machine Learning</li>
          </ol>
          <h4 className='fw-light'>Key Concepts</h4>
          <ol>
            <li className='text-start fw-light'>Ensemble Learning</li>
            <li className='text-start fw-light'>Transfer Learning</li>
            <li className='text-start fw-light'>Natural Language Processing</li>
            <li className='text-start fw-light'>Reinforcement: Q-learning Algorithm</li>

          </ol>
        </div>
      </div>

    </div>
  );
}

export default About;
