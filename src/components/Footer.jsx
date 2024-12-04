import React from 'react'
import { IoAtOutline } from 'react-icons/io5'
import InstaIcon from '../assets/InstaIcon.png'
import logoWhite from '../assets/logoWhite.png'
import XIcon from '../assets/XIcon.png'
import FacebookIcon from '../assets/FacebookIcon.png'
import footerImage from '../assets/footerImage.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='row' >
        <div className='col-md-5 col-lg-8'>
          <h1 className='footer-title' >Let’s Talk</h1>
        </div>

        <div className='col-md-7 col-lg-4' >
          <div className='row' >
            <div className='col-md-12 mb-2'>
              <div className='d-md-flex align-items-center row'>
                <div className='col-md-8'>
                <div className='footer-cover '>
                  <IoAtOutline size={24} />
                  Pixelworld@gmail.com
                </div>
                </div>
                <div className=' col-md-4' >
                <div className='d-flex gap-3 my-3 flex-wrap'>
                <img src={InstaIcon} alt='insta' height={24} width={24} className='' />
                <img src={XIcon} alt='insta' height={24} width={24} className='' />
                <img src={FacebookIcon} alt='insta' height={24} width={24} className='' />
                </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-2' >
              <input type='text' placeholder='Full Name' className='footer-input' width="100%" />
             
            </div>
            <div className='col-md-6 mb-2' >
            <input type='number' placeholder='Mobile' className='footer-input' width="100%" />

            </div>

            <div className='col-md-12 mb-2'>
              <div className='footer-cover'>
                <input type='text' className='footer-input-two' placeholder='let us know about your magic '></input>
                <button className='footer-btn'>Reach Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-description'>Let’s craft a unique experience together. Get in touch today to start your journey with Us</div>

      <div className='footer-image-container'>
        <img src={footerImage}  alt='footerImage' className='footer-image' width="100%"/>
      </div>

      <div className='d-sm-flex justify-content-between align-items-center'>
        <div className='footer-logo'>
          <img src={logoWhite} alt='logoWhite' width={20} height={20} />
          <span>Pixel World</span>
        </div>
        <div className='d-flex flex-wrap gap-3 text-white'>
          <div>Gallery</div>

          <div>Services</div>

          <div>Product</div>

          <div>Contact</div>

        </div>
      </div>
    </div>
  )
}

export default Footer