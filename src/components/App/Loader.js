import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #00008B;
  border-top: 4px solid #51557A;
  margin: 40px auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.6s linear infinite;
`;

export default Loader;