import styled from '@emotion/styled';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ContactItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 12px 8px 12px 0;
  gap: 10px;

  color: #ffff;
  border-radius: 15px;
  background-color: #21212191;
  border: 1px solid #212121;
  font-size: 18px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 250px;
    height: 100%;
    width: 2px;
    background-color: #9c1d6a12;
    border-radius: 5px;
  }
  &:hover {
    background-color: #212121c4;
  }
`;
const WrapperPhoneNumber = styled.div`
  width: 33%;
  text-align: center;
`;

const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  gap: 10px;
  margin-left: -8px;

  font-size: 16px;
  line-height: 1.7;
`;

const StarIcon = styled(StarBorderIcon)`
  font-size: 26px;
  color: ${({ status }) => {
    if (status === 'true') return '#d300ff';

    return '#907171';
  }};
`;

export { ContactItem, WrapperPhoneNumber, AvatarWrapper, Wrapper, StarIcon };
