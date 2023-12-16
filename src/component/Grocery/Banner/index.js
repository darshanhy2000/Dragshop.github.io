import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/grocery/banner/banner1.png'
import img2 from '../../../assets/img/grocery/banner/banner2.png'
import img3 from '../../../assets/img/grocery/banner/banner3.png'
import img4 from '../../../assets/img/grocery/banner/banner4.png'

const GroceryBanner = () => {
    return (
        <>
            <div id="grocery_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="grocery_banner_img">
                                <Link to="./shopTwo">
                                    <img src={img1} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="grocery_banner_img">
                                <Link to="./shopTwo">
                                    <img src={img2} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-6 col-12">
                                    <div className="grocery_banner_img  banner_last_img">
                                        <Link to="./shopTwo">
                                            <img src={img3} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-6 col-12">
                                    <div className="grocery_banner_img">
                                        <Link to="./shopTwo">
                                            <img src={img4} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroceryBanner