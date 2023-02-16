import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import topBanner from "../assets/images/bnr_main_sample.png";
import { samples } from "../assets/data/samples";

function Sample() {
  return (
    <Wrapper className="container">
      <h3>샘플신청</h3>
      <div className="top-banner">
        <Link to="/">
          <img src={topBanner} alt="" />
        </Link>
      </div>
      <div className="sample-list">
        <ul>
          {samples.map((item, idx) => {
            const category = item.category.map((item, idx) => {
              return (
                <span
                  key={idx}
                  style={{
                    backgroundColor: `${item.color}`,
                    border: `1px solid ${item.color}`,
                  }}
                >
                  {item.title}
                </span>
              );
            });

            const tag = item.tag.map((item, idx) => {
              return <span key={idx}>#{item}</span>;
            });
            return (
              <li key={idx}>
                <h3>
                  <img src={item.subImage} alt="" />
                  {item.title}
                </h3>
                <div className="img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="contents">
                  <div className="category">{category}</div>
                  <h2>{item.name}</h2>
                  <div className="tag">{tag}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .top-banner {
    border-bottom: 1px solid #ccc;
    padding-bottom: 50px;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
  .sample-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-right: -30px;
      li {
        flex-basis: calc(33.333% - 30px);
        margin-right: 30px;
        margin-bottom: 50px;
        h3 {
          display: flex;
          white-space: pre-wrap;
          align-items: center;
          font-weight: 500;
          img {
            margin-right: 10px;
          }
        }
        .img-box {
          img {
            width: 100%;
            aspect-ratio: 1.2;
            border-radius: 20px;
          }
        }
        .contents {
          margin-top: 20px;
          .category {
            span {
              font-size: 14px;
              padding: 3px 10px;
              border-radius: 5px;
              margin-right: 10px;
              &:nth-child(1) {
                color: #fff;
              }
              &:nth-last-child(1) {
                border: 1px solid #ccc !important;
              }
            }
          }
          h2 {
            font-size: 20px;
            font-weight: 600;
            margin: 20px 0;
          }
          .tag {
            display: flex;
            flex-direction: column;
            span {
              font-size: 14px;
              margin-right: auto;
              border-radius: 5px;
              border: 1px solid #ccc;
              padding: 4px 10px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`;
export default Sample;
