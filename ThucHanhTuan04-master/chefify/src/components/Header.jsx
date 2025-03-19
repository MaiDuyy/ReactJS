
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart } from 'lucide-react';
import { useCart } from "./CartContext";

const Header = () => {
    const { cart, removeFromCart, totalItems, notification } = useCart();
    const [showCart, setShowCart] = useState(false);

  return (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2">

<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2">
            <a className="navbar-brand" href="#">
                <img src="../img/Group 9.png" alt="Chef's hat" height="40" />
            </a>
            
            <div className="input-group mx-3" style={{ width: "300px" }}>
                <span className="input-group-text bg-light border-0">
                    <img src="../img/search.png" alt="Search" height="16" />
                </span>
                <input 
                    type="text" 
                    className="form-control border-0 bg-light" 
                    placeholder="Search..." 
                    style={{ boxShadow: "none" }}
                />
            </div>
            
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    {['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'].map((item) => (
                        <li className="nav-item mx-2" key={item}>
                            <a className="nav-link text-secondary" href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <button className="btn btn-pink d-flex align-items-center me-3" style={{backgroundColor: '#FEF0F5',color: '#F44B87'}}>
                <img src="../img/archive_check.png" alt="Checkmark" height="20" className="me-2" />
                Your Recipe Box
            </button>
            
            <img 
                src="../img/avatar.png" 
                alt="Profile" 
                className="rounded-circle" 
                width="40" 
                height="40" 
                style={{ cursor: "pointer" }}
            />
        </nav>
 
      {notification && (
        <div className="position-fixed top-0 end-0 m-3 alert alert-success">
          {notification}
        </div>
      )}

   

      <div className="position-relative" 
           onMouseEnter={() => setShowCart(true)}
           onMouseLeave={() => setShowCart(false)}>
        <ShoppingCart className="me-3" style={{ cursor: 'pointer' }} />
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
        
     
        {showCart && (
          <div className="position-absolute end-0 mt-2 bg-white rounded shadow-lg p-3"
               style={{ width: '300px', zIndex: 1000 }}>
            <h6>Shopping Cart ({totalItems})</h6>
            {cart.length === 0 ? (
              <p className="text-muted">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">${item.price}</small>
                    </div>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

    
    </nav>
  );
};

export default Header;