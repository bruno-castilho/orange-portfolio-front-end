import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 73px;
  padding: 16px 30px;

  justify-content: space-between;
  align-items: center;

  border-radius: 0px;
  border-top: 0px solid #113;
  border-right: 0px solid #113;
  border-bottom: 1px solid #113;
  border-left: 0px solid #113;
  background: var(--color-principal-100);

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`
export const HeaderMenuContent = styled.div`
  gap: 100px;
  display: flex;
  width: 712px;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  & > div > a {
    text-decoration: none;
    color: var(--color-neutral-60);

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
`

export const HeaderUserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-neutral-60);

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 300px;
  }
`
