import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.footerBackgroundColor };
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top: 42vh;
  position: relative;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
