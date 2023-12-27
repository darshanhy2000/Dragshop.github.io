import React from 'react'
import Footer from '../component/Common/Footer'
import Header from '../component/Common/Header'
import Banner from '../component/BabyToys/Banner'
import Category from '../component/BabyToys/Category'
import BabyOffer from '../component/BabyToys/ShopOffer'
import TrendingProducts from '../component/BabyToys/TrendingProducts'
import KidsCollection from '../component/BabyToys/KidsCollection'
import TopProducts from '../component/BabyToys/TopProducts'
import BannerBottom from '../component/BabyToys/BannerBottom'
import Instagram from '../component/BabyToys/instagram'
import BlogArea from '../component/BabyToys/OurBlog'
const BabyToys = () => {
    return (
        <>
            <Header />
            <Banner />
            <Category />
            <BabyOffer />
            <TrendingProducts />
            <KidsCollection />
            <TopProducts />
            <BannerBottom />
            <BlogArea />
            <Instagram />
            <Footer />
        </>
    )
}

export default BabyToys