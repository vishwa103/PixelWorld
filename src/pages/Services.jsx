import React from 'react';
import { Helmet } from 'react-helmet';
import { CiDiscount1 } from 'react-icons/ci';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { VscTools } from 'react-icons/vsc';
import OutdoorAdvertising1 from '../assets/ServiceItems/OutdoorAdvertising1.jpg';
import OutdoorAdvertising2 from '../assets/ServiceItems/OutdoorAdvertising2.jpg';
import OutdoorAdvertising3 from '../assets/ServiceItems/OutdoorAdvertising3.jpg';
import OutdoorAdvertising4 from '../assets/ServiceItems/OutdoorAdvertising4.jpg';
import OutdoorAdvertising5 from '../assets/ServiceItems/OutdoorAdvertising5.jpg';
import OutdoorAdvertising6 from '../assets/ServiceItems/OutdoorAdvertising6.jpg';
import OutdoorAdvertising7 from '../assets/ServiceItems/OutdoorAdvertising7.jpg';
import OutdoorAdvertising8 from '../assets/ServiceItems/OutdoorAdvertising8.jpg';
import OutdoorAdvertising9 from '../assets/ServiceItems/OutdoorAdvertising9.jpg';
import SpecificADFormats1 from '../assets/ServiceItems/SpecificADFormats1.jpg';
import SpecificADFormats2 from '../assets/ServiceItems/SpecificADFormats2.jpg';
import SpecificADFormats3 from '../assets/ServiceItems/SpecificADFormats3.jpg';
import SpecificADFormats4 from '../assets/ServiceItems/SpecificADFormats4.jpg';
import SpecificADFormats5 from '../assets/ServiceItems/SpecificADFormats5.jpg';
import SpecificADFormats6 from '../assets/ServiceItems/SpecificADFormats6.jpg';
import SpecificADFormats7 from '../assets/ServiceItems/SpecificADFormats7.jpg';
import SpecificADFormats8 from '../assets/ServiceItems/SpecificADFormats8.jpg';
import SpecificADFormats9 from '../assets/ServiceItems/SpecificADFormats9.jpg';
import MallAndLocationBasedAdvertising1 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (1).jpg';
import MallAndLocationBasedAdvertising2 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (2).jpg';
import MallAndLocationBasedAdvertising3 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (3).jpg';
import MallAndLocationBasedAdvertising4 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (4).jpg';
import MallAndLocationBasedAdvertising5 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (5).jpg';
import MallAndLocationBasedAdvertising6 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (6).jpg';
import MallAndLocationBasedAdvertising7 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (7).jpg';
import MallAndLocationBasedAdvertising8 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (8).jpg';
import MallAndLocationBasedAdvertising9 from '../assets/ServiceItems/MallAndLocatioBasedAdvertising (9).jpg';
import OccasionReady from '../components/OccasionReady';

const servicesData = [
  {
    title: 'Outdoor Advertising',
    items: [
      { text: 'Outdoor Advertising Dubai', image: OutdoorAdvertising1 },
      { text: 'Outdoor Advertising Abu Dhabi', image: OutdoorAdvertising2 },
      { text: 'Outdoor Advertising Ras Al Khaimah', image: OutdoorAdvertising3 },
      { text: 'Outdoor Advertising Fujairah', image: OutdoorAdvertising4 },
      { text: 'Outdoor Advertising Sharjah', image: OutdoorAdvertising5 },
      { text: 'Outdoor Advertising Ajman', image: OutdoorAdvertising6 },
      { text: 'Outdoor Advertising Umm Al Quwain', image: OutdoorAdvertising7 },
      { text: 'Outdoor Advertising Al Ain', image: OutdoorAdvertising8 },
      { text: 'Outdoor Advertising Saudi Arabia', image: OutdoorAdvertising9 },
    ],
  },
  {
    title: 'Specific Ad Formats',
    items: [
      { text: 'Billboard Advertising', image: SpecificADFormats1 },
      { text: 'Bridge Advertising', image: SpecificADFormats2 },
      { text: 'Lampposts Advertising', image: SpecificADFormats3 },
      { text: 'Hoardings Advertising', image: SpecificADFormats4 },
      { text: 'Taxi Advertising', image: SpecificADFormats5 },
      { text: 'Megacoms Advertising', image: SpecificADFormats6 },
      { text: 'Building Wraps', image: SpecificADFormats7 },
      { text: 'Mupi Advertising', image: SpecificADFormats8 },
      { text: 'Unipole Advertising', image: SpecificADFormats9 },
    ],
  },
  {
    title: 'Mall & Location-Based Advertising',
    items: [
      { text: 'Dubai Mall Advertising', image: MallAndLocationBasedAdvertising1 },
      { text: 'Mall Of Emirates Advertising', image: MallAndLocationBasedAdvertising2 },
      { text: 'Dubai Marina Mall Advertising', image: MallAndLocationBasedAdvertising3 },
      { text: 'Sharjah City Centre Advertising', image: MallAndLocationBasedAdvertising4 },
      { text: 'Ajman City Centre Advertising', image: MallAndLocationBasedAdvertising5 },
      { text: 'Ibn Battuta Mall Advertising', image: MallAndLocationBasedAdvertising6 },
      { text: 'City Walk Advertising', image: MallAndLocationBasedAdvertising7 },
      { text: 'Mall Of Al Ain Advertising', image: MallAndLocationBasedAdvertising8 },
      { text: 'Fujairah City Centre Advertising', image: MallAndLocationBasedAdvertising9 },
    ],
  },
];

