import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item"
import { Link } from "react-router-dom";

const cartItems=[
  {
    productId:"asdasdasd",
    photo:"https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg",
    name:"Macbook",
    price:3000,
    quantity:4,
    stock:10,
  }
];
const subtotal=4000;
const tax=Math.round(subtotal*0.18);
const ShippingCharges=200;
const discount=400;
const total=subtotal+tax+ShippingCharges;

const cart = () => {


  const [couponCode,setCouponCode] =useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode] =useState<boolean>(false);
  useEffect(()=>{
    const timeOutId=setTimeout(()=>{
      if(Math.random()>0.5){
        setIsValidCouponCode(true);
      }
      else{
        setIsValidCouponCode(false);
      }

    },1000)


    return()=>{
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)

    };
  },[couponCode])
  return (
    <div className="cart">
      <main>

        { cartItems.length>0 ?
          cartItems.map((i,idx)=>(
            <CartItem key={idx} cartItem={i} />
          )):(
            <h2>No Items Added</h2>
          )
        }
      </main>
        <aside>
          <p>Subtotal:₹{subtotal}</p>
          <p>Shipping:₹{ShippingCharges}</p>
          <p>Tax:₹{tax}</p>
          <p>
            Discount-<em className="red">
            -₹{discount}
            </em>
          </p>
          <p><b>Total:₹{total}</b></p>
          <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>

          {
            couponCode && (isValidCouponCode? <span className="green">₹{discount} off using the <code>{couponCode}</code></span>:<span className="red">Invalid Coupon <VscError/></span>)
          }
        </aside>
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }
      
    </div>
  )
}

export default cart