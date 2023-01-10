import React, { useRef } from 'react'
import './Home.css'
import './home.scss'
import bb from '../assets/images/menu-icon.svg'
import logo from '../assets/images/header-logo-1.svg'
import man from '../assets/images/user.svg'
import shopping from '../assets/images/shopping-icon.svg'
// import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactCardSlider from 'react-card-slider-component';
// import CarouselSlider from "./components/CarouselSlider";
// import styled from "styled-components";
import dd from '../assets/images/footer-logo.png'
import caroImage from '../assets/images/banner-img.png'
import short from '../assets/images/boxers-img.png'
import mesurment from '../assets/images/siora-img.png'
import person from '../assets/images/jusdevoyage-img.png'
import tag from '../assets/images/crown-img.png'
import girl from '../assets/images/member-1.png'
import boy from '../assets/images/member-2.jpg'
import thirdboy from '../assets/images/member-3.jpg'
import hidden from '../assets/images/Group-img.png'
import shirt from '../assets/images/shirt-2.png'
import cap from '../assets/images/home-hat.png'
import hoode from '../assets/images/home-hoodies.png'
import shirt2 from '../assets/images/home-tshirt.png'
import rigth from '../assets/images/next-icon.png'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import left from '../assets/images/prevew-icon.png'
import troser from '../assets/images/home-shorts.png'

