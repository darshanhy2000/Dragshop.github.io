import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.jpg'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT OUR DragShop STORE</h2>
                                <h4>We believe that every project existing in digital world is a result of an idea and every
                                    idea has a cause.</h4>
                                <p><strong>"DragShop</strong> is an multi-vendor B2C fast e-commerce company. The company mainly focuses on men,women and children wear, but it also offers
                                    other apparel, clothes, accessories, shoes, bags and other fashion items. <strong>DragShop</strong> mainly targets Europe, America, Australia, and the
                                    Middle East along with other consumer markets."</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can enjoy the beauty of fashion." Its business covers more than 220 countries and regions around the world</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can <strong>DragShop</strong> the beauty of fashion." Its business covers more than 220 countries and regions around the world</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can enjoy the <strong>ANDSHOP</strong> of fashion." Its business covers more than 220 countries and regions around the world</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
