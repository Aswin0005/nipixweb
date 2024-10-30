/* function CartPage() {
    return (
        <div>
            Cart Page
        </div>
    )
}

export default CartPage
 */

//-------------------------------------------------------------------
// "use client";

// const { useState } = require("react");


// function CartPage() {
//     const [cart, setCart] = useState([
//       {
//         id: 1,
//         name: "Mastering React: Build Modern Web Applications",
//         price: 800.00,
//         rating: 4.7,
//         students: "(200+) students",
//         image: "/announcement1.jpg"
//       },
//       {
//         id: 2,
//         name: "Uno R3 CH340G ATmega328p Development Board Compatible",
//         price: 650.00,
//         rating: 4.7,
//         ratings: "(5333) ratings",
//         quantity: 1,
//         image: "/event9.jpg"
//       },
//       {
//         id: 3,
//         name: "Uno R3 CH340G ATmega328p Development Board Compatible",
//         price: 1200.00,
//         rating: 4.7,
//         ratings: "(5333) ratings",
//         quantity: 1,
//         image: "/event6.jpg"
//       },
      
//     ]);
  
//     const [wishlist, setWishlist] = useState([
//       {
//         id: 4,
//         name: "Object Avoidance Kit",
//         price: 69.99,
//         rating: 4.7,
//         ratings: "(133) ratings",
//         image: "/event5.jpg"
//       },
//       {
//         id: 5,
//         name: "Object Avoidance Kit",
//         price: 69.99,
//         rating: 4.7,
//         ratings: "(133) ratings",
//         image: "/event4.jpg"
//       },
//       {
//         id: 6,
//         name: "Object Avoidance Kit",
//         price: 69.99,
//         rating: 4.7,
//         ratings: "(133) ratings",
//         image: "/event6.jpg"
//       },
//       {
//         id: 7,
//         name: "Object Avoidance Kit",
//         price: 69.99,
//         rating: 4.7,
//         ratings: "(133) ratings",
//         image: "/event10.png"
//       }
//     ]);
  
//     const [promoCode, setPromoCode] = useState("");
  
//     const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
//     const discount = 120.00;
//     const deliveryFee = 45.00;
//     const total = subtotal - discount + deliveryFee;
  
//     const handleQuantityChange = (id, newQuantity) => {
//       setCart(cart.map(item => 
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       ));
//     };
  
//     const handleRemoveItem = (id) => {
//       setCart(cart.filter(item => item.id !== id));
//     };
  
//     const handleAddToCart = (item) => {
//       setWishlist(wishlist.filter(wishItem => wishItem.id !== item.id));
//       setCart([...cart, item]);
//     };
  
//     const renderStars = (rating) => {
//       return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
//     };
  
//     return (
//       <div style={{ display: 'flex', padding: '20px', gap: '20px', fontFamily: 'Arial, sans-serif' }} className="mt-32 mx-16">
//         <div style={{ flex: '1' }} className="mr-16">
//           <div style={{ marginBottom: '20px' }}>
//             <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
//               Your Cart <span style={{ fontSize: '14px', color: '#666' }}>({cart.length} course & 1 product)</span>
//             </h2>
            
//             {cart.map(item => (
//               <div key={item.id} style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 padding: '15px',
//                 borderBottom: '1px solid #eee',
//                 gap: '15px'
//               }}>
//                 <img src={item.image} alt={item.name} style={{ width: '90px', height: '60px', borderRadius: '4px' }}  />
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{item.name}</h3>
//                   <div style={{ color: '#f39c12' }}>{renderStars(item.rating)} 
//                     <span style={{ color: '#666', fontSize: '14px' }}>{item.students || item.ratings}</span>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <span style={{ fontWeight: 'bold' }}>₹{item.price.toFixed(2)}</span>
//                   {item.quantity !== undefined && (
//                     <select 
//                       value={item.quantity}
//                       onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                       style={{ padding: '5px' }}
//                     >
//                       {[1, 2, 3, 4, 5].map(num => (
//                         <option key={num} value={num}>{num}</option>
//                       ))}
//                     </select>
//                   )}
//                   <button 
//                     onClick={() => handleRemoveItem(item.id)}
//                     style={{ 
//                       background: 'none',
//                       border: 'none',
//                       cursor: 'pointer',
//                       color: '#666'
//                     }}
//                   >
//                     🗑️
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
  
//           <div>
//             <h2 style={{ fontSize: '24px', marginBottom: '30px' }} className="mt-8 ">Wishlist</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
//               {wishlist.map(item => (
//                 <div key={item.id} style={{ 
//                   border: '1px solid #eee',
//                   borderRadius: '8px',
//                   padding: '10px'
//                 }}>
//                   <img src={item.image} alt={item.name} style={{ width: '100%',height: '130px',  marginBottom: '10px', borderRadius: '8px' }} className="border" />
//                   <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>{item.name}</h3>
//                   <div style={{ color: '#f39c12', fontSize: '14px' }}>
//                     {renderStars(item.rating)} 
//                     <span style={{ color: '#666' }}>{item.ratings}</span>
//                   </div>
//                   <div style={{ 
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginTop: '10px'
//                   }}>
//                     <span style={{ fontWeight: 'bold' }}>₹{item.price.toFixed(2)}</span>
//                     <button 
//                       onClick={() => handleAddToCart(item)}
//                       style={{
//                         background: '#007bff',
//                         color: 'white',
//                         border: 'none',
//                         padding: '5px 15px',
//                         borderRadius: '4px',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
  
