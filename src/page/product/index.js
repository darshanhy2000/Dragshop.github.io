import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductDetailsOne from '../../component/Common/ProductDetails/ProductDetails'
import Footer from '../../component/Common/Footer'

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Banner title="Product Details" />
            <ProductDetailsOne />
            <Footer />
        </>
    )
}

export default ProductDetails