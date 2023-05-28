import styled from "styled-components";
import { COLORS } from "../styled-variables";

const StyledProductCard = styled.div`
  min-width: 0%;
  max-width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  > .card-image {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      z-index: 2;
    }
    > img {
      width: 100%;
      height: 25vh;
      object-fit: contain;
    }

    > button {
      position: absolute;
      top: 5%;
      right: 5%;
      background: transparent;
      z-index: 5;
      > i {
        color: ${COLORS.clrLight};
        font-size: 1.5rem;
      }
    }

    > .menu-list {
      height: 0vh;
      background: ${COLORS.clrLight};
      position: absolute;
      top: 14%;
      right: 1%;
      z-index: 6;
      transition: 0.25s height;
      overflow: hidden;
      > ul {
        height: 100%;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        > li {
          > button {
            width: 100%;
            height: 100%;
            padding: 0.6rem 1.5rem;
            display: grid;
            grid-template-columns: 20px 1fr;
            &:hover {
              background: hsl(182, 60%, 40%);
            }
          }
        }
      }
    }

    .menu-list.show {
      height: 8vh;
    }
  }

  > .card-description {
    margin: 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > .rating {
      width: fit-content;
      padding: 0.25rem 0.5rem;
      background: ${COLORS.success};
      color: white;
    }

    > .price {
      > span {
        color: ${COLORS.danger};
        margin-left: 1rem;
      }
    }
  }

  > .card-action {
    > button {
      width: 100%;
      padding: 0.8rem;
      font-size: 1.2rem;
    }
  }
`;

export default StyledProductCard;
