import React from 'react'
import Header from '../component/Common/Header'
import GroceryBanner from '../component/Grocery/Banner'
import TopCategories from '../component/Grocery/TopCategories'
import Discount from '../component/Grocery/Discount'
import FeaturedProducts from '../component/Grocery/FeaturedProducts'
import DealsDay from '../component/Grocery/DealsDay'
import CtaArea from '../component/Grocery/CtaArea'
import TrendingProduct from '../component/Grocery/TrendingProduct'
import SupportArea from '../component/Grocery/Support'
import Footer from '../component/Common/Footer'
const Grocery = () => {
    return (
        <>
            <Header />
            <GroceryBanner />
            <TopCategories />
            <Discount />
            <FeaturedProducts />
            <DealsDay />
            <CtaArea />
            <TrendingProduct />
            <SupportArea />
            <Footer />
        </>
    )
}

export default Grocery