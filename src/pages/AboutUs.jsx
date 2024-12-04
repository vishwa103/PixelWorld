import React from 'react'
import innovateDisplayImage from '../assets/InnovateDisplayImage.png'

import IlliminationImage from '../assets/IlliminationImage.png'

import IlliminationLogoOneImage from '../assets/IlliminationLogoOne.png'
import IlliminationLogoTwoImage from '../assets/IlliminationLogoTwo.png'
import IlliminationLogoThreeImage from '../assets/IlliminationLogoThree.png'
import IlliminationLogoFourImage from '../assets/IlliminationLogoFour.png'
import IlliminationLogoFiveImage from '../assets/IlliminationLogoFive.png'
import IlliminationLogoSixImage from '../assets/IlliminationLogoSix.png'
import IlliminationLogoSevenImage from '../assets/IlliminationLogoSeven.png'
import IlliminationLogoEightImage from '../assets/IlliminationLogoEight.png'
import IlliminationLogoNineImage from '../assets/IlliminationLogoNine.png'

import logoWhite from '../assets/logoWhite.png'
import { FiArrowRightCircle } from 'react-icons/fi'


const AboutUs = () => {
  return (
    <>
      <div className='innovateDisplay'>
        <div className='d-flex justify-content-center'>
          <img src={innovateDisplayImage} alt='Innovate Display' className='innovateDisplay-image' />
        </div>
        <div className='mt-5'>
          <div className='innovateDisplay-title'>
            With innovation at the heart of<br /> everything we do;
          </div>
          <div className='innovateDisplay-description'>
            Driven by innovation, we’re redefining visual storytelling with advanced LED solutions.
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Our Mission</div>
                <div className='innovateDisplay-card-description'>To provide innovative LED solutions that captivate audiences and transform spaces worldwide</div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card '>
                <div className='illimination-count'>
                  500+
                </div>
                <div className='illumination-count-text'>
                  Projects Completed
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Core Values</div>
                <div className='innovateDisplay-card-description'>
                  Innovation, Quality, Sustainability, and Client Focus
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card '>
                <div className='illimination-count'>
                  7K+
                </div>
                <div className='illumination-count-text'>
                  Of Happy Clients and Businesses
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Our Vision</div>
                <div className='innovateDisplay-card-description'>
                  Empowering brands to communicate with brilliance and clarity
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card '>
                <div className='illimination-count'>
                  70+
                </div>
                <div className='illumination-count-text'>
                  Cities Covered Worldwide
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
      <div className='illumination-about'>
        <h1 className='illumination-about-title'>Bringing Brilliance to<br /> Every Corner of the Globe</h1>
        <p className='illumination-about-description' >From local events to global spectacles, our LED solutions have illuminated stages, streets, and summits worldwide.</p>

        <img src={IlliminationImage} alt='Illimation' width="100%" className="my-5" />

        <div className='my-5'>
          <div className='illimination-about-subtitle'>Trusted By</div>

          <div className='d-flex flex-wrap justify-content-center mt-5 align-items-center'>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoOneImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoTwoImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoThreeImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoFourImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoFiveImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoSixImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoSevenImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoEightImage} alt='Client Logo' />
            </div>
            <div className='logo-container m-4'>
              <img src={IlliminationLogoNineImage} alt='Client Logo' />
            </div>

          </div>
        </div>

        <div className='row my-5 p-3'>
          <div className='col-md-9 my-5' >
            <h1 className='illumination-title text-start'>See Our Displays in Action</h1>
            <p className='illumination-about-description text-start'>Take a look at our past projects and see how we’ve helped clients bring their events to life. From corporate meetings to large-scale festivals, our LED solutions have made a difference</p>
          </div>
          <div className='col-md-3 my-5'>
            <div className='illimination-count-card '>
              <div className='illimination-count'>
                7K+
              </div>
              <div className='illumination-count-text'>
                Of Happy Clients and Businesses
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-partner'>
        <h1 className='about-title'>Partner with Us</h1>
        <div className='about-discover'>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <img src={logoWhite} alt='logoWhite' width="100%" height="100%" />
            </div>
            <div className='col-md-9 mb-3'>
              <div className='about-discover-text'>
              Discover Our Services <FiArrowRightCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs