import React from 'react'
const Address = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Billing Address</h4>
                        <div className="billing_address">
                            <h5><strong>Alex Porty</strong></h5>
                            <p>
                             bengaluru<br /> 
                            </p>
                            <p>Mobile: (+91) 123-456789</p>
                            <button className="theme-btn-one bg-black btn_sm mt-4">Edit
                                Address</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Shipping Address</h4>
                        <div className="billing_address">
                            <h5><strong>Darshan</strong></h5>
                            <p>
                            street city	 <br />bengaluru, 560076
                            </p>
                            <p>Mobile: (+91) 209-534-4814</p>
                            <button  className="theme-btn-one bg-black btn_sm mt-4">Edit
                                Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
