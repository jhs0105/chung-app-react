import React from "react";
import styled from "styled-components";
import mainVideo from "../assets/video/part_01.mp4";
function MainSlide() {
  return (
    <Wrapper>
      <div className="txt">
        <h2>
          Right Food <br />
          Right Person
        </h2>
        <p>
          생명 존중 정신을 바탕으로 <br />
          건강한 식문화 발전에 이바지 하겠습니다.
        </p>
        <button>View More</button>
      </div>
      <video src={mainVideo} autoPlay muted loop></video>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 100px;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .txt {
    position: absolute;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    h2 {
      font-size: 80px;
      margin-bottom: 50px;
      line-height: 1.2;
    }
    p {
      line-height: 1.5;
    }
    button {
      margin-top: 100px;
      background-color: #fff;
      color: #333;
      padding: 10px 40px;
      border-radius: 5px;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
export default MainSlide;
