import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Headers id="header">
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <nav>
        <ul>
          <li
            onMouseEnter={() => {
              document.getElementById("header").classList.add("on");
              document.getElementById("company").classList.add("on");
            }}
            onMouseLeave={() => {
              document.getElementById("header").classList.remove("on");
              document.getElementById("company").classList.remove("on");
            }}
          >
            <Link to="/" className="depth01">
              Company
            </Link>
            <ul className="depth02" id="company">
              <li>창업주 기념관</li>
              <li>
                기업정보
                <ul className="depth03">
                  <li>대표이사 인사말</li>
                  <li>프로필</li>
                  <li>연혁</li>
                  <li>관련사</li>
                  <li>공시</li>
                </ul>
              </li>
              <li>
                홍보센터
                <ul className="depth03">
                  <li>보도자료</li>
                  <li>미디어</li>
                </ul>
              </li>
              <li>사회공헌활동</li>
              <li>
                청주공장
                <ul className="depth03">
                  <li>청주공장 소개</li>
                  <li>견학 신청</li>
                  <li>견학 후기</li>
                </ul>
              </li>
              <li>전국 영업소</li>
            </ul>
          </li>
          <li
            onMouseEnter={() => {
              document.getElementById("header").classList.add("on");
              document.getElementById("product").classList.add("on");
            }}
            onMouseLeave={() => {
              document.getElementById("header").classList.remove("on");
              document.getElementById("product").classList.remove("on");
            }}
          >
            <Link to="/" className="depth01">
              Product
            </Link>
            <ul className="depth02" id="product">
              <li>
                브랜드 스토리
                <ul className="depth03">
                  <li>베지밀</li>
                  <li>그린비아</li>
                  <li>간단요리사</li>
                  <li>삼천수</li>
                </ul>
              </li>
              <li>제품소개</li>
              <li>
                쿡앤쿡 레시피
                <ul className="depth03">
                  <li>베지밀 레시피</li>
                  <li>간단요리사 레시피🡭</li>
                  <li>콩국물 레시피🡭</li>
                </ul>
              </li>
              <li>
                공식 쇼핑몰
                <ul className="depth03">
                  <li>이데이몰🡭</li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => {
              document.getElementById("header").classList.add("on");
              document.getElementById("r&d").classList.add("on");
            }}
            onMouseLeave={() => {
              document.getElementById("header").classList.remove("on");
              document.getElementById("r&d").classList.remove("on");
            }}
          >
            <Link to="/" className="depth01">
              R&D
            </Link>
            <ul className="depth02" id="r&d">
              <li>
                중앙연구소
                <ul className="depth03">
                  <li>연구소장 인사말</li>
                  <li>연구소 소개</li>
                  <li>R&D 활동</li>
                </ul>
              </li>
              <li>특허 및 연구논문</li>
              <li>
                식품안전인증현황
                <ul className="depth03">
                  <li>HACCP 인증</li>
                  <li>FSSC 22000 인증</li>
                  <li>HALAL 인증</li>
                </ul>
              </li>
              <li>
                일반인증현황
                <ul className="depth03">
                  <li>CCM 인증</li>
                  <li>환경성적표지 인증</li>
                  <li>ISO 45001 인증</li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => {
              document.getElementById("header").classList.add("on");
              document.getElementById("communication").classList.add("on");
            }}
            onMouseLeave={() => {
              document.getElementById("header").classList.remove("on");
              document.getElementById("communication").classList.remove("on");
            }}
          >
            <Link to="/" className="depth01">
              Communication
            </Link>
            <ul className="depth02" id="communication">
              <li>
                정진품 웹진
                <ul className="depth03">
                  <li>웹진 바로가기</li>
                  <li>웹진 신청</li>
                </ul>
              </li>
              <li>
                SNS
                <ul className="depth03">
                  <li>정식품 인스타그램</li>
                  <li>영.유아식 인스타그램</li>
                  <li>정식품 페이스북</li>
                  <li>정식품 블로그</li>
                  <li>정식품 유튜브</li>
                </ul>
              </li>
              <li>이벤트</li>
              <li>
                베지밀 영.유아식
                <ul className="depth03">
                  <li>샘플신청</li>
                  <li>후기 이벤트</li>
                  <li>아기달력모델</li>
                </ul>
              </li>
              <li>공정거래(CP)</li>
              <li>
                고객문의
                <ul className="depth03">
                  <li>고객의 소리</li>
                  <li>자주 묻는 질문</li>
                  <li>1:1문의</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="util">
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </div>
    </Headers>
  );
}

const Headers = styled.header`
  background-color: #fff;
  position: absolute;
  z-index: 99;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  &.on {
    &:before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      top: 100px;
      background-color: #ccc;
    }
    transition: all 0.3s ease;
    height: 350px;
  }
  h1 {
    height: 100px;
    display: flex;
    align-items: center;
  }
  #util {
    font-size: 14px;
    ul {
      display: flex;
      height: 100px;
      align-items: center;
      li {
        margin-left: 20px;
        i {
          font-size: 18px;
        }
      }
    }
  }
  nav {
    > ul {
      display: flex;
      > li {
        &.on {
          height: 500px;
        }
      }
      .depth01 {
        width: 200px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
      }
      .depth02 {
        display: flex;
        position: absolute;
        width: 100vw;
        left: 0;
        justify-content: center;
        visibility: hidden;
        &.on {
          visibility: visible;
          > li {
            padding: 30px 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 17px;
            font-weight: 600;
            .depth03 {
              font-size: 14px;
              font-weight: 600;
              color: #888;
              padding: 20px 0;
              li {
                padding: 5px 0;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;
export default Header;