//         <div style={{ width: '300px' }}>
//           <div style={{ 
//             background: '#f8f9fa',
//             padding: '20px',
//             borderRadius: '8px'
//           }}>
//             <h3 style={{ marginBottom: '20px' }}>Order Summary :</h3>
//             <div style={{ 
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '10px',
//               marginBottom: '20px'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span>Subtotal</span>
//                 <span>₹{subtotal.toFixed(2)}</span>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between', color: 'green' }}>
//                 <span>Discount</span>
//                 <span>-₹{discount.toFixed(2)}</span>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span>Delivery Fee</span>
//                 <span>₹{deliveryFee.toFixed(2)}</span>
//               </div>
//               <div style={{ 
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 fontWeight: 'bold',
//                 borderTop: '1px solid #dee2e6',
//                 paddingTop: '10px'
//               }}>
//                 <span>Total</span>
//                 <span>₹{total.toFixed(2)}</span>
//               </div>
//             </div>
//             <button 
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 background: '#007bff',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 marginBottom: '10px',
//                 cursor: 'pointer'
//               }}
//             >
//               Go to checkout →
//             </button>
//             <div style={{ display: 'flex', gap: '10px' }} >
//               <input 
//                 type="text"
//                 placeholder="Add promo code"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//                 /* style={{
//                   flex: 1,
//                   padding: '5px 4px',
//                   border: '1px solid #dee2e6',
//                   borderRadius: '4px'
//                 }} */

//                  className="py-2 pl-2 pr-1 border rounded-md outline-none" 
//               />
//               <button 
//                 /* style={{
//                   padding: '5px 15px',
//                   background: '#212529',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
                 
//                 }} */

//                   className=""
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default CartPage;



"use client";

import { Trash, Trash2 } from "lucide-react";

const { useState } = require("react");

function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Mastering React: Build Modern Web Applications",
      price: 800.0,
      rating: 4.7,
      students: "(200+) students",
      category: "course",
      image: "/announcement1.jpg",
    },
    {
      id: 2,
      name: "Uno R3 CH340G ATmega328p Development Board Compatible",
      price: 650.0,
      rating: 4.7,
      ratings: "(5333) ratings",
      quantity: 1,
      category: "product",
      image: "/event9.jpg",
    },
    {
      id: 3,
      name: "Uno R3 CH340G ATmega328p Development Board Compatible",
      price: 1200.0,
      rating: 4.7,
      ratings: "(5333) ratings",
      quantity: 1,
      category: "product",
      image: "/event6.jpg",
    },
  ]);

  const [wishlist, setWishlist] = useState([
    {
      id: 4,
      name: "Object Avoidance Kit",
      price: 69.99,
      rating: 4.7,
      ratings: "(133) ratings",
      category: "product",
      image: "/event5.jpg",
    },
    {
      id: 5,
      name: "Object Avoidance Kit",
      price: 69.99,
      rating: 4.7,
      ratings: "(133) ratings",
      category: "product",
      image: "/event4.jpg",
    },
    {
      id: 6,
      name: "Object Avoidance Kit",
      price: 69.99,
      rating: 4.7,
      ratings: "(133) ratings",
      category: "product",
      image: "/event6.jpg",
    },
    {
      id: 7,
      name: "JavaScript Basics Course",
      price: 300.0,
      rating: 4.5,
      students: "(150+ students)",
      category: "course",
      image: "/announcement3.jpg",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const discount = 120.0;
  const deliveryFee = 45.0;
  const total = subtotal - discount + deliveryFee;

  // Count products and courses in the cart
  const productCount = cart.filter((item) => item.category === "product").length;
  const courseCount = cart.filter((item) => item.category === "course").length;

  const handleQuantityChange = (id, newQuantity) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    setWishlist(wishlist.filter((wishItem) => wishItem.id !== item.id));
    setCart([...cart, { ...item, quantity: item.category === "product" ? 1 : undefined }]);
  };

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px", fontFamily: "Arial, sans-serif" }} className="mt-32 mx-16">
      <div style={{ flex: "1" }} className="mr-16">
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
            Your Cart{" "}
            <span style={{ fontSize: "14px", color: "#666" }}>
              ({courseCount} {courseCount === 1 ? "course" : "courses"} & {productCount} {productCount === 1 ? "product" : "products"})
            </span>
          </h2>

          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "15px", borderBottom: "1px solid #eee", gap: "15px" }}>
              <img src={item.image} alt={item.name} style={{ width: "90px", height: "60px", borderRadius: "4px" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{item.name}</h3>
                <div style={{ color: "#f39c12" }}>
                  {renderStars(item.rating)} <span style={{ color: "#666", fontSize: "14px" }}>{item.students || item.ratings}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontWeight: "bold" }}>₹{item.price.toFixed(2)}</span>
                {item.category === "product" && item.quantity !== undefined && (
                  <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} style={{ padding: "5px" }}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#666" }}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: "24px", marginBottom: "30px" }} className="mt-8">
            Wishlist
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
            {wishlist.map((item) => (
              <div key={item.id} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "10px" }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "130px", marginBottom: "10px", borderRadius: "8px" }} className="border" />
                <h3 style={{ fontSize: "14px", marginBottom: "5px" }}>{item.name}</h3>
                <div style={{ color: "#f39c12", fontSize: "14px" }}>
                  {renderStars(item.rating)} <span style={{ color: "#666" }}>{item.ratings}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>₹{item.price.toFixed(2)}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    style={{
                      background: "#007bff",
                      color: "white",
                      border: "none",
                      padding: "5px 15px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: "300px" }}>
        <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "20px" }}>Order Summary :</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "green" }}>
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button
            style={{
              background: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              width: "100%",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Proceed to Payment
          </button>
        </div>

        <div style={{ marginTop: "20px", background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "10px" }}>Promo Code :</h3>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ced4da", marginBottom: "10px" }}
            placeholder="Enter code"
          />
          <button
            style={{
              background: "white",
              color: "#007bff",
              border: "1px solid #007bff",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Apply Promo Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
