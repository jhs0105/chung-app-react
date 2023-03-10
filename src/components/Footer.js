import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <div className="list-box">
        <ul>
          <li>
            <Link to="/" className="depth01">
              Company
            </Link>
            <ul className="depth02">
              <li>창업주 기념관</li>
              <li>기업정보</li>
              <li>대표이사 인사말</li>
              <li>프로필</li>
              <li>연혁</li>
              <li>관련사</li>
              <li>공시</li>
            </ul>
          </li>
          <li>
            <Link to="/" className="depth01">
              Product
            </Link>
            <ul className="depth02">
              <li>브랜드 스토리</li>
              <li>제품 소개</li>
              <li>쿡앤쿡 레시피</li>
              <li>공식 쇼핑몰</li>
            </ul>
          </li>
          <li>
            <Link to="/" className="depth01">
              R&D
            </Link>
            <ul className="depth02">
              <li>중앙연구소</li>
              <li>특허 및 연구논문</li>
              <li>식품안전인증현황</li>
              <li>일반인증현황</li>
            </ul>
          </li>
          <li>
            <Link to="/" className="depth01">
              Communication
            </Link>
            <ul className="depth02">
              <li>정식품 웹진</li>
              <li>SNS</li>
              <li>이벤트</li>
              <li>베지밀 영.유아식</li>
              <li>공정거래(CP)</li>
              <li>고객문의</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <div className="address">
          <p>(주)정식품 충청북도 청주시 흥덕구 산단로 124 (우)28446</p>
          <p>사업자등록번호 : 315-81-19977</p>
          <p>
            업태 : 제조(기타 비알콜성 음료) 대표이사 정연호 대표전화 02 3484
            9300
          </p>
          <p>
            <span>그린비아 결제</span> <strong>개인정보처리방침</strong>{" "}
            이용약관
          </p>
        </div>
        <div className="copyright">
          <p>ⓒ 2023 Dr.CHUNG'S FOOD Co., Ltd. All Right Reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 80px 50px;
  .list-box {
    > ul {
      display: flex;
      .depth01 {
        display: block;
        width: 180px;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .depth02 {
        font-size: 15px;
        li {
          padding: 5px 0;
        }
      }
    }
  }
  .footer-box {
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    color: #999;
    line-height: 2.5;

    span {
      background-color: #111;
      color: #fff;
      border-radius: 30px;
      padding: 1px 15px;
      font-weight: 700;
    }
    strong {
      color: #777;
      padding: 0 10px;
    }
    .copyright {
      color: #333;
      padding-top: 50px;
    }
  }
`;
export default Footer;
