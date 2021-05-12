import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import MobileStoreButton from 'react-mobile-store-button';


const Footer = () => {
  return <div className="container">
    <div className="footer1">
      <div className="saftey">
        <ul>
          <h4>SAFETY</h4>
          <li><a href="#">Community Guidelines</a></li>
          <li><a href="#">Safety Tips</a></li>
          <li><a href="#">Safety & Policy</a></li>
          <li><a href="#">Safety & Reporting</a></li>
          <li><a href="#">Security</a></li>   
        </ul>
      </div>
      <div className="legal">
        <ul>
          <h4>LEGAL</h4>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Intellectual Property</a></li>
        </ul>
      </div>
      <div className="careers">
        <ul>
          <h4>CAREERS</h4>
          <li><a href="#">Careers Portal</a></li>
          <li><a href="#">Tech Blog</a></li>
        </ul>
      </div>
      <div className="social">
        <ul>
          <h4>SOCIAL</h4>
          <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          <FontAwesomeIcon className="social-icon" icon={faYoutube} />
          <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
        </ul>
      </div>
      <div className="faq">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Press Room</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Promo Code</a></li>
        </ul>
      </div>
    </div>
    <hr></hr>
    <div className="footer2">
      <div className="app-icon">
      <p>GET THE APP!</p>
        <MobileStoreButton
            store="ios"
            url={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            linkProps={{ title: 'iOS Store Button' }}
        />  
        <MobileStoreButton
            store="android"
            url={'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'}
            linkProps={{ title: 'iOS Store Button' }}
        />  
        </div>  
         
        <div className="description">
          <p className="text-secondary">Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
          <br />
          <br />
          There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
        </div>
        <hr />
        <div className="copyrights text-secondary">
          <div className="master-list">
            <a>FAQ</a> /
            <a className="list text-secondary">Safety Tips</a> /
            <a className="list text-secondary">Terms</a> /
            <a className="list text-secondary">Cookie Policy</a> /
            <a className="list text-secondary">Privacy Settings</a> 
          </div>
          <div>
            <p>&copy; 2021 Kishan Chauhan</p>
          </div>
        </div> 
    </div>
  </div>
  
}

export default Footer
