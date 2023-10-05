import { PropTypes } from "prop-types";
import styled from "styled-components";

import Celeb from "@/assets/celebinfo-card/Celeb.jsx";
import InProgress from "@/assets/celebinfo-card/InProgress.jsx";
import Money from "@/assets/celebinfo-card/Money.jsx";
import User from "@/assets/celebinfo-card/User.jsx";
import Button from "@/components/common/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

const Styled = {
  Container: styled.div`
    background: #f1f3f5;
    display: flex;
    align-items: center;
    padding: 1rem;
    position: relative;
    justify-content: space-around;
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `,

  Text: styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    font-size: ${({ main }) => (main ? "1.25rem" : "0.5rem")};

    .name {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .followBtn {
      margin-left: 1rem;
    }
  `,
};

// function CelebInfoGridCard({ children, ...props }) {
function CelebInfoGridCard() {
  return (
    <>
      <Styled.Container>
        <Celeb />
        <Styled.TextContainer>
          <Styled.Text main className="name">
            <span>손웅정</span>
            <Button className="followBtn" isHoverStyle={BUTTON_TYPE.PRIMARY}>
              팔로우
            </Button>
          </Styled.Text>
          <Styled.Text>
            <InProgress />
            <span>3개의 펀딩 진행 중</span>
          </Styled.Text>
          <Styled.Text>
            <Money />
            <span>총 2,000,000원</span>
          </Styled.Text>
          <Styled.Text>
            <User />
            <span>7명이 팔로우 중</span>
          </Styled.Text>
        </Styled.TextContainer>
      </Styled.Container>
    </>
  );
}

CelebInfoGridCard.propTypes = {
  children: PropTypes.node,
};

export default CelebInfoGridCard;
