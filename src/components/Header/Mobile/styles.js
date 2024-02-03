import styled from 'styled-components'

export const HeaderContainer = styled.div`
  @media (min-width: 769px) {
    & {
      display: none;
    }
  }
`

export const HeaderLogo = styled.img`
  width: 83px;
  height: 31px;
  display: flex;
  align-items: center;
`

export const HeaderUserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-neutral-60);

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 300px;
  }
`
