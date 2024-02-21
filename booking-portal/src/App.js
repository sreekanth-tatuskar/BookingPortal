import logo from './logo.svg';
import React, { useState,  useEffect  } from 'react';
import { Link } from 'react-router-dom';
import loginImage from './login.svg'
import flight from './flight.svg'
import bus from './bus.svg'
import train from './train.svg'
import search from './search.svg'
import './App.css';
import image1 from './india.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './travel2.jpg'



function App() {

  const images = [image1, image2, image3, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1750); // Change images every 3/4th of a second

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <div className="App">
      <div className="header" >
      <div className="logo">
      <Link to = "/" className ="logo-home" >RoamRover</Link>
      </div>
      
      <div className="buttons">
        <div className="loginIcon "><img src={loginImage} alt ="image" ></img></div>
        <div className="signIn" onClick={()=>{window.location.href =''}}>SignIn</div>
      </div>
    </div>
    <div className = 'Container'>
      <div className ='row'>
        <div className='col1'>
          <div className='Flights'>
            <img className='flightlogo' src={flight}></img>
            <div className='busname'>Flights</div>
          </div>
          <div className='Bus'>
            <img className='buslogo' src={bus}></img>
            <div className='busname'>Bus</div>
          </div>
          <div className='Train'>
            <img className='trainlogo' src={train}></img>
            <div className='trainname'>Train</div>
          </div>
        </div>
        <div className="col2">
          <h2 className='head1'>Where will you roam today?</h2>
          <div className="search-container">
            <input type="text" className="search-input"  placeholder="Find your next Destination....." />
            <div class="search-button">
              <img src={search} alt="Search" />
            </div>
          </div>
          <div className='Destinations'>
            <h2 className='head1'>Popular Destinations to viist</h2>
            <div className='three'>
            <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <div className="slide">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className="next" onClick={goToNextSlide}>&#10095;</button>
            </div>
          </div>
        </div>





    </div>
    </div>
    <div className="Footer">
      
      <div className='end'>
      <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#About"   >About</a></li>
            <li><a href="#FAQs"   >FAQs</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
      </div>

    </div>
    </div>
  );
}

export default App;
