import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import innovateDisplayImage from '../assets/InnovateDisplayImage.png'

import IlliminationImage from '../assets/IlliminationImage.png'
import { Helmet } from 'react-helmet';
import ClientLogo1 from '../assets/ClientLogoOne.png'
import ClientLogo2 from '../assets/ClientLogoTwo.png'
import ClientLogo3 from '../assets/ClientLogoThree.png'
import ClientLogo4 from '../assets/ClientLogoFour.png'
import ClientLogo5 from '../assets/ClientLogoFive.png'
import ClientLogo6 from '../assets/ClientLogoSix.png'
import ClientLogo7 from '../assets/ClientLogoSeven.png'
import ClientLogo8 from '../assets/ClientLogoEight.png'
import ClientLogo9 from '../assets/ClientLogoNine.png'
// import ClientLogo10 from '../assets/ClientLogoTen.png'
// import ClientLogo11 from '../assets/ClientLogoEleven.png'
// import ClientLogo12 from '../assets/ClientLogoTwelve.png'
// import ClientLogo13 from '../assets/ClientLogo13.png'
// import ClientLogo14 from '../assets/ClientLogo14.png'
// import ClientLogo15 from '../assets/ClientLogo15.png'
// import ClientLogo16 from '../assets/ClientLogo16.png'
// import ClientLogo17 from '../assets/ClientLogo17.png'
// import ClientLogo18 from '../assets/ClientLogo18.png'
// import ClientLogo19 from '../assets/ClientLogo19.png'
// import ClientLogo20 from '../assets/ClientLogo20.png'
// import ClientLogo21 from '../assets/ClientLogo21.png'
// import ClientLogo22 from '../assets/ClientLogo22.png'
// import ClientLogo23 from '../assets/ClientLogo23.png'
// import ClientLogo24 from '../assets/ClientLogo24.png'

import ImageOne from '../assets/ImageOne.jpg'
import ImageTwo from '../assets/ImageTwo.png'
import ImageThree from '../assets/ImageThree.jpg'
import ImageFour from '../assets/ImageFour.png'
import ImageFive from '../assets/ImageFive.jpg'

import WannaWorkImage from '../assets/WannaWorkImage.svg'

import { IoMdArrowForward } from 'react-icons/io'
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { CiDiscount1 } from 'react-icons/ci';
import { VscTools } from 'react-icons/vsc';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import FAQ from '../components/FAQ'
import Explore from '../components/Explore'
import { FaWhatsapp } from 'react-icons/fa'


