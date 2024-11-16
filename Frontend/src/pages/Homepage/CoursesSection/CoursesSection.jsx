import React from 'react'
import './CoursesSection.css'

const CoursesSection = () => {
  return (
    <div className='main'>
      { /* OUR TRANDING COURSES */}
      <section className='firstSection'>
        <h1>Our Trending Courses</h1>
        <div className='container'>
          <div className='card'>
            <div className='Cardimage'>
              <img src='src/assets/Book.jpg' alt='photo'></img>
            </div>
            <h3>How to write a powerful speech</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Culpa officia sunt, excepturi dolores itaque cumque.</p>
            <div className='btn'>
              <button>Enroll the course</button>
              <h2>$ 29.99</h2>
            </div>
          </div>




          <div className='card'>
            <div className='Cardimage'>
              <img src='src/assets/leadership.jfif' alt='photo'></img>
            </div>
            <h3>How to write a powerful speech</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Culpa officia sunt, excepturi dolores itaque cumque.</p>
            <div className='btn'>
              <button>Enroll the course</button>
              <h2>$ 29.99</h2>
            </div>

          </div>




          <div className='card'>
            <div className='Cardimage'>
              <img src='src/assets/resumeWriting.jfif' alt='photo'></img>
            </div>
            <h3>How to write a powerful speech</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Culpa officia sunt, excepturi dolores itaque cumque.</p>
            <div className='btn'>
              <button>Enroll the course</button>
              <h2>$ 29.99</h2>
            </div>

          </div>

          




          
        </div>



      </section>


      <section className='secondSection'>
        <div className='content'>
          <h2>Education is the foundation upon which we build our future</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non repellat at dolorum est nemo delectus
            itaque soluta nam repellendus quia tempora numquam nihil ad illum culpa beatae libero,
            olestiae excepturi quas quibusdam quisquam? At, nemo mollitia? 
           quam molestiae excepturi quas quibusdam quisquam? At, nemo mollit
           cepturi quas quibusdam quisquam? At, nemo mollit</p>

        </div>
        <div className='Contentimage'>
         <img src='src/assets/Book.jpg'></img>
        </div>

      </section>
    </div>
  )
}

export default CoursesSection