import React, { useState } from "react";
import styled from "styled-components";
import { bestProduct } from "../assets/data/bestProduct";

function BestProduct() {
  const [product, setProduct] = useState(bestProduct.vegemil);
  const vegemil = () => {
    setProduct(bestProduct.vegemil);
  };
  const greenbia = () => {
    setProduct(bestProduct.greenbia);
  };
  const cook = () => {
    setProduct(bestProduct.cook);
  };
  const water = () => {
    setProduct(bestProduct.water);
  };
  return (
    <Wrapper className="container">
      <h3>Brand Best Product</h3>
      <div className="button">
        <ul>
          <li onClick={vegemil} data-list="vegemil">
            베지밀
          </li>
          <li onClick={greenbia} data-list="greenbia">
            그린비아
          </li>
          <li onClick={cook} data-list="cook">
            간단요리사
          </li>
          <li onClick={water} data-list="water">
            심천수
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {product.map((item, idx) => {
            return (
              <li>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default BestProduct;
