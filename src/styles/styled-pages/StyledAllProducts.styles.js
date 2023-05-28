import styled from "styled-components";
import { SIZES } from "../styled-variables";

const StyledAllProducts = styled.div`
  width: 90%;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;

  @media screen and (min-width: ${SIZES.small}) {
    width: 70%;
  }

  @media screen and (min-width: ${SIZES.medium}) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${SIZES.xlarge}) {
    width: 70%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StyledAllProducts;
