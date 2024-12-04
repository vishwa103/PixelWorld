import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuClock3 } from 'react-icons/lu'
import { VscTools } from 'react-icons/vsc'
import logoWhite from '../assets/logoWhite.png'

import { FiArrowRightCircle } from 'react-icons/fi'

const servicesData = [
    {
        title: 'Outdoor Advertising',
        items: [
            'Outdoor Advertising Dubai',
            'Outdoor Advertising Abu Dhabi',
            'Outdoor Advertising Ras Al Khaimah',
            'Outdoor Advertising Fujairah',
            'Outdoor Advertising Sharjah',
            'Outdoor Advertising Ajman',
            'Outdoor Advertising Al Ain',
            'Outdoor Advertising Umm Al Quwain',
            'Outdoor Advertising Fujairah City',
        ]
    },
    {
        title: 'Specific Ad Formats',
        items: [
            'Billboards',
            'Digital Billboards',
            'LED Screens',
            'Transit Ads',
            'Street Furniture',
            'Posters',
            'Flyers',
            'Banner Ads',
            'Hoardings',
        ]
    },
    {
        title: 'Mall & Location-Based Advertising',
        items: [
            'Mall Advertising Dubai Mall',
            'Mall Advertising Mall of Emirates',
            'Mall Advertising Dubai Marina Mall',
            'Mall Advertising Sharjah City Centre',
            'Mall Advertising Ajman City Centre',
            'Mall Advertising Mall of Al Ain',
            'Mall Advertising Fujairah City Centre',
            'Mall Advertising Marina Mall Abu Dhabi',
            'Mall Advertising Al Wahda Mall',
        ]
    },
    {
        title: 'Event & Transit-Based Advertising',
        items: [
            'Event Advertising Dubai Expo 2020',
            'Event Advertising Abu Dhabi Formula 1',
            'Event Advertising Dubai Shopping Festival',
            'Transit Advertising Dubai Metro',
            'Transit Advertising Abu Dhabi Buses',
            'Transit Advertising Sharjah Tram',
            'Transit Advertising Ajman Public Transport',
            'Transit Advertising Ras Al Khaimah Buses',
            'Event Advertising Sharjah Film Festival',
        ]
    },
    {
        title: 'Digital & Online Advertising',
        items: [
            'Social Media Ads',
            'Google Display Ads',
            'YouTube Video Ads',
            'Email Marketing',
            'Content Marketing',
            'Influencer Marketing',
            'SEO & SEM Campaigns',
            'PPC Ads',
            'Programmatic Advertising',
        ]
    },
    {
        title: 'Media Production',
        items: [
            'Video Production Dubai',
            'Photography Services',
            'Audio Production',
            '3D Animation',
            'Post-production Editing',
            'Graphic Design',
            'Branding & Logo Design',
            'Corporate Video Production',
            'TV Commercials',
        ]
    }
];

const Services = () => {


    return (
        <div className='services'>
            <div className='services-hero'>
                <h1 className='services-title'>Tailored Advertising <br /> Solutions for Every Occasion</h1>
                <p className='services-description'>Innovative LED Displays for Every Need Explore a wide range of high-performance LED solutions tailored for events,<br /> advertising, corporate setups, and more.</p>
                <button className='button-two'>Discover Our Services <FiArrowRightCircle /></button>
            </div>

            <div>
                <h1 className='services-bg-title'>From Concept to Completion</h1>
                <div className='occasionReady-services' >
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
            </div>

            <div>
                <h1 className='services-subtitle'>We Don’t Stop There...</h1>

                {/* Loop through each category and its items */}
                {servicesData.map((service, index) => (
                    <div className='mb-5' key={index}>
                        <h4 className='mb-4'>{service.title}</h4>

                        <div className='d-flex flex-wrap'>
                            {/* Map over the items of each category */}
                            {service.items.map((item, idx) => (
                                <div className='service-item' key={idx}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='my-5'>
                <h1 className='services-subtitle text-center'>Why Choose Us?</h1>
                <p className='services-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</p>

                <div className='row' >
                <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Experience Across Industries</div>
                <div className='innovateDisplay-card-description'>
                From events to corporate campaigns, we bring expertise to every project
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Customized Solutions</div>
                <div className='innovateDisplay-card-description'>
                Tailored services to match your unique needs and goals
                </div>
              </div>
            </div>


            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded '>
                <div className='innovateDisplay-card-title'>Global Reach</div>
                <div className='innovateDisplay-card-description'>
                Our work spans locations worldwide, ensuring your brand is seen everywhere
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
                                Submit Your Inquiry <FiArrowRightCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services