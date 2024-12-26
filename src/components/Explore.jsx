import React from 'react';
import ExploreImageOne from '../assets/ExploreImageOne.jpg';
import ExploreImageTwo from '../assets/ExploreImageTwo.jpg';
import ExploreImageThree from '../assets/Transparent Led display.jpg';
import ExploreImageFour from '../assets/ExploreImageThree.png';
import ExploreImageFive from '../assets/ExploreImageFive.jpg';
import ExploreImageSix from '../assets/ExploreImageSix.jpg';
import ExploreImageSeven from '../assets/ExploreImageSeven.jpg';

import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
// import { IoIosArrowDropright } from 'react-icons/io';
// import { Link } from 'react-router-dom';

const exploreData = [
  {
    title: 'Indoor LED Digital Displays',
    description: 'Indoor LED screens come in various types, including fine-pitch and standard-pitch LED screens, transparent LED screens, and flexible LED screens for creative setups. Other options include interactive LED screens, LED video walls, poster LED displays, ceiling-mounted and floor LED screens, as well as HD, 4K, and dual-sided LED screens. Curved LED screens, LED scoreboards, wall-embedded LED screens, and rental LED screens are also widely used for diverse applications.',
    image: ExploreImageOne,
    alt: 'Entrance Arch LED',
    buttons: ['Advertising Agency', 'LED Display', 'Mall LED Screen', 'Airport LED Screen'],
    textAlign: 'left',
    imageFirst: true,
    link: '/product/indoor-led-digital-displays'
  },
  {
    title: 'Outdoor LED Digital Display Screen',
    description: 'Outdoor LED screens come in various types, including high-brightness LED screens, weatherproof LED displays, and mesh LED screens for large-scale advertising. Other options include curved outdoor LED screens, perimeter LED displays, rental outdoor LED screens, and billboard LED displays. Additionally, you can find transparent LED screens, dual-sided LED displays, and HD or 4K LED screens for superior image quality in outdoor environments.',
    image: ExploreImageTwo,
    alt: 'Flexible Wall LED',
    buttons: ['Digital billboards',
      'Outdoor LED signage',
      'LED video walls',
      'Weatherproof LED screens'],
    textAlign: 'center',
    imageFirst: false,
    link: '/product/outdoor-led-digital-displays'

  },
  {
    title: 'Transparent LED Display/Glass Wall Screen',
    description: 'Transparent LED screens are available in different types, including ultra-transparent LED displays, glass-type LED screens, and flexible transparent LED screens. These screens are perfect for applications such as window displays, architectural facades, retail environments, and museums. Other options include double-sided transparent LED screens, curved transparent screens, and high-brightness transparent LED displays for both indoor and outdoor settings.',
    image: ExploreImageThree,
    alt: 'Corporate Office Screen',
    buttons: ['Glass LED panels',
      'Transparent digital signage',
      'LED glass displays',
      'Transparent OLED screens'],
    textAlign: 'left',
    imageFirst: true,
    link: '/product/transparent-led-display'
  },
  {
    title: 'Mesh LED Curtains',
    description: 'Mesh LED curtains are available in various types, including flexible mesh LED screens, high-density mesh LED curtains, and ultra-thin mesh LED displays. These screens are ideal for large-scale applications such as outdoor advertising, concerts, festivals, stadiums, building facades, and trade shows. Additionally, options like customizable mesh sizes, seamless mesh LED curtains, and weatherproof mesh LED screens make them versatile for both indoor and outdoor environments.',
    image: ExploreImageFour,
    alt: 'Digital Kiosk',
    buttons: ['LED mex`sh panels',
      'Digital mesh curtains',
      'Flexible mesh LED screens',
      'Mesh curtain advertising'],
    textAlign: 'center',
    imageFirst: false,
    link: '/product/mesh-led-curtains'
  },
  {
    title: 'Flexible LED Curtains',
    description: 'Flexible LED screens come in various types, including bendable flexible LED displays, rollable LED screens, modular flexible LED panels, and transparent flexible LED screens. These versatile screens are perfect for applications in dynamic environments such as concerts, trade shows, retail stores, corporate offices, architectural designs, and outdoor advertising. Whether used for curved walls, pop-up events, interactive installations, or immersive stage backdrops, flexible LED screens can be customized to fit unique shapes and sizes, providing stunning visuals in both indoor and outdoor settings. Their portability, high resolution, and adaptability make them ideal for creative and high-impact displays in diverse spaces.',
    image: ExploreImageFive,
    alt: 'Corporate Office Screen',
    buttons: ['Curved LED displays', 'Bendable LED screens', 'Flexible OLED panels', 'Customizable LED signage'],
    textAlign: 'left',
    imageFirst: true,
    link: '/product/flexible-led-curtains'
  },
  {
    title: 'LED Poster Display',
    description: 'LED poster displays come in various types, including standalone LED posters, double-sided LED posters, and slim, high-resolution LED posters. These displays are perfect for retail environments, airports, shopping malls, exhibitions, event spaces, and outdoor advertising. They offer flexibility with options such as customizable sizes, high brightness for visibility in bright environments, and interactive features for engaging customer experiences.',
    image: ExploreImageSix,
    alt: 'Digital Kiosk',
    buttons: ['Poster LED panels',
      'LED advertising posters',
      'High-definition LED posters',
      'Commercial LED posters'],
    textAlign: 'center',
    imageFirst: false,
    link: '/product/led-poster'
  },
  {
    title: 'LED Video Wall',
    description: 'LED video walls come in different types, including seamless video walls, curved LED video walls, and modular LED video walls. These displays are ideal for high-impact visual presentations in large venues such as shopping malls, stadiums, concert halls, control rooms, corporate offices, and digital signage applications. With high-resolution options and the ability to be customized in various sizes and shapes, LED video walls offer stunning visual experiences for both indoor and outdoor use.',
    image: ExploreImageSeven,
    alt: 'Corporate Office Screen',
    buttons: ['Digital video walls',
      'High-resolution video walls',
      'Indoor LED video walls',
      'Outdoor LED video walls'],
    textAlign: 'left',
    imageFirst: true,
    link: '/product/led-video-wall'
  },
];




