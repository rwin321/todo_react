import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledDashboardHeader = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
`;

export const StyledDashboardContent = styled.main`
  width: 100%;
  height: calc(100vh - 5.5rem);
  padding: 3rem 4rem;
  display: flex;
  justify-content: space-evenly;
  background-color: whitesmoke;
  color: #000;

  .card {
    height: 20rem;
    width: 15rem;
  }
`;
