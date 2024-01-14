import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  color: aqua;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const Message = styled.p`
  color: red;
`;

export const TitleUser = styled.h3`
  font-size: 30px;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  color: aqua;
`;
