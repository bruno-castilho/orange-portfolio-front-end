import styled from 'styled-components'

export const RegisterContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterContent = styled.div`
  display: flex;
  width: 1280px;
  height: 832px;

  justify-content: space-between;
`

export const RegisterAlertContainer = styled.div`
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

export const RegisterImg = styled.img`
  width: 525px;
  height: 832px;

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`

export const RegisterSection = styled.section`
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
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    & > div > h3 {
      color: var(--color-principal-90);
      font-size: 24px;
      line-height: 24px;
    }
  }
`
export const RegisterFormContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const RegisterForm = styled.form`
  display: flex;
  width: 517px;

  padding-bottom: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    width: 312px;
    gap: 16px;
  }
`

export const InputNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