const cardData = [
    {
        // title: 'Client-Centric',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier brings award-winning LED solutions to the LED industry by delivering high-quality, customizable, and durable products. As one of the leading companies in the UAE with international recognition, we specialize in the production and installation of indoor and outdoor LED screens and the supply of rental and staging products.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a solutions-oriented approach, we continuously innovate and develop new products based on our customers' needs, regardless of the project size. Recognized with multiple awards, our one-of-a-kind and imaginative visual projects cater to a wide range of clients, amplifying creativity while ensuring cost-effective and reliable solutions.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br/>
<br/><strong>Our Expertise</strong><br/><br/>
At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
<br/>•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
<br/>•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
<br/>•	LED Signage: Digital signage for information, food menus, and shop signage.
<br/>•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
<br/>•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
<br/>•	Transparent LED: Innovative displays for retail and creative environments.
<br/>•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br/>
<br/><strong>Services</strong><br/>

<br/><b>Indoor Solutions</b><br/>
•	Retail Indoor LED
<br/>•	LED for Schools
<br/>•	LED Screens for Meeting Rooms
<br/>•	Flexible LED
<br/>•	90 and 360-degree LED Screens
<br/>•	Entrance Frame LED Screens
<br/>•	Digital Signage for Information
<br/>•	Shop Signage LED
<br/>•	LED for Corporate Offices
<br/>
<b>
Outdoor Solutions</b>
<br/>•	Outdoor LED Screens for Billboards
<br/>•	Digital Signage for Food Menus
<br/>•	Outdoor Mesh LED
<br/>•	Outdoor Net LED<br/>
<b>
Specialty LED Solutions</b><br/>
•	LED Digital Posters
<br/>•	3D LED Stands
<br/>•	Floor LEDs
<br/>•	Digital Kiosks
<br/>•	Ceiling LEDs
<br/>•	Creative Retail LED Screens
<br/>•	Transparent LEDs for Retail
<br/>
<br/>
Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology.`,
    },
    // {
    //     title: 'Reliability',
    //     description: 'Ensuring seamless performance and timely execution for every project.',
    // },
    // {
    //     title: 'Quality',
    //     description: 'Committed to providing top-tier products and exceptional service.',
    // },
];


const Home = () => {
    return (
        <div className='home'>
            <Helmet>
                <title>Pixelworld | Innovative LED Advertising Solutions</title>
                <meta name="description" content="Discover Pixelworld's innovative LED screen advertising solutions. From indoor and outdoor LED screens to traditional advertising, we bring your brand to life." />
                <meta name="keywords" content="LED advertising, LED screens, outdoor billboards, indoor video walls, custom LED solutions, Pixelworld" />
                <link rel="canonical" href="https://pixelworld.ae/" />
            </Helmet>
            <div className='hero-section'>
                <div className='hero-image-container'>
                    <img src={heroImage} alt='heroImage' width="100%" height="100%" className='hero-image' />
                    <div className="hero-image-overlay"></div>
                    <div className='hero-content'>
                        <div className='d-flex align-items-center flex-column'>
                            <h2 className='hero-title'>Pixel World</h2>
                            {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
                        </div>
                        <div className='hero-subcontent'>
                            <div>
                                <button className='hero-explore-btn'>
                                    Chat with Expert <IoMdArrowForward size={20} />
                                </button>
                            </div>
                            <h2 className=' hero-text'>From expert setup to ongoing technical support, Dubai LED Screen Company ensures your event shines bright with our high-quality LED display.</h2>
                            <div className='d-flex flex-column gap-1'>
                                <a href='https://wa.me/+971585321473' className='text-decoration-none' target='_blank'><button className='buttonTwo d-flex align-items-center gap-2'><FaWhatsapp /> +971585321473</button></a>
                                <a href='https://wa.me/+971555131473' className='text-decoration-none' target='_blank'><button className='buttonTwo d-flex align-items-center gap-2'><FaWhatsapp /> +971555131473</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='innovateDisplay'>
                <div className='d-flex justify-content-center'>
                    <img src={innovateDisplayImage} alt='Innovate Display' className='innovateDisplay-image' width="100%" height="100%" />
                </div>
                <div className='mt-5'>
                    {/* <h1 className='innovateDisplay-title'>
                        Your Trusted Partner in Every <br /> Display Innovation
                    </h1> */}
                    {/* <div className='innovateDisplay-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div> */}
                    <div className='row mt-5'>
                        {cardData.map((card, index) => (
                            <div key={index} className='col-lg-12  mb-2'>
                                <div className='innovateDisplay-card'>
                                    <div className='innovateDisplay-card-title'>{card.title}</div>
                                    {/* <h2 className='innovateDisplay-card-description' dangerouslySetInnerHTML={{ __html: card?.description }} />
                                     */}
                                    <h2 className='innovateDisplay-card-description'>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier brings award-winning LED solutions to the LED industry by delivering high-quality, customizable, and durable products. As one of the leading companies in the UAE with international recognition, we specialize in the production and installation of indoor and outdoor LED screens and the supply of rental and staging products.
                                        <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a solutions-oriented approach, we continuously innovate and develop new products based on our customers' needs, regardless of the project size. Recognized with multiple awards, our one-of-a-kind and imaginative visual projects cater to a wide range of clients, amplifying creativity while ensuring cost-effective and reliable solutions.
                                        <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br />
                                        <br /><strong>Our Expertise</strong><br /><br />
                                        At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
                                        <br />•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
                                        <br />•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
                                        <br />•	LED Signage: Digital signage for information, food menus, and shop signage.
                                        <br />•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
                                        <br />•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
                                        <br />•	Transparent LED: Innovative displays for retail and creative environments.
                                        <br />•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br />
                                        <br /><strong>Services</strong><br /><br />
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className=' bg-white p-3 shadow rounded h-100'>
                                                <b>Indoor Solutions</b><br /><br />
                                                •	Retail Indoor LED
                                                <br />•	LED for Schools
                                                <br />•	LED Screens for Meeting Rooms
                                                <br />•	Flexible LED
                                                <br />•	90 and 360-degree LED Screens
                                                <br />•	Entrance Frame LED Screens
                                                <br />•	Digital Signage for Information
                                                <br />•	Shop Signage LED
                                                <br />•	LED for Corporate Offices
                                                <br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Outdoor Solutions</b><br />
                                                <br />•	Outdoor LED Screens for Billboards
                                                <br />•	Digital Signage for Food Menus
                                                <br />•	Outdoor Mesh LED
                                                <br />•	Outdoor Net LED<br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Specialty LED Solutions</b><br /><br />
                                                •	LED Digital Posters
                                                <br />•	3D LED Stands
                                                <br />•	Floor LEDs
                                                <br />•	Digital Kiosks
                                                <br />•	Ceiling LEDs
                                                <br />•	Creative Retail LED Screens
                                                <br />•	Transparent LEDs for Retail
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology.
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Explore />

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

            <div>

                <div className='row my-3 p-3'>
                    <div className='col-md-7 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageOne} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Quttainah Specialized Hospital</div>
                                <div className='illuminaion-card-text'>Outdoor LED Screen </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageTwo} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Ministry of Finance - Dubai </div>
                                <div className='illuminaion-card-text'>Indoor curve LED Screen</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageThree} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >VIP Design Luxury AutoMobile - Dubai</div>
                                <div className='illuminaion-card-text'>Indoor LED Screen</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageFour} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >NARA Lounge & Bar -
                                    Cluster A
                                </div>
                                <div className='illuminaion-card-text'>Indoor LED Screen</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-7 mb-3'>
                        <div className='illumination-card'>
                            <div className='illumination-card-image-container'>
                                <img src={ImageFive} alt='Card Image' className='illumination-card-image' width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='illuminaion-card-title' >Daylone marine (YACHT)</div>
                                <div className='illuminaion-card-text'>Outdoor LED Screen with Cabinet</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='illumination'>
                    <h2 className='illumination-title'>Bringing Brilliance to<br /> Every Corner of the Globe</h2>
                    <p className='illumination-description' >From local events to global spectacles, our LED solutions have illuminated stages, streets, and summits worldwide.</p>

                    <img src={IlliminationImage} alt='Illimation' width="100%" height="100%" className="my-5" />

                    <div className='my-5'>
                        <div className='illimination-subtitle'>Trusted By</div>

                        <div className='d-flex flex-wrap justify-content-center mt-5 align-items-center'>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo1} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo2} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo3} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo4} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo5} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo6} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo7} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo8} alt='Client Logo' width="100%" height="100%" />
                            </div>
                            <div className='logo-container m-4'>
                                <img src={ClientLogo9} alt='Client Logo' width="100%" height="100%" />
                            </div>

                        </div>
                    </div>

                    <div className='row my-5 p-3'>
                        <div className='col-md-9 my-5' >
                            <h2 className='illumination-title text-start'>See Our Displays in Action</h2>
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
                </div>



            </div>

            <FAQ showAll={false} />

            <div style={{ padding: "40px 0" }}>
                <img src={WannaWorkImage} alt="WannaWorkImage" width="100%" height="100%" />
            </div>


        </div>
    )
}

export default Home