import React from "react";
import info from "../assets/images/bnr_main_webzine.png";
import styled from "styled-components";
import sns01 from "../assets/images/sns01.png";
import sns02 from "../assets/images/sns02.png";
import sns03 from "../assets/images/sns03.png";
import sns04 from "../assets/images/sns04.png";
import logo01 from "../assets/images/sns_logo01.png";
import logo02 from "../assets/images/sns_logo02.png";
import logo03 from "../assets/images/sns_logo03.png";

function Sns() {
  return (
    <Wrapper className="container">
      <img src={info} alt="" />
      <div className="info-box">
        <div className="sns">
          <h3>SNS</h3>
          <ul>
            <li>
              <img src={sns01} alt="" />
              페이스북
            </li>
            <li>
              <img src={sns02} alt="" />
              정식품 블로그
            </li>
            <li>
              <img src={sns03} alt="" />
              정식품 유투브
            </li>
            <li>
              <img src={sns04} alt="" />
              인스타그램
            </li>
          </ul>
        </div>
        <div className="info">
          <h3>관련사 및 이용안내</h3>
          <ul className="logo">
            <li>
              <img src={logo01} alt="" />
              자연과사람들
            </li>
            <li>
              <img src={logo02} alt="" />
              오쎄
            </li>
            <li>
              <img src={logo03} alt="" />
              혜춘장학회
            </li>
          </ul>
          <ul className="info02">
            <li>전국 영업소</li>
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>고객의 소리</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 50px 0 100px;
  img {
    width: 100%;
  }
  .info-box {
    display: flex;
    .sns {
      width: 25%;
      height: 280px;
      ul {
        height: 74%;
        margin-block-start: 0;
        margin-block-end: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      li {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        border: 1px solid #ccc;
        padding: 10px 20px;
        border-radius: 10px;
        margin-right: 20px;
        &:nth-child(1) {
          img {
            width: 12px;
          }
        }
        img {
          width: 23px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
    .info {
      width: 75%;
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .logo {
        display: flex;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 10px;
        margin-block-start: 0;
        margin-block-end: 0;
        li {
          width: 33.33%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          img {
            width: 70%;
            margin-bottom: 10px;
          }
        }
      }
      .info02 {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: 10px;
        li {
          font-size: 15px;
          padding: 0 40px;
          font-weight: 700;
          border-left: 1px solid #ccc;
          &:nth-child(1) {
            border-left: none;
          }
        }
      }
    }
  }
`;
export default Sns;
