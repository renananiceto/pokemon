import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background-color: #e5e8e8;
  box-shadow: 10px 13px 15px -15px rgba(0, 0, 0, 0.75);
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  border-radius: 5px;
  justify-content: space-between;
  text-align: center;
  border: solid 2px rgba(174, 177, 177, 1);
  box-shadow: 10px 13px 15px -15px rgba(0, 0, 0, 0.75);
  background: rgb(238, 238, 238);
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 1) 46%,
    rgba(210, 211, 211, 1) 54%,
    rgba(174, 177, 177, 1) 64%
  );
  p {
    text-align: end;
  }
`;
