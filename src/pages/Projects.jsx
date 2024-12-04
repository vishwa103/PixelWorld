import React from 'react'
import logoWhite from '../assets/logoWhite.png'
import { FiArrowRightCircle } from 'react-icons/fi'
import Explore from '../components/Explore'
import FAQ from '../components/FAQ'


import ImageOne from '../assets/ImageOne.png'
import ImageTwo from '../assets/ImageTwo.png'
import ImageThree from '../assets/ImageThree.png'
import ImageFour from '../assets/ImageFour.png'
import ImageFive from '../assets/ImageFive.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'

const Projects = () => {
    return (
        <div className='projects'>

            <div className='pt-5 d-flex flex-column align-items-center justify-content-center '>
                <h1 className='projects-title'>Innovative LED Displays for Every Need</h1>
                <p className='projects-description'>
                    Explore a wide range of high-performance LED solutions tailored <br /> for events, advertising, corporate setups, and more.
                </p>
                <button className='button-two' >Explore Our Products <FiArrowRightCircle /></button>
            </div>


            <div className='my-5'>
                <h1 className='projects-bg-title'>Discover Our Product Range</h1>
                <div className='project-explore'>
                    <Explore />
                </div>
            </div>

           
            <div className='py-5' >
                <div className='d-flex justify-content-between align-items-end '>
                    <h1 className='bestsellers-title'>Our Bestsellers</h1>
                    <span className='bestsellers-subtext'>Find the Right Fit</span>
                </div>

                <hr className='text-white'/>

                <div className='row my-3 p-3'>
                    <div className='col-md-7 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageOne} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' > International Tech Expo</div>
                                <div className='illuminaion-card-text'><BsArrowRightCircleFill size={24}/></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageTwo} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >National History Museum</div>
                                <div className='illuminaion-card-text'><BsArrowRightCircleFill size={24}/></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageThree} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Automotive Innovation Fair</div>
                                <div className='illuminaion-card-text'><BsArrowRightCircleFill size={24}/></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageFour} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Metropolitan Shopping Mall</div>
                                <div className='illuminaion-card-text'><BsArrowRightCircleFill size={24}/></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-7 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageFive} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Global Finance Corporation</div>
                                <div className='illuminaion-card-text'><BsArrowRightCircleFill size={24}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FAQ />
            <div className='about-partner'>
                <h1 className='about-title text-white'>Partner with Us</h1>
                <div className='about-discover'>
                    <div className='row'>
                        <div className='col-md-3 mb-3'>
                            <img src={logoWhite} alt='logoWhite' width="100%" height="100%" />
                        </div>
                        <div className='col-md-9 mb-3'>
                            <div className='about-discover-text'>
                                Get In Touch <FiArrowRightCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects