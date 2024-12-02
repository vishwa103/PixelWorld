import React from 'react'
import heroImage from '../assets/HeroImage.png'
import innovateDisplayImage from '../assets/InnovateDisplayImage.png'
import ExploreImageOne from '../assets/ExploreImageOne.png'
import ExploreImageTwo from '../assets/ExploreImageTwo.png'
import ExploreImageThree from '../assets/ExploreImageThree.png'
import ExploreImageFour from '../assets/ExploreImageFour.png'
import ExploreImageFive from '../assets/ExploreImageFive.png'
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

import ImageOne from '../assets/ImageOne.png'
import ImageTwo from '../assets/ImageTwo.png'
import ImageThree from '../assets/ImageThree.png'
import ImageFour from '../assets/ImageFour.png'
import ImageFive from '../assets/ImageFive.png'

import WannaWorkImage from '../assets/WannaWorkImage.svg'

import { IoMdArrowForward } from 'react-icons/io'
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { CiDiscount1 } from 'react-icons/ci';
import { VscTools } from 'react-icons/vsc';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import FAQ from '../components/FAQ'


const cardData = [
    {
        title: 'Client-Centric',
        description: 'Focusing on your vision and needs to create tailored, impactful experiences.',
    },
    {
        title: 'Reliability',
        description: 'Ensuring seamless performance and timely execution for every project.',
    },
    {
        title: 'Quality',
        description: 'Committed to providing top-tier products and exceptional service.',
    },
];


