import React from 'react'
import "./Footer.css"
import logo from "../../../assets/favicon.svg"
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <section className='footer-section'>
            <div className="footer-details-section">
                <div className="footer-logo-detail">
                    <div className="footer-logo">
                 <img src={logo}/><span>LearnSphere</span> 
                    </div>
                      <p>Saudi Arabia has been accused of using anti-terror laws to suppress free expression and failing to carry out independent inquiries into its Yemen</p>
                </div>
                <div className="footer-search">
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly .
                    </p>
                    <div className="footer-input">
                    <input type="email" placeholder='Enter your email' required/>
                     <div className="send-email-btn">
                        <Link to={""}><i className="ri-send-plane-fill"></i></Link>
                     
                     </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy-right-section">
                <h4>Copyright ©2024 All rights reserved | This template is made with  by LearnSphere</h4>
            </div>
        </section>
    )
}

export default Footer