import React from 'react';
import ImageOne from '../assets/ImageOne.jpg';
import ImageTwo from '../assets/ImageTwo.png';
import ImageThree from '../assets/ImageThree.jpg';
import ImageFour from '../assets/ImageFour.png';
import ImageFive from '../assets/ImageFive.jpg';
// import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <><Helmet>
    <title>Our LED Display Projects | Innovative Solutions for Every Need</title>
    <meta name="description" content="Explore our portfolio of LED display projects ranging from corporate setups to large-scale events and outdoor installations." />
    <meta name="keywords" content="LED display projects, outdoor LED screens, indoor LED screens, corporate LED displays, event LED screens, Dubai LED displays" />
    <meta name="author" content="Pixel World" />
    <link rel="canonical" href="https://pixelworld.ae/projects" />

  </Helmet>
    <section className="projects" id="projects">
      <div className="pt-5 d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="projects-title">Innovative LED Displays for Every Need</h1>
        <p className="projects-description">
          Explore a wide range of high-performance LED solutions tailored for events, advertising, corporate setups, and more.
        </p>
      </div>

      <div className="my-5">
        <h2 className="projects-bg-title">Discover Our Product Range</h2>

        <div className="project-section">
          <header className="d-flex justify-content-between align-items-end">
            {/* <h3 className="bestsellers-title">Our Projects</h3> */}
            {/* <span className="bestsellers-subtext">Find the Right Fit</span> */}
          </header>

          <hr className="text-white" />

          <div className="row my-3 p-3">
            {/* Project 1 */}
            <article className="col-md-7 mb-3">
              <div className="illumination-card">
                <figure className="illumination-card-image-container">
                  <img
                    src={ImageOne}
                    alt="Quttainah Specialized Hospital featuring an outdoor LED screen with vibrant visuals."
                    className="illumination-card-image"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </figure>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="illuminaion-card-title">Quttainah Specialized Hospital</h4>
                  <p className="illuminaion-card-text">Outdoor LED Screen</p>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="col-md-5 mb-3">
              <div className="illumination-card">
                <figure className="illumination-card-image-container">
                  <img
                    src={ImageTwo}
                    alt="Ministry of Finance in Dubai showcasing an indoor curved LED screen."
                    className="illumination-card-image"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </figure>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="illuminaion-card-title">Ministry of Finance - Dubai</h4>
                  <p className="illuminaion-card-text">Indoor Curve LED Screen</p>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="col-md-12 mb-3">
              <div className="illumination-card">
                <figure className="illumination-card-image-container">
                  <img
                    src={ImageThree}
                    alt="VIP Design Luxury Automobile in Dubai showcasing a sleek indoor LED screen."
                    className="illumination-card-image"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </figure>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="illuminaion-card-title">VIP Design Luxury Automobile - Dubai</h4>
                  <p className="illuminaion-card-text">Indoor LED Screen</p>
                </div>
              </div>
            </article>

            {/* Project 4 */}
            <article className="col-md-5 mb-3">
              <div className="illumination-card">
                <figure className="illumination-card-image-container">
                  <img
                    src={ImageFour}
                    alt="NARA Lounge & Bar - Cluster A featuring a stylish indoor LED screen."
                    className="illumination-card-image"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </figure>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="illuminaion-card-title">NARA Lounge & Bar - Cluster A</h4>
                  <p className="illuminaion-card-text">Indoor LED Screen</p>
                </div>
              </div>
            </article>

            {/* Project 5 */}
            <article className="col-md-7 mb-3">
              <div className="illumination-card">
                <figure className="illumination-card-image-container">
                  <img
                    src={ImageFive}
                    alt="Daylone Marine yacht featuring an outdoor LED screen with a durable cabinet design."
                    className="illumination-card-image"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </figure>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="illuminaion-card-title">Daylone Marine (Yacht)</h4>
                  <p className="illuminaion-card-text">Outdoor LED Screen with Cabinet</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
