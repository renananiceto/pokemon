import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  min-height: 10vh;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  section {
    display: flex;
  }
  img {
    width: 50px;
    @media (max-width: 768px) {
      width: 30px;
    }
  }
  p {
    color: #ffff;
    font-weight: bold;
    margin-left: 1rem;
    font-size: 4rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 980px) {
    flex-direction: column;
    display: inline-block;
  }
`;
export const BoxInput = styled.div`
  background-color: red;
  input {
    margin: 0 3rem;
    width: 25rem;
    height: 3rem;
    border: 0 none;
    border-radius: 50px;
    box-shadow: 10px 13px 15px -15px rgba(0, 0, 0, 0.75);
    padding: 10px;
    @media (max-width: 980px) {
      margin: 0;
      margin-right: 3rem;
      width: 80%;
    }
    @media (max-width: 768px) {
      margin: 0;
      margin-right: 3rem;
      width: 60%;
      height: 2rem;
    }
  }
  input:focus,
  select:focus {
    box-shadow: 10px 13px 15px -15px rgba(0, 0, 0, 0.75);
    border: 0 none;
    outline: 0;
  }
  button {
    box-shadow: 10px 13px 15px -15px rgba(0, 0, 0, 0.75);
    background-color: #ffff;
    border: 0 none;
    border-radius: 50px;
    width: 3rem;
    height: 3rem;
    color: red;
    font-size: 1rem;
    @media (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;
