import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

const WrapperIcon = styled.div`
  height: 100%;
  display: flex;
  background-color: #483343;
  border-radius: 25px;
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

export { Button, WrapperIcon };
