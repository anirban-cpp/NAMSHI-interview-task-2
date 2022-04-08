import React, { useEffect } from "react";
import Product from "../Product/Product";

import banner from "../../assets/banner.jpg";

import "./Products.css";
import { fetchProducts } from "../../redux/products/ProductActions";
import { connect } from "react-redux";

import { RingLoader } from "react-spinners";

const Products = ({ products, loading, error, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="products-container">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <p className="p-container-title">All Items ({products?.length} ITEMS)</p>
      {loading ? (
        <RingLoader size={48} color="red" />
      ) : products?.length > 0 ? (
        products?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            quantity={0}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>{error.message}</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
    error: state.product.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
