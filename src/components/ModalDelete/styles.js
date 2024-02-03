import styled from 'styled-components'

export const ModalDeleteContainer = styled.div`
  & > h5 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    color: var(--color-neutral-110);
    margin-bottom: 32px;
  }

  & > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: 16px;
    color: var(--color-neutral-110);

    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    & > h5 {
      margin-bottom: 24px;
    }

    & > p {
      margin-bottom: 24px;
    }
  }
`
