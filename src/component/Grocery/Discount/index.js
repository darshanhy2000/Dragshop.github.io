import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/grocery/offer/top-offer-1.png'
import img2 from '../../../assets/img/grocery/offer/top-offer-2.png'
import img3 from '../../../assets/img/grocery/offer/top-offer-3.png'

const Discount = () => {
    return (
        <>
            <div id="discount-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="discount_item">
                                <Link to="./shopTwo"><img src={img1} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="discount_item">
                                <Link to="./shopTwo"><img src={img2} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="discount_item">
                                <Link to="./shopTwo"><img src={img3} alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discount