import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import topBanner from "../assets/images/bnr_main_sample.png";

function Sample() {
  return (
    <Wrapper className="container">
      <h3>샘플신청</h3>
      <div className="top-banner">
        <Link to="/">
          <img src={topBanner} alt="" />
        </Link>
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
`;
export default Sample;
