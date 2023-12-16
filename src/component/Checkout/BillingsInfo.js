import React from 'react'

const BillingsInfo = () => {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="checkout-area-bg bg-white">
                    <div className="check-heading">
                        <h3>Billings Information</h3>
                    </div>
                    <div className="check-out-form">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="fname">First name<span className="text-danger">*</span> </label>
                                        <input type="text" required="" className="form-control" id="fname"
                                            placeholder="First name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="lname">Last name<span className="text-danger">*</span></label>
                                        <input type="text" required="" className="form-control" id="lname"
                                            placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="cname">Company Name<span className="text-danger">*</span></label>
                                        <input className="form-control" required="" type="text" id="cname"
                                            placeholder="Company Name" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Addresse<span className="text-danger">*</span></label>
                                        <input className="form-control" required="" type="text" id="email"
                                            placeholder="info@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="country">Country<span className="text-danger">*</span></label>
                                        <select className="form-control first_null" id="country">
                                            <option defaultValue="">Select an option...</option>
                                            <option defaultValue="IN">India</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="city">State/City<span className="text-danger">*</span></label>
                                        <select className="form-control first_null" id="city">
                                            <option defaultValue="">Select an option...</option>
                                            <option defaultValue="IN">Karnataka</option>
                                            <option defaultValue="IN">Maharashtra</option>
                                            <option defaultValue="IN">kerala</option>
                                            <option defaultValue="IN">Tamilnadu</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="zip">State/City<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="zip" required=""
                                            placeholder="Enter Your zipcode" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="faddress">Full Address<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="faddress" required=""
                                            placeholder="Enter your address here.." />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="messages">Additional Notes<span className="text-danger">*</span></label>
                                        <textarea rows="5" className="form-control" id="messages"
                                            placeholder="Order notes"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Save In Address
                                            Book</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingsInfo