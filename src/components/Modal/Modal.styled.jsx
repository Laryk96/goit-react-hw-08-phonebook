import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 1200;
`;

const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 70px;
  width: 540px;
  padding: 30px 0 10px 0;

  background-color: #212121;
  border-radius: 20px;
  align-items: center;
`;

const Fieldset = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  gap: 20px;

  color: #ffff;
  border-radius: 15px;
  background-color: #21212191;
  border: 1px solid #212121;
  font-size: 18px;

  & span {
    width: 27%;
    text-align: center;
  }
`;

const StyledButton = styled(IconButton)`
  display: block;
  margin-top: 20px;
  color: #fff;

  transition: color 150ms ease-in-out;
  &:hover {
    color: rgb(26, 172, 48);
  }
`;

const CloseBtn = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Icon = styled(CloseIcon)`
  color: #fff;

  transition: color 150ms ease-in-out;
  &:hover {
    color: red;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  color: white;
  padding-left: 20px;
  &:placeholder-shown &:focus,
  &:hover {
    border: 2px solid white;
  }

  &:placeholder-shown {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;

const AvatarBgd = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  margin-bottom: -20px;
  border-radius: 50%;
  background-color: grey;
`;

export {
  Backdrop,
  ModalBody,
  Fieldset,
  StyledButton,
  CloseBtn,
  Icon,
  Input,
  AvatarBgd,
};
