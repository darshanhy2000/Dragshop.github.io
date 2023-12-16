import React, { useEffect, useRef, useState } from 'react'
import GroceryHeading from '../GroceryHeading'
import BigImg from '../../../assets/img//grocery/product/cat_item10.png'
import { FeaturedProductsData } from '../FeaturedProducts/Data'
import { Link } from 'react-router-dom'
const DealsDay = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('November 26 2023 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop Our Timer
                clearInterval(interval.current);
            } else {
                // update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer()
    })

    return (

        <>
            <section id="todays_deails_area">
                <div className="container">
                    <GroceryHeading heading="Deals of the day" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="grocery_todays_area_left">
                                <div className="grocery_todays_count">
                                    <div id="countdown_grocery">
                                        <ul>
                                            <li><span>{timerDays} </span>days</li>
                                            <li><span>{timerHours}</span>Hours</li>
                                            <li><span>{timerMinutes}</span>Minutes</li>
                                            <li><span>{timerSeconds}</span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grocery_todays_img">
                                    <img src={BigImg} alt="img" />
                                </div>
                                <div className="grocery_todays_content">
                                    <h3>Special chana dal</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    <a href="shop-3.html" className="theme-btn-one bg-black btn_md">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                {FeaturedProductsData.slice(0, 4).map((data, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="sp_product_item">
                                            <div className="sp_product_thumb">
                                                <span className="batch">{data.batch}</span>
                                                <Link to="/shopTwo">
                                                    <img src={data.img} alt="img" />
                                                </Link>
                                            </div>
                                            <div className="sp_product_content">
                                                <div className="rating_sp">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <h6><a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">{data.title}</a></h6>
                                                <span className="product_status">{data.stock}</span>
                                                <div className="sp_cart_wrap">
                                                    <form action="#!">
                                                        <div className="cart_plus_minus">
                                                            <input type="text" value="1" />
                                                            <div className="dec qtybutton">-</div>
                                                            <div className="inc qtybutton">+</div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <p>{data.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='row display_nones_tabs'>
                                {FeaturedProductsData.slice(4, 8).map((data, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="sp_product_item">
                                            <div className="sp_product_thumb">
                                                <span className="batch">{data.batch}</span>
                                                <Link to="/shopTwo">
                                                    <img src={data.img} alt="img" />
                                                </Link>
                                            </div>
                                            <div className="sp_product_content">
                                                <div className="rating_sp">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <h6><Link to="/shopTwo">{data.title}</Link></h6>
                                                <span className="product_status">{data.stock}</span>
                                                <div className="sp_cart_wrap">
                                                    <form action="#!">
                                                        <div className="cart_plus_minus">
                                                            <input type="text" value="1" />
                                                            <div className="dec qtybutton">-</div>
                                                            <div className="inc qtybutton">+</div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <p>{data.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DealsDay