import styled from 'styled-components'

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  & > h5 {
    color: var(--color-neutral-120, #224);

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    color: var(--color-neutral-110);
  }

  @media (max-width: 768px) {
    justify-content: center;
    & > div {
      display: none;
    }
  }
`

export const ModalFooter = styled.footer`
  margin-top: 64px;

  & > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    color: var(--color-neutral-120);
  }

  & > span {
    margin-top: 32px;
    display: block;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    color: var(--color-neutral-130);
  }

  & > a {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    color: var(--color-info-80);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`

export const CardImage = styled.div`
  width: 838px;
  height: 596px;
  background-image: url(${(props) => props.img});
  background-color: lightgray;
  background-position-x: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 312px;
    height: 258px;
  }
`

export const Autor = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 40px;
    height: 40px;
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
    display: block;
    margin-bottom: 8px;

    color: var(--Neutral-Colors-Neutral-120, #303133);
  }

  & > div > span {
    display: flex;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const OnlyMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  @media (min-width: 769px) {
    display: none;
  }
`