import shirtsdd from '../assets/images/shirt-2.png'
const Home = () => {




  return (
    <div>
      <div className='bg-black py-2  text-center	  text-white'> Spend $50 for free shipping</div>
      <div className='mmmmiok' >
        <div className='mmnnhhyy'>
          <img src={bb} className='sasaasjmj' alt="Not Found" />

          <img src={logo} alt="" />

          {/* Inner Logo */}
          <div className='setrtmn'>
            <img className='pr-3' src={man} alt="" />

            <span className='text-white pr-3' > |</span>
            <img className='pr-3' src={shopping} alt="" />

          </div>

        </div>



        {/* Second */}

        <div className='mmqqoop'>

          <div className='iiyytt'>
            <h1 className='fgd mkjbbfss'>Do Well, Live Well &</h1> <br />
            <h1 className='fgd mkjbbfss'>Dress Really Well</h1><br />
            <p className='mkjbbfss awdw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est</p>
            <button className='iutrvh'>Shop Now!</button>
          </div>


          <div className='ffmmkklloo'>
            <img src={caroImage} alt="" />
          </div>
        </div>



      </div>



      {/* Second */}

      <div className='rtfsecond'>
        <h1 className='mjhgre' >Best Selling Product</h1>
        <p className='tyhvf   text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin a tempus augue, id convallis est. Nulla neque sapien,
          mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet
          luctus erat, at ullamcorper neque feugiat id.
        </p>
      </div>



      {/* Forth Part */}




      <div className=' ghdsaaaasa bg-black  text-white'>
        <h1 className='head1bg' >Your Choice Counts</h1>
        <h3 className='head3bg'>Choose what design you'd like to see us add an d get an extra special discount.</h3>
        <button className='iutrvh'>Continue!</button>
      </div>





      {/* FiFth Part */}


      <div className='fifth   '>
        <div className='flex flex-col' >
          <h1 className='bsafdjaus'>About Tatsu Threads</h1>

          {/* Inner First */}
          <div className='nono'>
            {/* i i First  */}
            <div className='mokli'>
              <img src={short} alt="" />
            </div>
            <div className='fokli'>
              {/* <img src={hidden} alt="" /> */}
              <img className='filterqwe' src={mesurment} alt="" />
              <p className='versetter '>


                lorem ipsum dolor sit amet, consectetur adipiscing elit.

                sed euismod libero nec arcu vehicula congue. pellentesque lacinia

                lobortis efficitur. mauris vel ipsum mi. mauris lacus tellus.

              </p>

            </div>


          </div>


          {/*  Second  Inner */}
          <div className='eflsonkkh'>
            <div>
              <img src={person} alt="" />
            </div>
            <div className='msahduasduasb' >
              <img src={tag}  className="oikl"   alt="" />
            </div>
          </div>


        </div>

      </div>





      {/* Sixth Part */}

      <div className='hjsgaisa33'>
        <h1 className='headfill'>Trending Now</h1>
        <div className='jkloun'>
          <p className='headfill2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis
            at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
        </div>
      </div>




      {/* Seventh  */}



      <div className='cng'>
        {/* One */}


        <div className='zxczxczx notcallhonkdfs		flex-col  flex '>
          <img src={girl} alt="" />
          <h3 className='mt-6  text-xl font-bold'>Menace Shirt Design</h3>
          <h3 className=' my-2  '>Retail: $90.00</h3>
          <h3 className='my-2'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	 font-bold' >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>
        </div>
        {/*Two  */}
        <div className='zxczxczx notcallhonkdfs	mt-16	flex-col  flex	'>
          <img src={boy} alt="" />
          <h3 className='mt-6  text-xl font-bold'>Menace Shirt Design</h3>
          <h3 className=' my-2  '>Retail: $90.00</h3>
          <h3 className='my-2'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	 font-bold' >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>
        </div>
        {/* Third */}
        <div className='zxczxczx notcallhonkdfs		flex-col  flex'>
          <img src={thirdboy} alt="" />
          <h3 className='mt-6  text-xl font-bold'>Menace Shirt Design</h3>
          <h3 className=' my-2  '>Retail: $90.00</h3>
          <h3 className='my-2'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	 font-bold' >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>
        </div>
      </div>

      {/* Eight  */}

      <div className='vfghj  mt-25'>
        <div className=' zxczsaasamnj  ' >

          <div className='tyu'>
            <h1  >Once Again tatsuthreads defies
              the odds with the 2k22
              Collection</h1>
          </div>
          <div>
            <p className='text-xl   text-black'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod libero nec
              arcu vehicula congue. pellentesque lacinia lobortis efficitur. mauris vel ipsum mi
              . mauris lacus tellus.lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
              euismod libero nec arcu vehicula congue.
            </p>

            <button className='iutrvh'>Shop Now!</button>
            <hr className='czczxczxnn' />
          </div>
        </div>
      </div>
      {/* Nine  */}


      <div className='flex   mnjgjv'  >
        <div className='basis-1/6	'>
          <img src={shirt} alt="" />
          <h4 className='kmigj'>T-Shirt</h4>
        </div>
        <div className='basis-1/6'>
          <img src={cap} alt="" />
          <h4 className='kmigj'>Hats</h4>
        </div>
        <div className='basis-1/6'>
          <img src={hoode} alt="" />
          <h4 className='kmigj'>Hoodies</h4>
        </div>
        <div className='basis-1/6'>
          <img src={shirt2} alt="" />
          <h4 className='kmigj'>Joggers</h4>
        </div>
        <div className='basis-1/6'>
          <img src={troser} alt="" />
          <h4 className='kmigj'>Shorts</h4>
        </div>
      </div>


      {/* Footer */}


      <div class="pg-footer">
        <footer class="footer">
          {/* <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg> */}
          <div class="footer-content">
            <div class="footer-content-column">
              <div class="footer-logo">
                <a class="footer-logo-link" href="#">
                  <span class="hidden-link-text">LOGO</span>
                  <img src={dd} alt="" />
                </a>
              </div>
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Get Started</h2>
                <ul id="menu-get-started" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Start</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Documentation</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Company</h2>
                <ul id="menu-company" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Contact</a>
                  </li>
                  <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#">News</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" class="footer-menu-list">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Security</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Blog</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Customers</a></li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                <p class="footer-call-to-action-description"> Have a support question?</p>

                <div className='adsufv'>
                  <input className='border-1  kkll border-whites rounded-sm px-4 py-1' placeholder='Email Address' type="text" name="" id="" />
                  <button className='nnju  border-black text-xl text-black mt-6 px-11 py-4 '>SUBSCRIBE</button>
                </div>
              </div>
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> You Call Us</h2>
                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 03456272088</a></p>
              </div>
            </div>

          </div>

        </footer>
      </div>


    </div>
  )
}

export default Home