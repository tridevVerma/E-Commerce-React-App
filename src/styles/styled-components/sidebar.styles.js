import styled from "styled-components";
import { SIZES, COLORS } from "../styled-variables";

const StyledSidebar = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  width: 90%;
  height: 100%;
  background: ${COLORS.navBg};
  padding: 1.5rem;
  z-index: 10;
  transition: 0.4s transform;
  transform: ${(props) => (props.open ? "translateX(0%)" : "translateX(100%)")};

  @media screen and (min-width: ${SIZES.xsmall}) {
    width: 70%;
  }

  @media screen and (min-width: ${SIZES.small}) {
    width: 50%;
  }
  > .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;
    width: 100%;
    color: ${COLORS.clrLight};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;

    @media screen and (min-width: ${SIZES.medium}) {
      font-size: 1.4rem;
    }

    > button {
      padding: 0.5rem;
      padding-right: 0rem;
      font-size: 1.5rem;
      color: ${COLORS.clrLight};
      background: transparent;

      &:hover {
        color: ${COLORS.onFocus};
      }
    }
  }

  > ul {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    justify-content: center;
    grid-row-gap: 2rem;
    > li {
      min-width: 0%;
      max-width: 100%;
      width: 100%;
      > a {
        display: block;
        padding: 1rem;
        width: 100%;
        background: ${COLORS.clrLight};
        color: ${COLORS.navBg};
        font-size: 1rem;
        font-weight: 600;
        @media screen and (min-width: ${SIZES.medium}) {
          font-size: 1.2rem;
        }

        .items-count {
          position: relative;
          &::after {
            content: attr(data-count);
            position: absolute;
            top: -50%;
            right: -40%;
            width: 1rem;
            aspect-ratio: 1 / 1;
            font-size: 0.4rem;
            border-radius: 50%;
            background: ${COLORS.danger};
            color: ${COLORS.clrLight};
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;

export default StyledSidebar;
