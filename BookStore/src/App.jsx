import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import "../src/styles/amazon.css";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let present = false;
    // console.log(item);
    cart.forEach((product) => {
      if (item.id === product.id) {
        present = true;
      }
    });
    if (present) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) =>{
   let ind = -1;
   cart.forEach((data, index)=>{
      if (data.id === item.id)
         ind = index;
   });
   const tempArr = cart;
   tempArr[ind].amount += d;
   
   if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
   setCart([...tempArr])
}
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="warning">Item is Already added to your cart</div>
      )}
    </div>
  );
};

export default App;
