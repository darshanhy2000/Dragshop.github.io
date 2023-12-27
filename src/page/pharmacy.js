import React from 'react'
import Header from '../component/Common/Header'
import PharmacyBanner from '../component/Pharmacy/Banner'
import TopCategories from '../component/Pharmacy/TopCategories'
import OfferArea from '../component/Pharmacy/Offer'
import FeaturedProduct from '../component/Pharmacy/FeaturedProduct'
import DealMonth from '../component/Pharmacy/DealMonth'
import HotItems from '../component/Pharmacy/HotItems'
import TopBrand from '../component/Pharmacy/TopBrand'
import BannerBottom from '../component/Pharmacy/BannerBottom'
import FooterTop from '../component/Pharmacy/FooterTop'
import Footer from '../component/Common/Footer'

const Pharmacy = () => {
    return (
        <>
            <Header />
            <PharmacyBanner />
            <TopCategories />
            <OfferArea />
            <FeaturedProduct />
            <DealMonth />
            <HotItems />
            <TopBrand />
            <BannerBottom />
            <FooterTop />
            <Footer />
        </>


    )
}

export default Pharmacy