import React from "react";

function Header({ searchProducts }) {
  return (
    <header>
      <h2>LOGO</h2>
      <input
        onChange={(e) => searchProducts(e.target.value)}
        type="text"
        placeholder="Search by product title or description"
      />
    </header>
  );
}

export default Header;
