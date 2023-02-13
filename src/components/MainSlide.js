import React from "react";
import styled from "styled-components";
import mainVideo from "../assets/video/part_01.mp4";
function MainSlide() {
  return (
    <Wrapper>
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
`;
export default MainSlide;
