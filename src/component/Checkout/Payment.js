import React, { useState,useEffect } from 'react';
import phonePeLogo from '../../assets/img/common/phonepe.png';
import GooglePay from '../../assets/img/common/Google-Pay.png';
import UpiImg from '../../assets/img/common/upi-logo.png';
import Swal from 'sweetalert2';

const Payment = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        // Perform any necessary actions when placing the order
        // For example, make an API request or update the database

        // Update the state to show the "Thank You" message
        setOrderPlaced(true);

        // Display SweetAlert notification
        Swal.fire({
            title: 'Thank you!',
            text: 'Your order has been placed.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    // Clear the "Thank You" message after a delay
    useEffect(() => {
        if (orderPlaced) {
            const timeoutId = setTimeout(() => {
                setOrderPlaced(false);
            }, 5000); // Adjust the delay (in milliseconds) as needed

            return () => clearTimeout(timeoutId);
        }
    }, [orderPlaced]);

    

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
                                    <a href="upi://pay?pa=example@upi&pn=Example%20Name&mc=1234&tid=9876543210&tr=1234567890&tn=Example%20Transaction&am=10.00&cu=INR&url=https://example.com/cb" target="_blank" rel="noopener noreferrer">
                                        <img src={UpiImg} alt="UPI" className="payment-logo" />
                                    </a>
                                    <a href="https://www.phonepe.com/en/" target="_blank" rel="noopener noreferrer">
                                        <img src={phonePeLogo} alt="PhonePe" className="payment-logo" />
                                    </a>
                                    <a href="https://pay.google.com/intl/en_in/about/" target="_blank" rel="noopener noreferrer">
                                        <img src={GooglePay} alt="Google Pay" className="payment-logo" />
                                    </a>
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
    );}

export default Payment;


