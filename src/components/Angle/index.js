import React from 'react';
import {View} from 'react-native';

const Angle = ({color, width, height, direction}) => {
  return <View style={createStyle(color, width, height, direction)} />;
};

export default Angle;

const createStyle = (color, width, height, direction) => {
  let rotate = '';
  switch (direction) {
    case 'topright':
      rotate = '90deg';
      break;
    case 'bottomright':
      rotate = '180deg';
      break;
    case 'bottomleft':
      rotate = '270deg';
      break;
    default:
      rotate = '0deg';
  }

  const styles = {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',

    borderRightWidth: width,
    borderTopWidth: height,

    borderRightColor: 'transparent',
    borderTopColor: color,

    transform: [{rotate: `${rotate}`}],
  };

  if (direction) {
    direction.includes('top') ? (styles['top'] = 0) : (styles['bottom'] = 0);
  }

  return styles;
};
