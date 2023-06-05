import styled from "styled-components";

const StyledProductDetails = styled.div`
  width: 70%;
  margin: 2rem auto;
  > .image-container {
    background: hsl(0, 0%, 95%);
    text-align: center;
    > img {
      height: 50vh;
    }
  }

  > .content {
    padding: 1rem;

    > .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      > h3 {
        text-transform: capitalize;
        font-size: 1.5rem;
      }
      > button {
        padding: 0.6rem 1.5rem;
        font-size: 1rem;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover {
          color: hsl(0, 0%, 95%);
          background: hsl(27, 80%, 50%);
        }
        &:active {
          box-shadow: none;
        }
      }
    }

    > p::first-letter {
      text-transform: capitalize;
    }

    > p {
      margin-bottom: 1rem;
      > span {
        color: hsl(32, 80%, 50%);
        font-size: 1.1rem;
        font-style: italic;
      }

      > .original {
        text-decoration: line-through;
        color: hsl(5, 70%, 60%);
      }

      > .discounted {
        color: hsl(110, 70%, 40%);
        font-size: 1.2rem;
        margin-left: 1rem;
      }
    }
  }
`;

export default StyledProductDetails;
