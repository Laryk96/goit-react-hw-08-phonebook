import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 12px;

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
// const Button = styled.button`
//   width: 100px;
//   height: 28px;
//   font-size: 18px;

//   color: #212121;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;

//   &:hover {
//     background-image: linear-gradient(
//       to right,
//       #e52d27 0%,
//       #b31217 51%,
//       #e52d27 100%
//     );
//     background-position: right center;
//     color: #fff;
//     text-decoration: none;
//   }
// `;
const ContactName = styled.p`
  display: flex;
`;

const Icons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;

const Wrapper = styled.div`
  padding-left: 12px;
  display: flex;
  height: 100%;
  width: 58%;
  gap: 10px;
  align-items: center;
`;

const WrapperIcon = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
`;

const Button = muiStyled(IconButton)`
  color: #212121;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;

  border-radius: 50%;
  display: block;

  &:hover {


    background-position: right center;
    color: ${props => props.hover};
    text-decoration: none
`;

export { ContactItem, ContactName, Button, Icons, Wrapper, WrapperIcon };
