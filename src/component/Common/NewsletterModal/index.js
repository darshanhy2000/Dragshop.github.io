import React, { useState } from 'react'
import logo from '../../../assets/img/logo.png'
import img from '../../../assets/img/common/modal.png'
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';

const NewsletterModal = (props) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false); // Define the errorMessage state
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setIsValidEmail(validateEmail(e.target.value));
      // Clear the error message when the user starts typing a valid email
      setErrorMessage('Please enter a valid email address');
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the email is valid before submitting the form
        if (isValidEmail) {
          props.stop();
          props.start();
          Swal.fire('Success', 'Thank you for your Subscription', 'success');
        } else {
          
        }
      };
  
    const validateEmail = (email) => {
      // Simple email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    return (
        <>
            <Modal show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body className="newsleetre_modal">
                    <div className="modal-content">
                        <div className="modal-body modal1 modal-bg">
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.start}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-6">
                                            <div className="offer_modal_left">
                                                <img src={logo} alt="logo" />
                                                <h3>SUBSCRIBE TO NEWSLETTER</h3>
                                                <p>Subscribe to the DragShop mailing list to receive updates
                                                    on new arrivals, special offers and our promotions.</p><br>
                                                    </br>
                                                
                                                 {errorMessage && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errorMessage}
                                                    </div>
                                                    )}
                                                 
                                                <form onSubmit={handleSubmit}>
                                            <div className="input-group mb-3">
                                                <input
                                                type="email"
                                                className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
                                                placeholder="Your Email address"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                                />
                                                <div className="input-group-append">
                                                <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">
                                                    Subscribe
                                                </button>
                                                </div>
                                            </div>
                                            <div className="check_boxed_modal">
                                                <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="vehicle1"
                                                name="vehicle1"
                                                value="Bike"
                                                onClick={props.stop}
                                                />
                                                <label htmlFor="vehicle1">Don't show this popup again</label>
                                            </div>
                                            {!isValidEmail && (
                                                <div className="invalid-feedback">Please enter a valid email address.</div>
                                            )}
                                            </form>     
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6">
                                            <div className="offer_modal_img d-none d-md-block">
                                                <img src={img} alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewsletterModal