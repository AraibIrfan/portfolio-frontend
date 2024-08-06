import React from 'react'

function Contact() {
  return (
    <div className='container'>
      <div className='formcontainer'>
        <form>
          <section className='name-email'>
            <input placeholder='Name' />
            <input placeholder='Email' />
          </section>
          <section className='textarea-container'>
            <textarea placeholder='Message' rows={12}/>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Contact