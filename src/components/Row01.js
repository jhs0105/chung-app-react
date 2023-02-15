import React from "react";
import styled from "styled-components";
import image from "../assets/images/bnr_main_big03-1.png";
import news01 from "../assets/images/news01.jpeg";
import news02 from "../assets/images/news02.jpeg";
import news03 from "../assets/images/news03.jpeg";

function Row01() {
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  return (
    <Wrapper className="container">
      <h3>기업이념</h3>
      <div className="row01">
        <div className="image-box" style={{ backgroundImage: `url(${image})` }}>
          <h2>
            인류 건강문화에 <br />이 몸 바치고저
          </h2>
        </div>
        <div className="news-box">
          <h3>NEWS </h3>
          <ul>
            <li>
              <img src={news01} alt="" />
              <p>
                {ellipsis(
                  "'사랑의 베지밀 온도계' 캠페인 성료…정식품, 초록우산어린이재단에 두유 전달",
                  25
                )}
              </p>
            </li>
            <li>
              <img src={news02} alt="" />
              <p>{ellipsis("콩 섭취, 우울증 발병 위험 감소 도움", 25)}</p>
            </li>
            <li>
              <img src={news03} alt="" />
              <p>{ellipsis("박보검 다녀간 강남 레스토랑의 주인은?", 25)}</p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .row01 {
    display: flex;
    justify-content: space-between;
  }
  .image-box {
    width: 65%;
    height: 460px;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 30px;
    h2 {
      padding: 80px 50px;
      color: #fff;
      line-height: 1.8;
      font-size: 30px;
    }
  }
  .news-box {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 30%;
    height: 460px;
    box-sizing: border-box;
    padding: 0 40px;
    h3 {
      margin: 30px 0;
    }
    li {
      display: flex;
      padding-bottom: 30px;
      margin-bottom: 30px;
      &:nth-child(1),
      &:nth-child(2) {
        border-bottom: 1px solid #ccc;
      }
      img {
        width: 80px;
      }
      p {
        margin-left: 10px;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
        color: #888;
      }
    }
  }
`;
export default Row01;
