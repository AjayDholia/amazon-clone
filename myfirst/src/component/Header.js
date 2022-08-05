
// rfc snippet code

import React from "react";
import { Link } from "react-router-dom";

import './Header.css'
export default function header({setInput}){
     console.log(setInput.cart);
    function manageInput(e){
        let {value} =e.target;
        setInput.setInput(value);
    }
    return(
        <>
        
        <div className="nav-bar" >
        <div className="img-container">
            <Link to="/"><img src="./logo.png" alt=""/></Link>
        </div>
        <div className="hello-container">
            <div className="hello">Hello</div>
            <div className="address-container">
                <span className="material-symbols-outlined location">
                    person_pin_circle
                </span>
                <div className="address">Select your address</div>
            </div>
        </div>
        <div className="sarch-bar" >
            <div className="option-bar">
                <span className="menu">All</span>
                <span className="material-symbols-outlined">
                    arrow_drop_down
                    </span>
                    <select className="select-container">
                        <option selected="selected" value="search-alias=aps">All Categories</option>
                        <option value="search-alias=alexa-skills">Alexa Skills</option>
                        <option value="search-alias=amazon-devices">Amazon Devices</option>
                        <option value="search-alias=fashion">Amazon Fashion</option>
                        <option value="search-alias=nowstore">Amazon Fresh</option>
                        <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
                        <option value="search-alias=appliances">Appliances</option>
                        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                        <option value="search-alias=baby">Baby</option>
                        <option value="search-alias=beauty">Beauty</option>
                        <option value="search-alias=stripbooks">Books</option>
                        <option value="search-alias=automotive">Car &amp; Motorbike</option>
                        <option value="search-alias=apparel">Clothing &amp; Accessories</option>
                        <option value="search-alias=collectibles">Collectibles</option>
                        <option value="search-alias=computers">Computers &amp; Accessories</option>
                        <option value="search-alias=todays-deals">Deals</option>
                        <option value="search-alias=electronics">Electronics</option>
                        <option value="search-alias=furniture">Furniture</option>
                        <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
                        <option value="search-alias=gift-cards">Gift Cards</option>
                        <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
                        <option value="search-alias=hpc">Health &amp; Personal Care</option>
                        <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                        <option value="search-alias=jewelry">Jewellery</option>
                        <option value="search-alias=digital-text">Kindle Store</option>
                        <option value="search-alias=luggage">Luggage &amp; Bags</option>
                        <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                        <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                        <option value="search-alias=popular">Music</option>
                        <option value="search-alias=mi">Musical Instruments</option>
                        <option value="search-alias=office-products">Office Products</option>
                        <option value="search-alias=pets">Pet Supplies</option>
                        <option value="search-alias=instant-video">Prime Video</option>
                        <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                        <option value="search-alias=software">Software</option>
                        <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
                        <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
                        <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                        <option value="search-alias=toys">Toys &amp; Games</option>
                        <option value="search-alias=under-ten-dollars">Under ₹500</option>
                        <option value="search-alias=videogames">Video Games</option>
                        <option value="search-alias=watches">Watches</option>
                    </select>
            </div>
            
            <div className="sarch-input">
                <input type="text" name="" id="" className="search-field" onChange={manageInput}/>
            </div>
            <div className="sarch-icon">
                
                <span className="material-symbols-outlined">
                    search
                    </span>
                
            </div>
        </div>
        <div className="hello-sign-container">
           <Link to="/sign"><button className="hello-sign">Hello, Sign in </button></Link> 
            <div className="account-container">
                <Link to="/login"><div className="account">login</div></Link>
                <span className="material-symbols-outlined">
                    arrow_drop_down
                    </span>
            </div>
        </div>
        <div className="hello-sign-container">
            <div class="hello-sign">Returns</div>
            <div class="account-container">
                <div class="account">and Orders</div>
                
            </div>
        </div>
        <div class="shopping-container">
            <span class="material-symbols-outlined">
                shopping_cart
                </span>
               <Link to="/cart"> <div class="shopping">Cart </div></Link>
                <div className="box-count">{setInput.cart.length}</div>
        </div>
    </div>
        
        </>
    )
}