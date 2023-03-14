import { Form as Forma, Field } from 'formik';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  width: 100%;
`;

const Form = styled(Forma)`
  width: 400px;
  min-height: 300px;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 60px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  & span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Input = styled(Field)`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;
  background-color: rgba(255, 255, 255, 0.4);

  &:focus,
  &:hover {
    border: 2px solid orange;
  }
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #fdfc47 0%,
    #24fe41 51%,
    #fdfc47 100%
  );
  margin-top: 10px;
  width: 100%;
  padding: 10px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
export { Label, Form, Input, Button };
