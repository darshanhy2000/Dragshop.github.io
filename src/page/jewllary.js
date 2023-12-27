import React from 'react'
import Footer from '../component/Common/Footer'
import Header from '../component/Common/Header'
import BannerArea from '../component/Jewellary/Banner'
import OfferArea from '../component/Jewellary/OfferArea'
import OfferAreaTwo from '../component/Jewellary/OfferAreaTwo'
import PopularProduct from '../component/Jewellary/PopularProduct'
import ParalexArea from '../component/Jewellary/ParalexArea'
import ExploreProduct from '../component/Jewellary/ExploreProduct'
import ServiceArea from '../component/Jewellary/Service'
import BlogArea from '../component/Jewellary/Blog'
const Jewllary = () => {
    return (
        <>
            <Header />
            <BannerArea />
            <OfferArea />
            <OfferAreaTwo />
            <PopularProduct />
            <ParalexArea />
            <ExploreProduct />
            <ServiceArea />
            <BlogArea />
            <Footer />
        </>
    )
}

export default Jewllary