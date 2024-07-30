import React from 'react'

const AboutMe = () => {
  return (
    <div id='about-me-page'>
        <div className='left-side'>
          <div id='me-card'>
            <img src='/selfie-img.jpg' alt='photo of self'/>
            <h2> Caitlin Anderson | Digital Design Student </h2>
            <p> I love to design and create digital pieces of art. About me as a developer and designer,
            I really enjoy creating clear and beautiful layouts for websites and webapps and getting to
            know the needs and wants of users. </p>
          </div>
        </div>

        <div className='right-side'> 

          <h2> Examples of my work </h2>

          <div id='image-grid-container'>
            <img src='/art-of-food(2).png' className='grid-image'/>
            <img src='/accommodation(2).png' className='grid-image'/>
            <img src='art-of-food(1).png' className='grid-image'/>
            <img src='jewellery-supreme(1).png' className='grid-image'/>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
