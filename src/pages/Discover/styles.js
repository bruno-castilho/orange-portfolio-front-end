import styled from 'styled-components'

export const DiscoverContainer = styled.main`
  margin-left: 32px;
  margin-right: 32px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const DiscoverHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 112px;
  margin-bottom: 120px;

  & > h5 {
    width: 744px;
    color: var(--color-principal-90);
    text-align: center;

    font-family: Roboto;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.25px;
  }

  @media (max-width: 768px) {
    margin-top: 64px;
    margin-bottom: 40px;

    & > h5 {
      width: 312px;

      font-size: 24px;
      line-height: 24px; /* 100% */
    }
  }
`

export const ProjectFilter = styled.div`
  display: flex;
  justify-content: left;

  & > div {
    width: 513px;
    margin-bottom: 40px;
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

export const ProjectList = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
