import styled from "styled-components";

export const CardContainer = styled.div`
  height: auto;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 6px 1px rgba(36, 17, 69, 0.91);
  border-radius: 0.5rem;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-weight: bold;
`;

export const CardContent = styled.div`
  margin: 2rem auto;
  max-width: 80%;
  font-size: 1.25rem;
`;

export const CardFooter = styled.div`
  margin: 1.85rem 3rem;
  font-size: 0.85rem;
  text-align: right;
`;
