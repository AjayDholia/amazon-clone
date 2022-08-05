import React from 'react'

import data from '../../object.js'
export default function shirt({addToCart}) {
    let shirtData = data.filter((ele) => ele.type==="shirt");
  return (
    <>
    {/* <ShirtComp data={shirtData}/> */}
    
    <div className="parent-card">
            {
              shirtData.length===0 ?
              <div>Error 404</div> 
              :
                shirtData.map((ele) => {
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
