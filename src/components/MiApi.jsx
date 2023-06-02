import React from "react";

// loop through products and display them as cards
const MiApi = ({ products }) => {
  return (
    <div className="products-section">
      <h2>PRODUCTS ({products.length})</h2>
      <div className="container">
        {products.map((p) => (
          <div className="card">
            <div className="img-container">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="card-body">
              <h5>{p.title}</h5>
              <p>{p.description.slice(0, 50)}...</p>
              <button>Buy - ${p.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
