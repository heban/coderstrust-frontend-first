import styled from '@emotion/styled/macro'
import { Image } from 'spectacle';

const colors = {
  primary: '#222',
  secondary: '#ffec8b',
  tertiary: '#CC5E84',
};

export const AuthorLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
`;

export const AuthorImage = styled(Image)`
  && {
    margin: 0;
    max-width: 240px;
    border: 10px solid ${colors.secondary};
    margin-right: 64px;
  }
`;

export const Word = styled.span`
  color: ${colors.tertiary};
`;

export const FirstPageImage = styled(Image)`
  && {
    border: 10px solid ${colors.secondary};
    max-width: 800px;
    margin-top: 32px;
  }
`;

export const ESLayout = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
`;

export const RoleLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;

  > div {
    flex: 1 0 50%;
  }

  > div:first-child {
    flex: 0 1 100%;
  }
`;

export const RoleCircle = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
  width: 250px;
  height: 250px;
  margin: 0 auto;
  text-align: center;
`;

export const KeywordCloud = styled.div`
  position: relative;
  margin: 64px auto 0 auto;
  width: 800px;
  height: 320px;

  span {
    position: absolute;
    font-weight: bold;
    color: ${colors.tertiary};
    left: 50%;
    top: 0;

    &:nth-of-type(2) {
      left: 10px;
      top: 60px;
    }

    &:nth-of-type(3) {
      left: 300px;
      top: 160px;
      font-size: 48px;
    }

    &:nth-of-type(4) {
      left: 600px;
      top: 300px;
      font-size: 22px;
    }

    &:nth-of-type(5) {
      left: 100px;
      top: 340px;
      font-size: 52px;
    }

    &:nth-of-type(6) {
      left: 65px;
      top: 241px;
    }

    &:nth-of-type(7) {
      top: 80px;
      left: 437px;
      font-size: 22px;
    }

    &:nth-of-type(8) {
      top: 125px;
      left: 600px;
    }

    &:nth-of-type(9) {
      top: 276px;
      left: 322px;
      font-size: 26px;
    }

    &:nth-of-type(10) {
      top: 222px;
      left: 531px;
      font-size: 52px;
    }

    &:nth-of-type(11) {
      left: 156px;
      top: 115px;
      font-size: 22px;
    }

    &:nth-of-type(12) {
      top: 340px;
      left: 55%;
      font-size: 77px;  
    }
  }
`;

export const VarImage = styled(Image)`
  && {
    margin: 32px auto 0 auto;
    max-width: 240px;
  }
`;

export const CustomParagraph = styled.span`
  display: block;
  margin: 10px 0;
`;

export const VarTypeBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 64px;
`;

export const VarTypeImage = styled(Image)`
  && {
    margin: 0 auto 0 auto;
    max-width: 240px;
  }
`;
