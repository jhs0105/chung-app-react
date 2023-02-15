import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { rnd } from "../assets/data/rnd";
import { sponsor } from "../assets/data/sponsor";

function Rnd() {
  return (
    <Wrapper className="container">
      <h3>R&D 활동</h3>
      <div className="activity">
        <ul>
          {rnd.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sponsor">
        <dl>
          <dt>사회공헌</dt>
          {sponsor.list.map((item, idx) => {
            return (
              <dd key={idx}>
                <Link to={item.site} target="_blank">
                  {item.title}
                </Link>
              </dd>
            );
          })}
        </dl>
      </div>
      <div className="sponsor">
        <dl>
          <dt>식품안전인증현황</dt>
          {sponsor.certificate.map((item, idx) => {
            return (
              <dd key={idx}>
                <Link to={item.site} target="_blank">
                  {item.title}
                </Link>
              </dd>
            );
          })}
        </dl>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .activity {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px 0;
    ul {
      display: flex;
      justify-content: center;
      text-align: center;
      li {
        padding: 0 40px;
        border-right: 2px solid #ccc;
        border-right-style: dashed;
        &:nth-last-child(1) {
          border: none;
        }
      }
    }
  }
  .sponsor {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px 20px;
    dl {
      font-size: 13px;
      display: flex;
      dt {
        flex-basis: 20%;
        border-right: 1px solid #ccc;
        font-weight: 700;
      }
      dd {
        flex-basis: 20%;
        display: flex;
        justify-content: center;
        border-right: 1px solid #ccc;
        &:nth-last-child(1) {
          border: none;
        }
      }
    }
  }
`;

export default Rnd;
