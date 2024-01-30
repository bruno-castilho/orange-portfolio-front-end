import styled from 'styled-components'

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContent = styled.div`
  display: flex;
  width: 1280px;
  height: 832px;

  justify-content: space-between;
`

export const LoginImg = styled.img`
  width: 525px;
  height: 832px;

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`

export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  & > div > h3 {
    color: var(--color-principal-100);
    text-align: center;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    & > div > h3 {
      color: var(--color-principal-90);
      font-size: 24px;
      line-height: 24px;
    }
  }
`

export const LoginAlertContainer = styled.div`
  width: 100%;
  margin-top: 77px;
  margin-bottom: 142px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 49px;
    margin-bottom: 56px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;

  & > button {
    display: flex;
    padding: 11px 8px;

    align-items: flex-start;
    gap: 24px;

    border: none;
    border-radius: 2px;
    background: #fff;
    cursor: pointer;

    box-shadow:
      0px 1px 1px 0px rgba(0, 0, 0, 0.17),
      0px 0px 1px 0px rgba(0, 0, 0, 0.08);

    color: rgba(0, 0, 0, 0.54);

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LoginForm = styled.form`
  display: flex;
  width: 517px;

  padding-bottom: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  & > h5 {
    color: var(--color-neutral-110, #515255);

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  & > a {
    color: var(--color-neutral-100, #818388);
    text-decoration: none;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;
  }

  @media (max-width: 768px) {
    width: 312px;
    gap: 16px;

    & > h5 {
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.15px;
    }
  }
`
