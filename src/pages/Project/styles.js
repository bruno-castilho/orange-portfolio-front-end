import styled from 'styled-components'

export const ProjectContainer = styled.div`
  max-width: 312px;
  margin: 0 auto;

  & > h5 {
    margin: 76px 0px 32px 0px;
    text-align: center;
    color: var(--color-neutral-120, #224);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    color: var(--color-neutral-110);
  }
`

export const Footer = styled.footer`
  margin-top: 24px;

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
`
