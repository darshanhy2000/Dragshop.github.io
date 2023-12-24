import React from 'react'
import { Link } from 'react-router-dom'

const Trending = () => {
    return (
        <>
     <section id="special_offer_one">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="offer_banner_one text-center colour-black">
                        <h5 style={{ color: 'black' }}>TRENDING</h5>
                        <h2 style={{ color: 'black' }}>New Fashion</h2>
                        <p style={{ color: 'black' }}>
                        Discover the latest trends in fashion with our exclusive collection. Immerse yourself in a world of style and choose from a
                         variety of unique and fashionable items. Explore endless options that cater to your preferences
                        </p>
                        <Link to="/shop" className="theme-btn-one bg-whites btn_md" >
                            Shop Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </>
    )
}

export default Trending
