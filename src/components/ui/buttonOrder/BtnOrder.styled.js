import styled from "styled-components";
export const BtnOrder = styled.button`
  font-family: var(--font-family);
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
  width: 200px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background-color: var(--color-basic);
  color: #131313;

  :hover {
    box-shadow: 0 0 10px #a75d3b;
    transition: transform 0.3s ease;
  }

  .btn-exit {
    background-color: transparent;
    color: var(--color-basic);
    border: 1px solid var(--color-basic);
  }
`;
