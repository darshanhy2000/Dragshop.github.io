
import React from 'react';

const YourOrder = () => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                <h3>Your order</h3>
                <div className="order_table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>green Dress For Woman <strong> × 1</strong></td>
                                <td>₹100.00</td> {/* Use ₹ symbol here */}
                            </tr>
                            <tr>
                                <td>V-Neck Dress <strong> × 1</strong></td>
                                <td>₹50.00</td> {/* Use ₹ symbol here */}
                            </tr>
                            <tr>
                                <td>Boho Tops <strong> × 1</strong></td>
                                <td>₹40.00</td> {/* Use ₹ symbol here */}
                            </tr>
                            <tr>
                                <td>Tulip Dress  <strong> × 1</strong></td>
                                <td>₹60.00</td> {/* Use ₹ symbol here */}
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Cart Subtotal</th>
                                <td>₹250.00</td> {/* Use ₹ symbol here */}
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td><strong>₹5.00</strong></td> {/* Use ₹ symbol here */}
                            </tr>
                            <tr className="order_total">
                                <th>Order Total</th>
                                <td><strong>₹255.00</strong></td> {/* Use ₹ symbol here */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="payment_method">
                    {/* ... Rest of your component */}
                </div>
            </div>
        </>
    );
};

export default YourOrder;
