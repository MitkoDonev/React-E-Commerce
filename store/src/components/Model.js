import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer, ModalContainer } from "./StyledComponents";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelOpen, closeModel } = value;
          const { img, title, price } = value.modelProduct;

          if (!modelOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModel()}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModel()}>
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