const handleScrollToTop = () => {
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: 'smooth', // Smooth scroll animation
  });
};

const Explore = () => {
  return (
    <section className="explore">
      <h1 className="explore-title">
        Explore Our Range of <br /> Cutting-Edge LED
      </h1>

      <div className="row">
        {exploreData.map((item, index) => (
          <article className="col-md-12 my-5" key={index}>
            <div className="row ">
              {item.imageFirst && (
                <figure className="col-md-6 mb-5">
                  <div className='explore-image-container'>
                    <img src={item.image} alt={item.alt} width="100%" height="100%" className='explore-image' loading="lazy" />
                  </div>
                </figure>
              )}
              <div className={`col-md-${item.imageFirst ? '6' : '6'} mb-5`}>
                <div
                  className={`d-flex gap-2 flex-column justify-content-center ${item.textAlign === 'center' ? 'align-items-center' : ''
                    } w-100 h-100`}
                >
                  <h2
                    className={`explore-subtitle ${item.textAlign === 'center' ? 'text-center' : ''
                      }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`explore-description ${item.textAlign === 'center' ? 'text-center' : ''
                      }`}
                  >
                    {item.description}
                  </p>
                  <div className="d-flex flex-row flex-wrap">
                    {item.buttons.map((button, idx) => (
                      <span className="explore-button" key={idx}>
                        {button}
                      </span>
                    ))}<br />
                  </div>
                  <div className='d-flex flex-wrap align-items-center gap-2'>
                    <div className={`explore-description`}><b>Want to know how to choose your led screen?</b></div>

                    <Link
                      to={item.link}
                      onClick={handleScrollToTop}
                      className="explore-button-two d-flex flex-wrap text-decoration-none"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      Learn more <IoIosArrowDropright size={24} />
                    </Link>
                  </div>
                </div>
              </div>
              {!item.imageFirst && (
                <figure className="col-md-6 mb-5">
                  <div className='explore-image-container'>
                    <img src={item.image} alt={item.alt} width="100%" height="100%" className='explore-image' loading="lazy" />
                  </div>
                </figure>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
