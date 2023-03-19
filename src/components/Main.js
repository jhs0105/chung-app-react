import React, { useEffect, useState } from "react";
import MainSlide from "../components/MainSlide";
import SubSlide from "../components/SubSlide";
import Row01 from "./Row01";
import Rnd from "../components/Rnd";
import Sample from "./Sample";
import BestProduct from "./BestProduct";
import Feedback from "./Feedback";
import Recipe from "./Recipe";
import Sns from "./Sns";
import styled from "styled-components";
import { side } from "../assets/data/side";

function Main() {
  const [scrollActive, setScrollActive] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const scrollFixed = () => {
    setScrollY(window.pageYOffset);
    let scrollDepth =
      ((window.scrollY + window.innerHeight) / document.body.scrollHeight) *
      100;
    if (scrollY > 800) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
    if (scrollDepth > 92) {
      setScrollActive(false);
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", function () {
        scrollFixed();
      });
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });
  return (
    <>
      <MainSlide></MainSlide>
      <Wrapper className={scrollActive ? "fixed" : ""}>
        <div className="side">
          <div className="side-box">
            <div className="brand">
              <h3>정식품 브랜드</h3>
              <ul>
                {side.brand.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <div
                        className="img-box"
                        style={{ backgroundColor: `${item.background}` }}
                      >
                        <img src={item.image} alt="" />
                      </div>
                      <p>{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="category">
              <h3>All Category</h3>
              <ul>
                {side.category.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <p>{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
      <SubSlide></SubSlide>
      <Row01></Row01>
      <Rnd></Rnd>
      <Sample></Sample>
      <BestProduct></BestProduct>
      <Feedback></Feedback>
      <Recipe></Recipe>
      <Sns></Sns>
    </>
  );
}

const Wrapper = styled.div`
  &.fixed {
    width: 100%;
    position: fixed;
    z-index: -1;
    top: -60px;
    right: 0px;
  }
  .side {
    position: relative;
    float: right;
    width: 30%;
    h3 {
      margin-top: 15px;
    }
    .side-box {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-top: 80px;
      margin-right: 70px;
    }
    .brand {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: calc(23%);
          margin-bottom: 20px;
          transition: all 0.25s ease;
          &:hover {
            margin-top: -10px;
          }
          .img-box {
            width: 100%;
            aspect-ratio: 1.1;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 80px;
            }
          }
          p {
            margin-top: 10px;
            font-size: 14px;
            text-align: center;
            font-weight: 600;
            color: #555;
          }
        }
      }
    }
    .category {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-right: -5px;
        li {
          width: calc(33.33% - 5px);
          //background-color: green;
          text-align: center;
          margin-right: 5px;
          margin-bottom: 15px;
          transition: all 0.25s ease;
          &:hover {
            margin-top: -10px;
          }
          img {
            width: 40px;
          }
          p {
            font-size: 13px;
            white-space: pre-wrap;
            font-weight: 600;
            color: #555;
          }
        }
      }
    }
  }
`;

export default Main;
