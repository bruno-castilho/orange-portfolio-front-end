import styled from 'styled-components'

export const MyProjectContainer = styled.main`
  margin-left: 32px;
  margin-right: 32px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const MyProjectProfile = styled.section`
  margin-top: 112px;
  margin-bottom: 56px;
  display: flex;
  justify-content: center;

  & > div {
    display: inline-flex;
    align-items: flex-start;
    gap: 42px;
  }

  & > div > img {
    display: flex;
    width: 122px;
    height: 122px;
    border-radius: 300px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-top: 56px;
    margin-bottom: 40px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
  }
`

export const MyProjectProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & > strong {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    color: var(--color-neutral-120);
  }

  & > p {
    color: rgb(11, 12, 13, 0.5);

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    letter-spacing: 0.15px;
  }
`

export const MyProjectFilter = styled.div`
  display: flex;
  justify-content: left;

  & > div {
    width: 513px;
    margin-bottom: 40px;
  }

  & > div > h1 {
    color: var(--color-neutral-130);

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15px;

    opacity: 0.6;

    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    & > div {
      width: 312px;
      margin-bottom: 24px;
    }
  }
`

export const MyProjectList = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
