// import React from 'react';
// import phonePeLogo from '../../assets/img/common/phonepe.png';
// import GooglePay from '../../assets/img/common/Google-Pay.png';
// import UpiImg from '../../assets/img/common/upi-logo.png';

// const Payment = () => {
//     return (
//         <>
//             <div className="order_review bg-white">
//                 <div className="check-heading">
//                     <h3>Payment</h3>
//                 </div>
//                 <div className="payment_method">
//                     <form>
//                         <div className="accordion" id="accordionExample">
//                             <div className="payment_area_wrappers">
//                                 <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
//                                     <div className="payment_body">
//                                         <p>Direct Bank Transfer</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="payment_area_wrappers">
//                                 <div className="heading_payment" id="headingTwo">
//                                     <div className="collapsed" data-toggle="collapse" data-target="#collapseTwo">
//                                         <input type="radio" name="payment" id="javascript" value="JavaScript" />
//                                         <label htmlFor="javascript">Mobile Banking</label>
//                                     </div>
//                                 </div>
//                                 <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
//                                     <div className="payment_body">
//                                         <p>Direct Mobile Transfer</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="payment_area_wrappers">
//                                 <div id="collapseThree" className="collapse" data-parent="#accordionExample">
//                                     <div className="payment_body">
//                                         <p>Some placeholder content for the PayPal payment option. This panel is hidden by default.</p>
//                                     </div>
//                                 </div>

                            
//                                 <div className="heading_payment" id="headingFour">
//                                     <div className="collapsed" data-toggle="collapse" data-target="#collapseFour">
//                                     <label htmlFor="Upi">
//                                         <img src={UpiImg} alt="PhonePe" className="payment-logo" />
//                                         </label>
//                                         <label htmlFor="phonepe">
//                                             <img src={phonePeLogo} alt="PhonePe" className="payment-logo" />
//                                         </label>
//                                         <label htmlFor="phonepe">
//                                             <img src={GooglePay} alt="PhonePe" className="payment-logo" />
//                                         </label>
//                                     </div>
//                                 </div>
//                                 </div>
                                
//                         </div>
//                     </form>
//                 </div>
//                 <button className="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
//             </div>
            
//         </>
//     )
// }

// export default Payment


import React, { useState } from 'react';
import phonePeLogo from '../../assets/img/common/phonepe.png';
import GooglePay from '../../assets/img/common/Google-Pay.png';
import UpiImg from '../../assets/img/common/upi-logo.png';
import Swal from 'sweetalert2';


const Payment = () => {
    const [setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        // Perform any necessary actions when placing the order
        // For example, make an API request or update the database

        // Update the state to show the "Thank You" message
        setOrderPlaced(true);
    };

    // Clear the "Thank You" message after a delay
    Swal.fire({
        title: 'Thank you!',
        text: 'Your order has been placed.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    return (
        <div className="order_review bg-white">
            <div className="check-heading">
                <h3>Payment</h3>
            </div>
            
               <div className="payment_method">
                                         <form>
                         <div className="accordion" id="accordionExample">
                             <div className="payment_area_wrappers">
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
                                 <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                     <div className="payment_body">
                                         <p>Some placeholder content for the PayPal payment option. This panel is hidden by default.</p>
                                     </div>
                                 </div>

                            
                                 <div className="heading_payment" id="headingFour">
                                     <div className="collapsed" data-toggle="collapse" data-target="#collapseFour">
                                     <label htmlFor="Upi">
                                         <img src={UpiImg} alt="PhonePe" className="payment-logo" />
                                         </label>
                                         <label htmlFor="phonepe">
                                             <img src={phonePeLogo} alt="PhonePe" className="payment-logo" />
                                         </label>
                                         <label htmlFor="phonepe">
                                             <img src={GooglePay} alt="PhonePe" className="payment-logo" />
                                         </label>
                                     </div>
                                 </div>
                                 </div>
                                
                         </div>
                     </form>

                    <br></br>
                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            
        </div>
    );
};

export default Payment;


