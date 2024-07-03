import styled from "styled-components";
import Background from "../../assets/fundo.jpg";
import { Link as ReactLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  background-size: cover;
  background-position: center;
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;
 
  
  p {
    color: #fff; 
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #fff; 
  
  span {
    color:  #33ff37d9;
    font-family: "Road Rage", sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
   
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff; 
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  p {
    font-size:14px;
    line-height: 80%;
    color: #ec5353;
    font-weight:600;
    height: 10px;

  }
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
border-radius: 5px;
background-color: #fff;


`;


export const Link = styled(ReactLink) `
 text-decoration:none;
 color: #fff;


`
