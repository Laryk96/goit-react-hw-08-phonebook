import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  & span {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 15px;
  }
`;
const Input = styled.input`
  height: 35px;
  width: 100%;
  padding-left: 15px;
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;

  &:focus,
  &:hover {
    border: 2px solid #212121;
  }
`;

export { Label, Input };
