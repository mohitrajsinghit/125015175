import React from 'react';

const ProductDetail = ({ match }) => {
  const { id } = match.params;

  // Fetch and display product details based on id

  return (
    <div>
      <h2>Product Detail for {id}</h2>
      {/* Display detailed information here */}
    </div>
  );
};

export default ProductDetail;
