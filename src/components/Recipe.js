import React from "react";
import recipe01 from "../assets/images/recipe01.jpg";
import recipe02 from "../assets/images/recipe02.jpg";
import styled from "styled-components";
import { recipe } from "../assets/data/recipe";

function Recipe() {
  return (
    <Wrapper className="container">
      <h3>맛있고 건강한 레시피</h3>
      <ul className="site">
        <li>
          <img src={recipe01} alt="" />
          <h3>
            식물성 소이 베이스, <br /> 맛도 좋고 건강에도 좋은 진한 콩국물
          </h3>
          <button>진한 콩국물 레시피 사이트</button>
        </li>
        <li>
          <img src={recipe02} alt="" />
          <h3>
            밋밋한 요리에 깊은 맛을 더하는,
            <br /> 요리 초보 필수템, 간단요리사{" "}
          </h3>
          <button>간단요리사 레시피 사이트</button>
        </li>
      </ul>
      <ul className="list">
        {recipe.map((item, idx) => {
          return (
            <li>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .site {
    display: flex;
    justify-content: space-between;
    li {
      width: 48%;
      img {
        width: 100%;
        border-radius: 20px;
      }
      h3 {
        font-weight: 600;
        line-height: 1.5;
      }
      button {
        margin: 30px 0;
        padding: 10px 0;
        width: 100%;
        font-size: 15px;
        font: inherit;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
    }
  }
  .list {
    display: flex;
    margin-right: -10px;
    li {
      width: calc(100% / 6 - 10px);
      margin-right: 10px;
      img {
        width: 100%;
      }
      p {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;

export default Recipe;
