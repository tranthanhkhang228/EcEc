import React from 'react';

import StartButton from '../StartButton';
import NextButton from '../NextButton';
import NormalButton from '../NormalButton';

const ButtonFactory = (props) => {
  const {type} = props;

  switch (type) {
    case 'next':
      return <NextButton {...props} />;
    case 'start':
      return <StartButton {...props} />;
    default:
      return <NormalButton {...props} />;
  }
};

export default ButtonFactory;
