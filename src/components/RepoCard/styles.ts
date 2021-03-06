import styled from "styled-components";

export const Container = styled.div`
  & + div {
    margin-top: 16px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin-left: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        font-size: 12px;
        text-transform: uppercase;
        color: #3d3d4d;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
