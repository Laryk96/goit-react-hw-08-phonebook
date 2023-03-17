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

const Form = styled.form`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 100px;
  width: 400px;
  min-height: 250px;
  max-height: 400px;
  gap: 30px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  color: #fff;
`;

const Input = styled.input`
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

  &:placeholder-shown {
    color: black;
    font-size: 14px;
    font-weight: 700;
  }
`;

const Button = styled.button`
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 8px 30px;
  background-image: linear-gradient(
    to right,
    #fdfc47 0%,
    #24fe41 51%,
    #fdfc47 100%
  );

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #212121;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  border-radius: 10px;

  font-size: 18px;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.4);
    background-image: none;
    box-shadow: none;
    border: none;
  }
`;
export { Label, Form, Input, Button };
