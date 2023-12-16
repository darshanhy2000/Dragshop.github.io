import React from 'react'
const Payment = () => {
    return (
        <>
            <div className="order_review bg-white">
                <div className="check-heading">
                    <h3>Payment</h3>
                </div>
                <div className="payment_method">
                    <form>
                        <div className="accordion" id="accordionExample">
                            <div className="payment_area_wrappers">
                                <div className="heading_payment" id="headingOne">
                                    <div className="" data-toggle="collapse" data-target="#collapseOne" >
                                        <input type="radio" name="payment" id="html" value="HTML" defaultChecked />
                                        <label htmlFor="html">Direct Bank Transfer</label>
                                    </div>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Direct Bank Transfer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payment_area_wrappers">
                                <div className="heading_payment" id="headingTwo">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                        <input type="radio" name="payment" id="javascript" value="JavaScript" />
                                        <label htmlFor="javascript">Mobile Banking</label>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Direct Mobile Transfer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payment_area_wrappers">
  
                                <div className="heading_payment" id="headingThree">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseThree">
                                        <input type="radio" name="payment" id="paypal" value="PayPal" />
                                        <label htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>
                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Some placeholder content for the PayPal payment option. This panel is hidden by default.</p>
                                    </div>
                                </div>

                            
                                <div className="heading_payment" id="headingFour">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseFour">
                                        <input type="radio" name="payment" id="upi" value="UPI" />
                                        <label htmlFor="upi">UPI</label>
                                    </div>
                                </div>
                                <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Some placeholder content for the UPI payment option. This panel is hidden by default.</p>
                                    </div>
                                </div>


                                <div className="heading_payment" id="headingFive">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseFive">
                                        <input type="radio" name="payment" id="phonepe" value="PhonePe" />
                                        <label htmlFor="phonepe">PhonePe</label>
                                    </div>
                                </div>
                                <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Some placeholder content for the PhonePe payment option. This panel is hidden by default.</p>
                                    </div>
                                </div>

                                
                                <div className="heading_payment" id="headingSix">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseSix">
                                        <input type="radio" name="payment" id="gpay" value="Google Pay" />
                                        <label htmlFor="gpay">Google Pay (GPay)</label>
                                    </div>
                                </div>
                                <div id="collapseSix" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Some placeholder content for the Google Pay (GPay) option. This panel is hidden by default.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <button className="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
            </div>
        </>
    )
}

export default Payment