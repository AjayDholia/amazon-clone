import React from 'react'
import PaintComp from './PaintComp'
import data from '../../object.js'
export default function Paint({ addToCart }) {
  let paintData = data.filter((ele) => ele.type === "paint");
  return (
    <>
      <PaintComp data={paintData} addToCart={addToCart} />
      {/* <div className="parent-card">
            {
              paintData.length===0 ?
              <div>Error 404</div> 
              :
                paintData.map((ele) => {
                  return (
                      <div className="card-container">
                          <div className="card-img-container">
                              <img src={`${ele.image}`} alt="null" />
                          </div>
                          <div className="details">{ele.title} <br />{ele.price}<br /> In Stock :-  {ele.totalQuantity} <br /><button onClick={() => addToCart(ele)}>Add to Cart</button></div>
                      </div>
                  )
              })
            }
            </div> */}
    </>
  )
}
