import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-top: -50px;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  max-width: 320px;
  padding: 40px 10px 40px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  margin-bottom: 30px;

  border-radius: 50%;
  background-color: grey;
`;

const Title = styled.h3`
  margin-bottom: 20px;

  font-size: 26px;
`;

const Button = styled(IconButton)`
  position: absolute;
  top: 15px;
  left: 10px;
  background-color: #fff3;
  width: 25px;
  height: 25px;

  &:hover {
    background-color: green;
  }
`;

export { Wrapper, List, Item, IconWrapper, Title, Button };
