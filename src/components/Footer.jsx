import React from 'react'
import { IoAtOutline } from 'react-icons/io5'
import InstaIcon from '../assets/InstaIcon.png'
import XIcon from '../assets/XIcon.png'
import FacebookIcon from '../assets/FacebookIcon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='row' >
        <div className='col-md-8'>
          <h1 className='footer-title' >Let’s Talk</h1>
        </div>

        <div className='col-md-4' >
          <div className='row' >
            <div className='col-md-12 mb-2'>
              <div className='d-flex gap-2 align-items-center'>
                <div className='footer-cover'>
                  <IoAtOutline size={24} />
                  Pixelworld@gmail.com
                </div>
                <img src={InstaIcon} alt='insta' height={34} width={34} />
                <img src={XIcon} alt='insta' height={34} width={34} />
                <img src={FacebookIcon} alt='insta' height={34} width={34} />
              </div>
            </div>
            <div className='col-md-12 mb-2' >
              <div className=''></div>
              <input type='text' placeholder='Full Name' className='footer-input' />
              <input type='number' placeholder='Mobile' className='footer-input' />

            </div>
            <div className='col-md-6 mb-2' >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer