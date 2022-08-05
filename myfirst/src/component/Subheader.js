import React from 'react';
import {Link} from 'react-router-dom';
import './Subheader.css'
function Subheader(){
    return(
        <>
        <div className='subheader'>
           
            <div className='b'>
              <Link to="/shirt" className="shirtlink"> <div className='best' >Shirt</div></Link>
              <Link to="/paint" ><div className='mobile'>Pant</div></Link>

              
            </div>
            {/* <div className='c'>
            <Link to="/paint" ><div className='mobile'>Pant</div></Link>

               </div> */}
               </div>
            
        </>
    )
}

export default Subheader