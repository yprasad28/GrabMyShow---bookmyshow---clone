import React from 'react'
import { TbBuildingCircus } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaFacebook, FaInstagram,FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='container2'>
      <h5 className='footer-head'><TbBuildingCircus/>  List your Shows  <span className='footer-sub-head'>Got a show, event, activity or a great experoience? Partner with us & get listed on GrabMyShow!</span>
      <button className='button'>Contact Today!</button>
      </h5>
     
      
      
        <div className="footer-card">
        <div className="row">
        <div className="col-4">
        <h1> <BiSupport className='logo'/></h1>
        <p className='support-para'>Customer Support</p>

          </div>

          <div className="col-4">
        <h1> <IoTicketSharp  className='logo'/></h1>
        <p className='support-para'>Resend Booking Confirmation</p>

          </div>

          <div className="col-4">
        <h1> <SlEnvolopeLetter   className='logo'/></h1>
        <p className='support-para'>Subscribe Newsletter</p>

          </div>

          
        </div>

        
        
      </div>

      <p  className='brand-logo'>-------- GrabMyShow! --------</p>

      <div className="row ">
        <div className="col-1">
          <div className="media-card">
            <h1 className='media'><FaFacebook/></h1>
          </div>

          

        </div>

        <div className="col-1">
          <div className="media-card">
            <h1 className='media'>< FaWhatsapp/></h1>
          </div>

          

        </div>

        <div className="col-1">
          <div className="media-card">
            <h1 className='media'>< FaInstagram /></h1>
          </div>

          

        </div>

        <div className="col-1">
          <div className="media-card">
            <h1 className='media'>< FaLinkedinIn  /></h1>
          </div>

          

        </div>

        <div className="col-1">
          <div className="media-card">
            <h1 className='media'><RiTwitterXFill/></h1>
          </div>

          

        </div>

        
      </div>

      <p class="copyright">Copyright &copy; 2025 Developed by Yamala Durgaparasad. All rights reserved.</p>
      <p className='copyright-2'>The content and images used on this site are practical purpose only. The usgae of the content and images on this webiste is intended to promote the works and no endorsment of the artist shall be impiled.</p>
      
    </div>
  )
}

export default Footer
