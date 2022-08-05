import React from "react";
import './Card.css';
import data from '../object'; 

import Cardchild from "./Cardchild";

export default function Card({ input }) {
    
   let filterItem =data.filter((ele) => ele.type.includes(input.input.toLowerCase()));

    
   
    return (
        <>
        <Cardchild child={{data,filterItem,input }}/>
          
        </>
    )
}