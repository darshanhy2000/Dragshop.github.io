import React from 'react'

const GroceryHeading = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="grocery_heading">
                        <h2>{props.heading}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroceryHeading