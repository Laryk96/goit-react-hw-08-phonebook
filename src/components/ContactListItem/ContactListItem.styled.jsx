import styled from '@emotion/styled';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ContactItem = styled.li`
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

  & span {
    width: 27%;
    text-align: center;
  }

  &:hover {
    background-color: #212121c4;
  }
`;
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
  display: flex;
  height: 100%;
  width: 58%;
  gap: 10px;
  align-items: center;
  margin-left: -8px;
`;

const StarIcon = styled(StarBorderIcon)`
  font-size: 26px;
  color: ${({ favorite }) => {
    if (favorite === 'true') return '#d300ff';

    return '#907171';
  }};
`;

export { ContactItem, ContactName, Icons, Wrapper, StarIcon };