const Services = () => {
  return (
    <div className='services' id='services'>

      <Helmet>
        <title>Tailored Advertising Solutions | LED Displays for Every Occasion</title>
        <meta name="description" content="Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions. Tailored for all types of events and campaigns." />
        <meta name="keywords" content="outdoor advertising, LED displays, billboard advertising, Dubai mall advertising, taxi advertising, building wraps, location-based advertising" />
        <meta name="author" content="Pixel World" />
        <meta property="og:title" content="Tailored Advertising Solutions | LED Displays for Every Occasion" />
        <meta property="og:description" content="Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions. Tailored for all types of events and campaigns." />
        <meta property="og:image" content={OutdoorAdvertising1} />
        <meta property="og:type" content="services" />
        <meta property="og:url" content={`https://pixelworld.ae/services`} />
        <meta name="twitter:title" content="Tailored Advertising Solutions | LED Displays for Every Occasion" />
        <meta name="twitter:description" content="Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions." />
        <meta name="twitter:image" content={OutdoorAdvertising1}  />
    <link rel="canonical" href="https://pixelworld.ae/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header className='services-hero'>
        <h1 className='services-title'>Tailored Advertising Solutions for Every Occasion</h1>
        <p className='services-description'>
          Explore innovative LED displays for events, advertising, corporate setups, and more.
        </p>
      </header>

      <section className='services-intro'>
        <h2 className='services-bg-title'>From Concept to Completion</h2>
        {/* <OccasionReady/> */}
      </section>

      <section className='services-list'>
        {servicesData.map((service, index) => (
          <div key={index} className='service-category'>
            <h3 className='service-category-title'>{service.title}</h3>
            <div className='row'>
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className='col-md-4'>
                  <div className='service-item'>
                    <div className='service-image-container'>
                      <img
                        src={item.image}
                        alt={item.text}
                        className='service-image'
                        loading='lazy'
                        height="100%" 
                        width="100%"
                      />
                    </div>
                    <p className='service-text'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className='my-5'>
        <h2 className='services-subtitle text-center'>Why Choose Us?</h2>
        <p className='services-description'>
          We provide tailored LED display solutions for every occasion.
        </p>
        <div className='row'>
          <div className='col-lg-4 col-md-6 mb-3'>
            <div className='innovateDisplay-card rounded'>
              <h3 className='innovateDisplay-card-title'>Experience Across Industries</h3>
              <p className='innovateDisplay-card-description'>
                Expertise in diverse projects, from corporate events to campaigns.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-3'>
            <div className='innovateDisplay-card rounded'>
              <h3 className='innovateDisplay-card-title'>Customized Solutions</h3>
              <p className='innovateDisplay-card-description'>
                Tailored services to align with your unique needs and goals.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-3'>
            <div className='innovateDisplay-card rounded'>
              <h3 className='innovateDisplay-card-title'>Global Reach</h3>
              <p className='innovateDisplay-card-description'>
                Bringing visibility to brands across the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
