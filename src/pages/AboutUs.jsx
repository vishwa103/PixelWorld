import React from 'react';
import innovateDisplayImage from '../assets/InnovateDisplayImage.png';
import IlliminationImage from '../assets/IlliminationImage.png';

import ClientLogo1 from '../assets/ClientLogoOne.png';
import ClientLogo2 from '../assets/ClientLogoTwo.png';
import ClientLogo3 from '../assets/ClientLogoThree.png';
import ClientLogo4 from '../assets/ClientLogoFour.png';
import ClientLogo5 from '../assets/ClientLogoFive.png';
import ClientLogo6 from '../assets/ClientLogoSix.png';
import ClientLogo7 from '../assets/ClientLogoSeven.png';
import ClientLogo8 from '../assets/ClientLogoEight.png';
import ClientLogo9 from '../assets/ClientLogoNine.png';
import { Helmet } from 'react-helmet';
import logo from '../assets/px-logo-web.png'

// import { FiArrowRightCircle } from 'react-icons/fi';

const AboutUs = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us | Innovative LED Display Solutions",
    "description": "Discover our mission, vision, and core values as we redefine visual storytelling with cutting-edge LED display solutions worldwide.",
    "url": "https://www.pixelworld.ae/aboutus",
    "mainEntity": {
        "@type": "Organization",
        "name": "Pixel World",
        "url": "https://www.pixelworld.ae",
        "logo": {logo}, // Replace with your actual logo URL
        "description": "Pixel World is a leader in innovative LED display solutions, transforming visual storytelling across the globe.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971585321473", // Replace with your contact number
            "contactType": "Customer Service",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr",
            "https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y",
            // "https://www.linkedin.com/company/pixelworld",
            "https://medium.com/@pixelworldfzc",
            "https://www.blogger.com/u/2/blog/posts/4721417252822204922"
        ]
    }
};
  return (
    <>
       <Helmet>
        <title>LED Screen Dubai | Outdoor LED Screen | Digital Screen | PixelWorld</title>
        <meta name="description" content="PixelWorld offers premium LED screen solutions in Dubai, including outdoor LED screens and digital screens. Call now for the best LED screen supplier in Dubai!" />
        <meta name="keywords" content="led screen dubai, outdoor led screen, led screen supplier, digital screen" />
        <meta name="author" content="Pixel World" />
      <link rel="canonical" href="https://www.pixelworld.ae/aboutus" />
      <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
      </Helmet>
      <section className='innovateDisplay' id="aboutus">
        <div className='d-flex justify-content-center'>
          <img src={innovateDisplayImage} alt='Innovative LED Display Solutions' className='innovateDisplay-image' height="100%" width="100%" />
        </div>
        <div className='mt-5'>
          <h1 className='innovateDisplay-title'>With Innovation at the Heart of<br/> Everything We Do</h1>
          <p className='innovateDisplay-description'>
            Driven by cutting-edge technology, we redefine visual storytelling with advanced LED display solutions.
          </p>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Our Mission</h2>
                <p className='innovateDisplay-card-description'>
                  To provide innovative LED solutions that captivate audiences and transform spaces worldwide.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>500+</h2>
                <p className='illumination-count-text'>Projects Completed</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Core Values</h2>
                <p className='innovateDisplay-card-description'>
                  Innovation, Quality, Sustainability, and Client Focus.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>7K+</h2>
                <p className='illumination-count-text'>Happy Clients and Businesses</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Our Vision</h2>
                <p className='innovateDisplay-card-description'>
                  Empowering brands to communicate with brilliance and clarity.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>70+</h2>
                <p className='illumination-count-text'>Cities Covered Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='illumination-about'>
        <h2 className='illumination-about-title'>Bringing Brilliance to Every Corner of the Globe</h2>
        <p className='illumination-about-description'>
          From local events to global spectacles, our LED solutions illuminate stages, streets, and summits worldwide.
        </p>

        <img src={IlliminationImage} alt='Global LED Illumination Projects' width="100%" height="100%"  className="my-5" />

        <div className='my-5'>
          <h2 className='illimination-about-subtitle'>Trusted By Industry Leaders</h2>

          <div className='d-flex flex-wrap justify-content-center mt-5 align-items-center'>
            {[ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6, ClientLogo7, ClientLogo8, ClientLogo9].map(
              (logo, index) => (
                <div key={index} className='logo-container m-4'>
                  <img src={logo} alt={`Client Logo ${index + 1}`} width="100%" height="100%"  />
                </div>
              )
            )}
          </div>
        </div>

        <div className='row my-5 p-3'>
          <div className='col-md-9 my-5'>
            <h2 className='illumination-about-title text-start'>See Our Displays in Action</h2>
            <p className='illumination-about-description text-start'>
              Explore our portfolio of projects, from corporate meetings to large-scale festivals, and see how our LED solutions make events unforgettable.
            </p>
          </div>
          <div className='col-md-3 my-5'>
            <div className='illimination-count-card'>
              <h2 className='illimination-count'>7K+</h2>
              <p className='illumination-count-text'>Happy Clients and Businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='about-partner'>
        <h2 className='about-title'>Partner with Us</h2>
        <div className='about-discover'>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <img src={logoWhite} alt='Logo' width="100%" height="100%" />
            </div>
            <div className='col-md-9 mb-3'>
              <div className='about-discover-text'>
                Discover Our Services <FiArrowRightCircle />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
