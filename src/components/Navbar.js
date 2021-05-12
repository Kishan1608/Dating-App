import React from 'react'
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/> tinder RJC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Products
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Tinder Plus</a>
                    <a class="dropdown-item" href="#">Tinder Gold</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Tinder Platinum</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Learn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Support</a>
                </li>
            </ul>
            <button type="button" className="btn-login" data-toggle="modal" data-target="#exampleModal">Log In</button>
        </div>
    </div>
    </nav>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <img className="modal-logo" src={logo2} alt="logo"/>
            <button className="btn-cl" data-dismiss="modal" aria-label="Close">
            <FontAwesomeIcon className="modal-icon" icon={faTimes} />
            </button>
        </div>
        <div class="modal-body">
            ...
        </div>
        
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
