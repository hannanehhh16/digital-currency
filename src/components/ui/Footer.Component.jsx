import React from 'react';
import "./Footer.css";

// export default function FooterComponent() {
//   return (
//     <footer className="footer">
//       <span>Crypto Tracking.</span>
//       <span className="d-none d-md-inline ms-2">All rights reserved </span>
//     </footer>
//   )
// }


const AnimatedWaveFooter = () => (
  <footer className='footer'>
    <div className="background">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1600 900"
      >
        <defs>
          <path
            id="wave"
            fill="rgba(11, 89, 255, 0.6)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity={0.4}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="8s"
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity={0.6}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s"
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity={0.9}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="4s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
    <section>
      <ul className="socials">
        <li>
          <a
            className="fa-brands fa-github"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          />
        </li>
        <li>
          <a
            className="fa-brands fa-codepen"
            href="https://codepen.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen"
          />
        </li>
        <li>
          <a
            className="fa-brands fa-dribbble"
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          />
        </li>
        <li>
          <a
            className="fa-brands fa-instagram"
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          />
        </li>
      </ul>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="legal">© 2025 All rights reserved</p>
    </section>
  </footer>
);

export default AnimatedWaveFooter;
