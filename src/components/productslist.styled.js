import styled from "styled-components";
export const ProductsList = styled.div`
  color: white;
  max-width: 1440px;
  margin: 0 auto;

  .container {
    max-width: 1300px;
    margin: 0 auto;

    .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
      height:calc(100vh - 173px);
      gap: 35px 14px;
      overflow-x: auto;
    }
  }
`;
