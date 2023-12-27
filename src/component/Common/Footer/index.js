import React, { useEffect, useState } from 'react';
import logo from '../../../assets/img/logo.png';
import payment from '../../../assets/img/common/payment.png';
import { Link } from 'react-router-dom';
import Cookie from '../Cookie';
import NewsletterModal from '../NewsletterModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About us", link: "/about" },
            { linkTitle: "Privacy Policy", link: "/privacy-policy" },
            { linkTitle: "Frequently Questions", link: "/faqs" },
            { linkTitle: "Order Tracking", link: "/order-tracking" },
          
        ]
    },
    {
        title: "SHOP",
        links: [
            { linkTitle: "Cart View", link: "/cart" },
            { linkTitle: "Checkout View ", link: "/checkout-one" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {
  let dispatch = useDispatch();

  let promoCenter = useSelector((state) => state.settings.promoCenter);
  let promoStatus = useSelector((state) => state.settings.promoStatus);
  let stopPromo = useSelector((state) => state.settings.stopPromo);
  let cookie = useSelector((state) => state.settings.cookie);
  let stopCookie = useSelector((state) => state.settings.stopCookie);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (promoStatus) {
      return;
    } else {
      dispatch({ type: 'settings/promoStatus' });
      setTimeout(function () {
        dispatch({ type: 'settings/promoCenter' });
      }, 2000);
    }

    if (stopCookie) {
      return;
    } else {
      setTimeout(function () {
        dispatch({ type: 'settings/cookie' });
      }, 6000);
    }
  }, [dispatch, promoStatus, stopCookie]);

  const startPromoModal = () => {
    if (stopPromo) {
      dispatch({ type: 'settings/promoCenter' });
      return;
    } else {
      dispatch({ type: 'settings/promoCenter' });
      setTimeout(function () {
        dispatch({ type: 'settings/promoCenter' });
      }, 700000);
    }
  };

  const stopPromoModal = () => {
    dispatch({ type: 'settings/stopPromo' });
  };

  const cancelCookie = () => {
    dispatch({ type: 'settings/cookie' });
  };

  const acceptCookie = () => {
    // Write your function there
    dispatch({ type: 'settings/cookie' });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = document.querySelector("input[type='email']");
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
      Swal.fire('Success', 'Thank you for your Subscription', 'success');
      emailInput.value = '';
    } else {
      Swal.fire('Error', 'Please enter a valid email address', 'error');
    }
  };

  return (
    <>
      <footer id="footer_one">
        <div className="container">
          <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left_side">
                                <Link to="/" ><img src={logo} alt="logo" /></Link>
                                <p>
                                    <strong>DragShop</strong> FreshCart is a leading multi-vendor B2C fast e-commerce 
                                    platform specializing in providing a wide array of fresh and high-quality grocery 
                                    products. Our platform primarily caters to the diverse needs of households, offering 
                                    a comprehensive selection of fruits, vegetables, dairy products, pantry essentials, and more.

                                </p>
                                <div className="footer_left_side_icon">
                                    
                                <div className="posted_icons_one">
                                    <FacebookShareButton url={'#1'} quote={'Best Products'}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={'#2'} title={'Best Products'}>
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={'#3'} title={'Best Products'}>
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                    <TelegramShareButton url={'#4'} title={'Best Products'}>
                                        <TelegramIcon size={32} round />
                                    </TelegramShareButton>
                                    <WhatsappShareButton url={'#'} title={'Best Products'}>
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(0, 1).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(1, 2).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="footer_one_widget">
                <h3>NEWSLETTER</h3>
                <div id="mc_embed_signup" className="subscribe-form">
                  <form onSubmit={handleSubmit}>
                    <div className="mc-form">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Mail"
                        name="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="clear">
                        <button
                          className="theme-btn-one btn_md"
                          type="submit"
                          name="subscribe"
                          value=""
                        >
                          Send Mail
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="go-top active" onClick={() => { window.scrollTo(0, 0) }}>
          <i className="fa fa-chevron-up"></i>
          <i className="fa fa-arrow-up"></i>
        </div>
      </footer>

      <section id="copyright_one">
        <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                                <h6>© CopyRight 2023 <span>DragShop</span></h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_right">
                                <img src={payment} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
      </section>
      {
        cookie ? <Cookie accept={acceptCookie} cancel={cancelCookie} /> : null
      }
      <NewsletterModal show={promoCenter} stop={stopPromoModal} start={startPromoModal} />
    </>
  );
};

export default Footer;