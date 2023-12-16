import React from 'react'
import Img1 from '../../../assets/img/grocery/offer/cta.png'

const CtaArea = () => {
    return (
        <>
            <section id="grocery_cta_area" className="ptb-100">
                <div className="container">
                    <div className="grocery_cat_wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="grocery_cta_content">
                                    <h2>Shop your daily goods from the app
                                        & enjoy upto 50% discount </h2>
                                    <p>Enter your email address to download the app</p>
                                    <form action="#">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Email Address" required />
                                            <button className="btn_cta" type="submit"><i className="fa fa-paper-plane"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="grocery_cta">
                                    <img src={Img1} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaArea