import styled from 'styled-components'

export const ProjectCardImg = styled.div`
  position: relative;
  width: 389px;
  height: 258px;

  border-radius: var(--borderRadius, 4px);
  background-image: url(${(props) => props.img});
  background-color: lightgray;
  background-position-x: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 312px;
    background-position-x: -41.916px;
    background-position-y: -34px;
    background-size: 174.822% 138.838%;
  }
`

export const MenuButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;

  background: var(--color-secondary-70);
  border-radius: 300px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const ProjectCardInfoPublication = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 24px;
    height: 24px;
    border-radius: 300px;
  }

  & > div {
    text-align: center;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;

    margin-left: 8px;
    color: var(--color-neutral-110, #515255);
  }

  & > div > p {
    display: inline;
  }

  & > div > span::before {
    content: '•';
    padding-right: 4px;
    padding-left: 8px;
  }

  @media (max-width: 768px) {
    & > img {
      width: 40px;
      height: 40px;
    }

    & > div > p {
      display: block;
      margin-bottom: 8px;

      color: var(--color-neutral-120, #303133);
    }

    & > div > span {
      display: flex;
    }

    & > div > span::before {
      content: none;
      padding: 0;
    }
  }
`

export const ProjectCardInfoTags = styled.div`
  display: flex;
  gap: 8px;
`
