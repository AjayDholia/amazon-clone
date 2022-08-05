import React from 'react'

export default function Cart({cart}) {
  return (
    <>
    <div className="parent-card">
                {
                    cart.cart.length === 0 ?
                     <div style={{color:"red",fontSize:"150px"}}>Cart is Empty</div>   
                    : cart.cart.map((ele) => {
                            return (
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={`${ele.image}`} alt="null" />
                                    </div>
                                    <div className="details">{ele.title} <br />{ele.price}<br />   {ele.quantity} <br /> Total Rs.{ele.price*ele.quantity} <br />
                                    <button onClick={()=>cart.addToCart(ele)}>Add to Cart</button>
                                    <button onClick={()=> cart.deleteToCart(ele)}>Delete</button>
                                    </div>

                                </div>
                            )
                        })
                }
            </div>
    </>
  )
}
