import styled from 'styled-components'

export const NewProjectCardContainer = styled.div`
  width: 389px;
  height: 258px;
  padding: 68px 60px;

  border-radius: 4px;
  background: var(--color-neutral-70);

  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > div {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  & > div > svg {
    width: 46px;
    height: 46px;
  }

  & > p {
    color: var(--color-neutral-120);

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    opacity: 0.6;
  }

  & > p:last-child {
    margin-top: 16px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
    letter-spacing: 0.25px;
  }

  @media (max-width: 768px) {
    width: 312px;
    padding: 68px 21px;
  }
`
