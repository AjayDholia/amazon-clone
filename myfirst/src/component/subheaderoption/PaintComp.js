import React from 'react'
import '../Card.css'

export default function PaintComp({ data, addToCart }) {
    return (
        <>
            <div className="parent-card">
                {
                    data.map((ele) => {
                        return (
                            <div className="card-container">
                                <div className="card-img-container">
                                    <img src={`${ele.image}`} alt="null" />
                                </div>
                                <div className="details">{ele.title} <br />RS.{ele.price}<br /> In Stock :-  {ele.totalQuantity} <br /><button onClick={() => addToCart(ele)}>Add to Cart</button></div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
