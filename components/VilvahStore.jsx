import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VilvahStore.css'; 

function VilvahStore() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const vilvah = [
    { id: 1, name: 'Aloe Vera Gel', price: 299, image: 'https://www.vilvahstore.com/cdn/shop/files/Alo-vera-gel_Gallery_1.jpg?v=1691907462&width=600' },
    { id: 2, name: 'Milk Mud Mask', price: 399, image: 'https://www.vilvahstore.com/cdn/shop/files/1_18050d2d-7a12-4e43-bd8b-632db3f144f4.jpg?v=1696399800&width=600' },
    {id:3,name:'Milk Drops Serum',price:599,image:'https://www.vilvahstore.com/cdn/shop/files/1_a0a0e217-0f9a-4122-850b-6c110d83ceb4.jpg?v=1693506789&width=600'},
    {id:4,name:'Under Eye Cream',price:459,image:'https://www.vilvahstore.com/cdn/shop/files/eye-cream_1.jpg?v=1692084385&width=600'},
    {id:5,name:'Goat Milk Shampoo',price:479,image:'https://www.vilvahstore.com/cdn/shop/files/Artboard1-50.jpg?v=1691131078&width=600'},
    {id:6,name:'Honey Fix Face Wash',price:349,image:'https://www.vilvahstore.com/cdn/shop/files/honey-fix-face-wash_1_3ff41509-5492-4d55-a046-977b7647a9bd.jpg?v=1693556750&width=600'},
    {id:7,name:'Milk Body Lotion',price:549,image:'https://www.vilvahstore.com/cdn/shop/files/Milk-body-lotion_1.jpg?v=1720589398&width=600'},
    {id:8,name:'Hair Growth Oil',price:519,image:'https://www.vilvahstore.com/cdn/shop/files/1-50_3af182ea-1b66-4b4d-a8b6-c11b19b3c4bc.jpg?v=1692093858&width=600'},
    {id:9,name:'Foot Cream',price:319,image:'https://www.vilvahstore.com/cdn/shop/files/Foot-cream_1.jpg?v=1692086255&width=600'},
    {id:10,name:'Lip Balm',price:199,image:'https://www.vilvahstore.com/cdn/shop/files/Grape-fruit-lip-1.jpg?v=1692092479&width=600'},
    {id:11,name:'Brightening Combo',price:929,image:'https://www.vilvahstore.com/cdn/shop/files/Artboard1copy-50_b804f4c5-af26-4d53-bfd2-111c2f10a7f8.jpg?v=1692535594&width=600'},
    {id:12,name:'Skin Hydration Combo',price:899,image:'https://www.vilvahstore.com/cdn/shop/files/SKIN-HYDRATION-COMBO.jpg?v=1701156046&width=600'},
    {id:13,name:'Lip Nourishing Combo',price:389,image:'https://www.vilvahstore.com/cdn/shop/files/Lip-nourishing-combo_website_1.jpg?v=1692983226&width=600'},
    {id:14,name:'Bestseller Hair Combo',price:999,image:'https://www.vilvahstore.com/cdn/shop/files/POM_Best-seller_combo_gallery-nil.jpg?v=1696099338&width=600'},
    {id:15,name:'Anti-acne Combo',price:619,image:'https://www.vilvahstore.com/cdn/shop/files/Anti-acne-combo_Website.jpg?v=1692898806&width=600'},
    {id:16,name:'Makeup Removal',price:699,image:'https://www.vilvahstore.com/cdn/shop/files/1_9.jpg?v=1694166076&width=600'},
    
  ];

  const addToCart = (vilvah) => {
    setCartItems([...cartItems, vilvah]);
  };

  return (
    <div className="vilvah-list">
      <div className="header-container">
      <h1>VILVAH STORE</h1>
    <button onClick={() => navigate('/cart', { state: { cartItems } })} className="go-to-cart">
      Go to Cart
    </button>
    </div>
    <div className="grid-container">
      {vilvah.map((vilvah) => (
        <div key={vilvah.id} className="grid-item">
          <img src={vilvah.image} alt={vilvah.name} className="vilvah-image" />
          <h2>{vilvah.name}</h2>
          <p>${vilvah.price}</p>
          <button onClick={() => addToCart(vilvah)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default VilvahStore;
