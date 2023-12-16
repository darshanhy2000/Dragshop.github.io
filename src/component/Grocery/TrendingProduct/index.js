import React from 'react'
import GroceryHeading from '../GroceryHeading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CategoriData } from '../TopCategories/CategorieData';
import { Link } from 'react-router-dom';

const TrendingProduct = () => {
    let settings = {
        arrows: false,
        dots: true,
        margin: 60,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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
            <section id="grocery_trending_product" className="pb-100">
                <div className="container">
                    <GroceryHeading heading="Trending Product" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="grocery_categories_slider">
                                <Slider {...settings}>
                                    {CategoriData.map((data, index) => (
                                        <div className="grocery_small_item" key={index}>
                                            <Link to="./shopTwo">
                                                <img src={data.img} alt="item" />
                                                <h4>{data.title}</h4>
                                                <p>{data.title}</p>
                                            </Link>
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

export default TrendingProduct