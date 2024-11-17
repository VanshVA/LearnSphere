import React from 'react'
import './FAQSection.css'
import FAQ_DATA from '../../../constants/FAQ-TEXT/Faq_text'
const FAQSection = () => {
  console.log(FAQ_DATA)
  return (
    <section className='faq-section-container'>
      <div className="faq-section-heading">
        <h1>FAQS</h1>
      </div>
      <div className="faq-section-title-description-container">
        <div className="faq-section-title-description">
           {FAQ_DATA.map((data)=>{ return <div className="faq-section-title-description-box">
              <h4 className='faq-section-title'><span className='faq-section-title-count'>{data.faq_count} </span>{data.faq_section_title}</h4>
              <p className='faq-section-description'>
              {data.faq_section_description}
              </p>
            </div>})}
        </div>
      </div>

    </section>
  )
}

export default FAQSection