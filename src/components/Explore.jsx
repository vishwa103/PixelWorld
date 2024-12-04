import React from 'react'
import ExploreImageOne from '../assets/ExploreImageOne.png'
import ExploreImageTwo from '../assets/ExploreImageTwo.png'
import ExploreImageThree from '../assets/ExploreImageThree.png'
import ExploreImageFour from '../assets/ExploreImageFour.png'
import ExploreImageFive from '../assets/ExploreImageFive.png'

const Explore = () => {
  return (
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
  )
}

export default Explore