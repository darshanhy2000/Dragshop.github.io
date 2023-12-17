import React from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ContactArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact_info">
                                <h3>Contact Information</h3>
                                <p>In front of the gates, before the first drops of water, there are games and activities; 
                                    Donec is truly not, a sitter sitting on a chair, a sitter is in the league. In front of the vehicle, 
                                    it sits like a vehicle element, and sits in a coma. Proin owns the rise. Mauris's bland squad is elite,
                                    with a nib pulvinar eget tinin. Curabitur, not nothing, is seated on the nisl tempus debate in lectures. 
                                    We live great, composed, and sedentary, telling stories. Cras's ultricies reads like a large dictum gateway. 
                                    Proin owns the rise. Curabitur is in fact, a sitter is in a league, a gatekeeper is at half-mast."

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left_side_contact side_card">
                                <ul>
                                    <li className="address_location">
                                    <div className="contact_widget ">
                                    <i className="fa fa-map-marker"></i>
                                        <p>outer ring road <br/> bengalore  </p>
                                    </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                        <i className="fa fa-phone"></i>
                                            <Link to="/">+91 875968079 </Link>
                                        </div>
                                        <div className="contact_widget">
                                        <i className="fa fa-mobile"></i>
                                        <Link to="/">+91 56796805567</Link>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-envelope"></i>
                                            <Link to="/">demo@gmail.com</Link>
                                        </div>
                                        <div className="contact_widget">
                                        <i className="fa fa-globe"></i>
                                            <Link to="/">DragShop.com</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact_form_one">
                                <h3>Get In Touch</h3>
                                <form onSubmit={(e)=> {e.preventDefault(); Swal.fire('Thank You', 'We Got Your Message', 'success')}}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Phone" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Map />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactArea