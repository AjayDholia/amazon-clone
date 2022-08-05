import Sign from './component/Sign'
import './App.css';
import Header from './component/Header';
import Subheader from './component/Subheader';
import Card from './component/Card';
import Shirt from './component/subheaderoption/Shirt'
import Paint from './component/subheaderoption/Paint'
import Cart from './component/Cart'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{ useState } from 'react';

function App() {
  let [input, setInput] = useState(' ');
  // for add to cart
  const [cart, setcart] = useState([]);
  // we are making this state here so that we can use it on any of the other child component
  
  // function add to cart
  // step :2 => making logic for add to cart
  function addToCart(product) {
    console.log("clicked on cart",product);

        // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele)=> ele.id=== product.id);
        // for empty cart array this find method will not work.
     
    if(productinCart){
            // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
            if(productinCart.quantity < productinCart.totalQuantity){
      setcart(cart.map((ele)=> ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity+1}: ele ))
            }
    }
    else{
      // spread opertor helps to new object or data in existeing array
      // [...cart]
      setcart([...cart,{...product,quantity : 1}])
    }

  }

  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setcart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setcart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }
  return (
  <>
  
  <BrowserRouter>
  <Header setInput={{setInput,cart}}/>
  <Subheader/>
      <Routes>
        <Route path="/" element={<Card input={{input,addToCart}}/>}/>
        <Route path='/card' element={<Card />} />
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/login' element={<Login/>}/>
          <Route path='/shirt' element={<Shirt addToCart={addToCart}/>} />
          <Route path='/paint' element={<Paint addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart cart={{cart,addToCart,deleteToCart}}/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
