import React from "react";
import { feedback } from "../assets/data/feedback";
import styled from "styled-components";

function Feedback() {
  return (
    <Wrapper className="container">
      <h3>제품음용후기</h3>
      <ul>
        {feedback.map((item, idx) => {
          return (
            <li key={idx}>
              <div className="image-box">
                <img src={item.image} alt="" />
              </div>
              <div className="contents">
                <h3>{item.title}</h3>
                <p>{item.comments}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 48%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
      box-sizing: border-box;
      .image-box {
        width: 45%;
        background-color: #eee;
        border-radius: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before {
          content: "";
          background-color: #fff;
          width: 150px;
          height: 150px;
          display: block;
          border-radius: 100%;
          position: absolute;
        }
        img {
          width: 100%;
          position: relative;
        }
      }
      .contents {
        width: 55%;
        text-align: right;
        white-space: pre-wrap;
        h3 {
          word-break: keep-all;
          border-bottom: 2px solid #333;
          padding-bottom: 15px;
        }
        p {
          font-size: 14px;
          word-break: keep-all;
        }
      }
    }
  }
`;
export default Feedback;
