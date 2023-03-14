import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const Label = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-left: -70px;
  & span {
    font-size: 20px;
    font-weight: 500;
  }

  & i {
    font-size: 18px;
    transform: translate(0, 2px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;
`;

export { ContactsList, Label, Wrapper };
