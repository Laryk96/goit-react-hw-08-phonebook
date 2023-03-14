import styled from '@emotion/styled';

const Container = styled.div`
  padding: 30px 20px;
  margin: 50px auto;
  width: 600px;

  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);

  border: 1px solid #212121;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #212121;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export { Title, Container, SubTitle };
