import styled from "styled-components";
import { SIZES, COLORS } from "../styled-variables";

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 8;
  background-color: ${COLORS.navBg};
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${SIZES.large}) {
    padding: 2rem;
  }
  > .brand-logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
      width: 3rem;
      aspect-ratio: 1 / 1;
    }
    > span {
      font-size: 1.4rem;
      color: ${COLORS.clrLight};
      @media screen and (min-width: ${SIZES.medium}) {
        font-size: 1.6rem;
      }

      @media screen and (min-width: ${SIZES.large}) {
        font-size: 1.8rem;
      }
    }
  }

  > .sidebar-toggler {
    display: block;
    font-size: 1.3rem;
    color: ${COLORS.clrLight};
    background: transparent;

    @media screen and (min-width: ${SIZES.medium}) {
      display: none;
    }

    &:hover {
      color: ${COLORS.onFocus};
    }
  }
  > ul {
    display: none;
    @media screen and (min-width: ${SIZES.medium}) {
      display: flex;
      align-items: center;
      justify-content: end;
    }

    > li {
      margin-right: 2rem;

      &:last-child {
        margin-right: 0rem;
      }

      > a {
        color: ${COLORS.clrLight};
        font-size: 1rem;

        @media screen and (min-width: ${SIZES.medium}) {
          font-size: 1.2rem;
        }

        @media screen and (min-width: ${SIZES.large}) {
          font-size: 1.3rem;
        }
        &:hover {
          color: ${COLORS.onFocus};
        }

        .items-count {
          position: relative;
          &::after {
            content: attr(data-count);
            position: absolute;
            top: -50%;
            right: -40%;
            width: 1.1rem;
            aspect-ratio: 1 / 1;
            font-size: 0.5rem;
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

export default StyledNavbar;