const Home = () => {
    return (
        <div className='home'>
            <div className='hero-section'>
                <div className='hero-image-container'>
                    <img src={heroImage} alt='heroImage' width="100%" height="100%" className='hero-image' />
                    <div className='hero-content'>
                        <div className='d-flex align-items-center flex-column'>
                            <div className='hero-title'>Pixel World</div>
                            <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div>
                        </div>
                        <div className='hero-subcontent'>
                            <div>
                                <button className='hero-explore-btn'>
                                    Explore Our Product <IoMdArrowForward size={20} />
                                </button>
                            </div>
                            <div className=' hero-text'>From expert setup to ongoing technical support, we ensure your event shines bright with our high-quality LED displays and seamless service.</div>
                            <div>
                                <button className='buttonTwo'>Connect With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='innovateDisplay'>
                <div className='d-flex justify-content-center'>
                    <img src={innovateDisplayImage} alt='Innovate Display' className='innovateDisplay-image' />
                </div>
                <div className='mt-5'>
                    <div className='innovateDisplay-title'>
                        Your Trusted Partner in Every <br /> Display Innovation
                    </div>
                    <div className='innovateDisplay-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div>
                    <div className='row'>
                        {cardData.map((card, index) => (
                            <div key={index} className='col-lg-4 col-md-6'>
                                <div className='innovateDisplay-card'>
                                    <div className='innovateDisplay-card-title'>{card.title}</div>
                                    <div className='innovateDisplay-card-description'>{card.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='occasionReady'>
                <div className='occasionReady-title'>From Setup to Support, <br />
                    We've Got Your Occasions Covered</div>
                <div className='occasionReady-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div>
                <div className='row my-5'>
                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Scalable & Customized Solutions</div>
                                <IoExpand size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Need something unique? We offer custom LED display setups tailored to your event’s theme or special requirements.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>24/7 Technical Support</div>
                                <LuClock3 size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Our specialists are on standby to troubleshoot any issues, minimizing disruptions and maximizing impact
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>LED Display Rentals</div>
                                <CiDiscount1 size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Choose from a wide range of high-quality LED displays tailored for expos, summits, and events of any scale.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Custom Installation</div>
                                <VscTools size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Our expert team ensures seamless integration and installation of LED screens, customized to your venue and requirements.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>On-Site Support</div>
                                <IoPeopleOutline size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                From setup to breakdown, we provide full technical support to keep your visuals running smoothly.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Maintenance & Upgrades</div>
                                <IoSettingsOutline size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Keep your LED displays in top condition with our regular maintenance and upgrade services. We ensure your equipment is always performing at its best, with the latest technology.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Event Setup & Configuration</div>
                                <HiOutlineGlobeAlt size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Our experienced team will handle the full installation and configuration of your LED displays, ensuring optimal Functionalities, and seamless integration with your event environment.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='explore'>
                <h1 className='explore-title'>
                    Explore Our Range of <br /> Cutting-Edge LED Products
                </h1>

                <div className='row'>
                    <div className='col-md-12 my-5'>
                        <div className='row'>
                            <div className='col-md-5 mb-5'>
                                <img src={ExploreImageOne} alt='Entrance Arch LED' width="100%" />
                            </div>
                            <div className='col-md-7 mb-5'>
                                <div className='d-flex gap-2 flex-column  justify-content-center w-100 h-100   '>
                                    <h3 className='explore-subtitle'>Entrance Arch LED</h3>
                                    <p className='explore-description'>The Entrance Arch LED display transforms any entrance into a captivating and unforgettable experience. Ideal for expos, summits, or grand openings, our arch displays feature vibrant, ultra-bright LEDs and customizable content to make a lasting impression.</p>
                                    <div className="d-flex flex-row flex-wrap">
                                        <div className="explore-button ">
                                            High-Visibility
                                        </div>
                                        <div className="explore-button ">
                                            Customizable Content
                                        </div>
                                        <div className="explore-button ">
                                            Durable & Weatherproof
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-12 my-5'>
                        <div className='row'>
                            <div className='col-md-12 mb-5'>
                                <img src={ExploreImageTwo} alt='Flexible Wall LED' width="100%" />
                            </div>
                            <div className='col-md-12 mb-5'>
                                <div className='d-flex gap-2 flex-column  justify-content-center align-items-center w-100 h-100   '>
                                    <h3 className='explore-subtitle text-center'>Flexible Wall LED</h3>
                                    <p className='explore-description text-center'>
                                        The Flexible Wall LED is designed for maximum versatility, wrapping around curved walls or uniquely shaped structures.<br /> Perfect for museums, retail spaces, and creative installations, this display adds a touch of innovation.
                                    </p>
                                    <div className="d-flex flex-row flex-wrap">
                                        <div className="explore-button ">
                                            Bendable Panels
                                        </div>
                                        <div className="explore-button ">
                                            High Resolution
                                        </div>
                                        <div className="explore-button ">
                                            Lightweight Build
                                        </div>
                                        <div className="explore-button ">
                                            Dynamic Content
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-12 my-5'>
                        <div className='row'>
                            <div className='col-md-5 mb-5'>
                                <img src={ExploreImageThree} alt='Corporate Office Screen' width="100%" />
                            </div>
                            <div className='col-md-7 mb-5'>
                                <div className='d-flex gap-2 flex-column  justify-content-center w-100 h-100   '>
                                    <h3 className='explore-subtitle'>Corporate Office Screen</h3>
                                    <p className='explore-description'>
                                        Our Corporate Office LED screens bring your office to life, whether for conference rooms, lobbies, or digital dashboards. Enhance communication, showcase data, or impress clients with high-definition visuals.
                                    </p>
                                    <div className="d-flex flex-row flex-wrap">
                                        <div className="explore-button ">
                                            Crystal-Clear Clarity
                                        </div>
                                        <div className="explore-button ">
                                            Versatile Mounting
                                        </div>
                                        <div className="explore-button ">
                                            Professional Aesthetic
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 my-5'>
                        <div className='row'>
                            <div className='col-md-12 mb-5'>
                                <img src={ExploreImageFour} alt='Digital Kiosk' width="100%" />
                            </div>
                            <div className='col-md-12 mb-5'>
                                <div className='d-flex gap-2 flex-column  justify-content-center align-items-center w-100 h-100   '>
                                    <h3 className='explore-subtitle text-center'>Digital Kiosk</h3>
                                    <p className='explore-description text-center'>
                                        The Digital Kiosk is a versatile and engaging tool for wayfinding, information dissemination, and advertising. Suitable for <br /> malls, airports, events, and corporate environments, it provides intuitive, user-friendly interactions.
                                    </p>
                                    <div className="d-flex flex-row flex-wrap">
                                        <div className="explore-button ">
                                            Interactive Touchscreen
                                        </div>
                                        <div className="explore-button ">
                                            Custom Branding
                                        </div>
                                        <div className="explore-button ">
                                            Durable Design
                                        </div>
                                        <div className="explore-button ">
                                            Remote Management
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-12 my-5'>
                        <div className='row'>
                            <div className='col-md-6 mb-5'>
                                <img src={ExploreImageFive} alt='Corporate Office Screen' width="100%" />
                            </div>
                            <div className='col-md-6 mb-5'>
                                <div className='d-flex gap-2 flex-column  justify-content-center w-100 h-100   '>
                                    <h3 className='explore-subtitle'>360 Degree LED Screen</h3>
                                    <p className='explore-description'>
                                        Our 90 and 360 Degree LED Screens create immersive experiences, ensuring content is seen from all perspectives. Ideal for high-traffic areas like trade shows, malls, and stadiums.
                                    </p>
                                    <div className="d-flex flex-row flex-wrap">
                                        <div className="explore-button ">
                                            360-Degree Visibility
                                        </div>
                                        <div className="explore-button ">
                                            Vivid and Immersive
                                        </div>
                                        <div className="explore-button ">
                                            Modular Design
                                        </div>
                                        <div className="explore-button ">
                                            Interactive Capabilities
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='illumination'>
                <h1 className='illumination-title'>Bringing Brilliance to<br /> Every Corner of the Globe</h1>
                <p className='illumination-description' >From local events to global spectacles, our LED solutions have illuminated stages, streets, and summits worldwide.</p>

                <img src={IlliminationImage} alt='Illimation' width="100%" className="my-5" />

                <div className='my-5'>
                    <div className='illimination-subtitle'>Trusted By</div>

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

                    <div className='row my-5 p-3'>
                        <div className='col-md-9 my-5' >
                            <h1 className='illumination-title text-start'>See Our Displays in Action</h1>
                            <p className='illumination-description text-start'>Take a look at our past projects and see how we’ve helped clients bring their events to life. From corporate meetings to large-scale festivals, our LED solutions have made a difference</p>
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

                    <div className='row my-3 p-3'>
                        <div className='col-md-7 mb-3'>
                            <div className='illumination-card'>
                                <div className='illumination-card-image-container'>
                                <img src={ImageOne} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='illuminaion-card-title' > International Tech Expo</div>
                                    <div className='illuminaion-card-text'>Arch LED Display</div>
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
                                    <div className='illuminaion-card-text'>Flexible Wall LED</div>
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
                                    <div className='illuminaion-card-text'>360 Degree LED Screen</div>
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
                                    <div className='illuminaion-card-text'>Digital Kiosk</div>
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
                                    <div className='illuminaion-card-text'>Office LED Screens</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <FAQ/>

            <div style={{padding:"40px 0"}}>
                <img src={WannaWorkImage} alt="WannaWorkImage" width="100%"/>
            </div>

            
        </div>
    )
}

export default Home