import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/9764-loader.json'

import { Container } from './styles';

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    
  };

  return (
    <Container>
      <div >
        <h1>Carregando...</h1>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />

      </div>
    </Container>
  );
}

export default Loader;