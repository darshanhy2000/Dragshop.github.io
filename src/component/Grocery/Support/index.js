import React from 'react'
import Img1 from '../../../assets/img/grocery/icon/free.svg'
import Img2 from '../../../assets/img/grocery/icon/refund.svg'
import Img3 from '../../../assets/img/grocery/icon/secure.svg'
import Img4 from '../../../assets/img/grocery/icon/support.svg'
const SupportData = [
    {
        img: Img1,
        title: "Free Deliver",
        para: "For all oders over $100"
    },
    {
        img: Img2,
        title: "Refundable",
        para: "If your item have no damage."
    },
    {
        img: Img3,
        title: "Secure Payment",
        para: "100% secure payment"
    },
    {
        img: Img4,
        title: "24/7 Customer Support",
        para: "We have dedicated support"
    },
]

const SupportArea = () => {
    return (
        <>
            <section id="grocery_support" className="pb-100">
                <div className="container">
                    <div className="row">
                        {SupportData.map((data, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                                <div className="grcery_support_boxed">
                                    <img src={data.img} alt="icon" />
                                    <div className="support_boxed_grocery_content">
                                        <h5>{data.title}</h5>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}




                    </div>
                </div>
            </section>
        </>
    )
}

export default SupportArea