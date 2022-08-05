import React from 'react';
import {useState,useEffect} from 'react';

export default function Cardchild({child}) {
   let[info,setInfo] = useState([]);

//    let filterItem =info.filter((ele) => ele.type.includes(input.input.toLowerCase()));

   useEffect(()=>{
    if(child.filterItem == 0)
    {
        setInfo(child.data);
    }
    else{
        setInfo(child.filterItem);
    }
},[child.filterItem]);
   console.log(info);


  return (
    <>
     <div className="parent-card">
                {
                    
                        info.map((ele) => {
                            return (
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={`${ele.image}`} alt="null" />
                             </div>
             <div className="details">{ele.title} <br />RS.{ele.price}<br /> In Stock :-  {ele.totalQuantity} <br />
                                     <button onClick={()=>child.input.addToCart(ele)}>Add to Cart</button></div>

                                </div>
                            )
                        }) 
                      
                }
            </div>
    </>
  )
}
