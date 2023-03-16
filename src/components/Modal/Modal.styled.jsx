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
  gap: 50px;
  padding: 30px 20px 20px 20px;
  background-color: #212121;
  border-radius: 20px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;

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

export { Backdrop, ModalBody, ContactItem, StyledButton, CloseBtn, Icon };