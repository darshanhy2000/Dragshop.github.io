import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductHovers from '../../component/Common/Product/ProductHover'
import Footer from '../../component/Common/Footer'
const ProductHover = () => {
    return (
        <>
            <Header />
            <Banner title="Product Hover" />
            <ProductHovers />
            <Footer />
        </>
    )
}

export default ProductHover