import React from "react";
import styled from "styled-components";
import { subSlide } from "../assets/data/subSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function SubSlide() {
  return (
    <Wrapper className="container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {subSlide.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                className="img-box"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p>Brand 0{idx + 1}</p>
                <h2>{item.title}</h2>
                <p>{item.contents}</p>
                <button>
                  View More <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  white-space: pre-wrap;
  .img-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: 500px;
    border-radius: 50px;
    background-size: cover;
    background-position: 30% 30%;
    text-align: center;
    color: #fff;
    h2 {
      font-size: 40px;
    }
    p {
      line-height: 1.8;
      font-weight: 700;
    }
    button {
      background-color: #fff;
      width: 200px;
      color: #333;
      margin: 20px auto;
      padding: 15px 20px;
      border-radius: 5px;
      font-weight: 500;
      i {
        margin-left: 20px;
      }
    }
  }
  .swiper-pagination {
    bottom: 80px;
    &-bullet {
      width: 70px;
      height: 5px;
      border-radius: 0;
      background-color: transparent;
      border: 1px solid #fff;
      opacity: 1;
      &-active {
        background-color: #fff;
      }
    }
  }
`;
export default SubSlide;
