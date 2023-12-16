import React from 'react'
import GroceryHeading from '../GroceryHeading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FeaturedProductsData } from './Data';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {

    let settings = {
        arrows: false,
        dots: true,
        margin: 30,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    };
    return (
        <>
            <section id="grocery_featured_area" className="ptb-100 slider_button_style">
                <div className="container">
                    <GroceryHeading heading="Featured products" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="featured_grocery_slider">
                                <Slider {...settings}>
                                    {FeaturedProductsData.map((data, index) => (
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
                                    ))}

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts