import React, { useState } from "react";
import styled from "styled-components";
import { bestProduct } from "../assets/data/bestProduct";

function BestProduct() {
  const [product, setProduct] = useState(bestProduct.vegemil);

  const vegemil = () => {
    setProduct(bestProduct.vegemil);
    const list = document.querySelectorAll(".btn ul li");
    list.forEach((item, idx) => {
      item.classList.remove("on");
    });
    document.getElementById("vegemil").classList.add("on");
  };
  const greenbia = () => {
    setProduct(bestProduct.greenbia);
    const list = document.querySelectorAll(".btn ul li");
    list.forEach((item, idx) => {
      item.classList.remove("on");
    });
    document.getElementById("greenbia").classList.add("on");
  };
  const cook = () => {
    setProduct(bestProduct.cook);
    const list = document.querySelectorAll(".btn ul li");
    list.forEach((item, idx) => {
      item.classList.remove("on");
    });
    document.getElementById("cook").classList.add("on");
  };
  const water = () => {
    setProduct(bestProduct.water);
    const list = document.querySelectorAll(".btn ul li");
    list.forEach((item, idx) => {
      item.classList.remove("on");
    });
    document.getElementById("water").classList.add("on");
  };
  return (
    <Wrapper className="container">
      <h3>Brand Best Product</h3>
      <div className="btn">
        <ul>
          <li id="vegemil" onClick={vegemil} className="on">
            베지밀
          </li>
          <li id="greenbia" onClick={greenbia}>
            그린비아
          </li>
          <li id="cook" onClick={cook}>
            간단요리사
          </li>
          <li id="water" onClick={water}>
            심천수
          </li>
        </ul>
      </div>
      <div className="contents">
        <div className="main-contents">
          <img src={product[0].image} alt="" />
          <h2>{product[0].title}</h2>
          <p>{product[0].contents}</p>
        </div>
        <ul>
          {product
            .filter((item, idx) => {
              return idx > 0;
            })
            .map((item, idx) => {
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

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
  .btn {
    ul {
      border: 1px solid #ccc;
      display: flex;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 50px;
      li {
        font-size: 15px;
        padding: 15px 50px;
        &.on {
          background-color: black;
          color: #fff;
        }
      }
    }
  }
  .contents {
    display: flex;
    justify-content: space-between;
    .main-contents {
      width: 46%;
      img {
        width: 100%;
        aspect-ratio: 1.1;
        object-fit: cover;
        border-radius: 10px;
      }
      h2 {
        padding: 20px 0;
      }
      p {
        font-size: 18px;
        word-break: keep-all;
        color: #777;
      }
    }
    > ul {
      margin-top: 0;
      flex-basis: 54%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(50% - 20px);
        margin-left: 20px;
        padding-bottom: 30px;
        img {
          width: 100%;
          aspect-ratio: 1.3;
          object-fit: cover;
          border-radius: 10px;
        }
        h3 {
          font-size: 18px;
          font-weight: 600;
          word-break: keep-all;
        }
        p {
          font-size: 14px;
          word-break: keep-all;
          color: #777;
        }
      }
    }
  }
`;
export default BestProduct;
