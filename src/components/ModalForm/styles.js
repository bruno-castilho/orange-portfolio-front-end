import styled from 'styled-components'

export const ModalFormConteiner = styled.form`
  & > h5 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    color: var(--color-neutral-110);
    margin-bottom: 24px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    & > div {
      flex-direction: column-reverse;
    }
  }
`

export const UploadSection = styled.section`
  width: 389px;
  & > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 16px;
    color: var(--color-neutral-110);
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 266px;
  }
`

export const UploadButton = styled.div`
  position: relative;
  width: 389px;
  height: 304px;
  background: var(--color-neutral-70);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-color: lightgray;
  background-position-x: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    width: 270px;
    height: 122px;
  }

  & > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    color: var(--color-neutral-120);
  }

  & > div > div {
    display: flex;
    justify-content: center;
  }

  & > div > div > svg {
    width: 46px;
    height: 46px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 266px;
    height: 304px;

    & > div {
      width: 250px;
    }
  }
`

export const InputsSection = styled.section`
  width: 413px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 266px;
    margin-bottom: 16px;
  }
`

export const Footer = styled.footer`
  margin-top: 16px;
  & > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;

    color: var(--color-neutral-110);
    margin-bottom: 16px;
  }
`
