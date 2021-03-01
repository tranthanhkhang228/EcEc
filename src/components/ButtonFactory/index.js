import React from 'react';

import StartButton from '../StartButton';
import NextButton from '../NextButton';

const ButtonFactory = (props) => {
  const {type} = props;

  switch (type) {
    case 'next':
      return <NextButton {...props} />;
    default:
      return <StartButton {...props} />;
  }
};

export default ButtonFactory;
