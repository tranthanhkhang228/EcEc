export const Typography = {
  thin: 'MontserratAlternates-Thin',
  light: 'MontserratAlternates-Light',
  regular: 'MontserratAlternates-Regular',
  medium: 'MontserratAlternates-Medium',
  semiBold: 'MontserratAlternates-SemiBold',
  bold: 'MontserratAlternates-Bold',
  size: 20,
};

export const Color = {
  orange: '#ff9e23',
  white: '#ecf0f1',
  blue: '#3598db',
  gray: '#474747',
  green: '#1bbc9b',
  grayBlue: '#e4e5ec',
};

export const LinearGradientTemplate = {
  purple: [
    'rgba(167, 36, 75, 0)',
    'rgba(167, 36, 75, 0.1)',
    'rgba(167, 36, 75, 0.2)',
    'rgba(167, 36, 75, 0.4)',
    'rgba(167, 36, 75, 0.6)',
    'rgba(167, 36, 75, 0.8)',
    'rgb(167, 36, 75)',
    'rgb(167, 36, 75)',
    'rgb(167, 36, 75)',
  ],
  yellow: [
    'rgba(245,233,62,0)',
    'rgba(245,233,62,0)',
    'rgba(245,233,62,0)',
    'rgba(245,233,62,0)',
    'rgba(245,233,62,0.1)',
    'rgba(245,233,62,0.2)',
    'rgba(245,233,62,0.3)',
    'rgba(245,233,62,0.4)',
    'rgba(245,233,62,0.4)',
    'rgba(245,233,62,0.5)',
    'rgba(245,233,62,0.5)',
  ],
  blue: [
    'rgba(27,18,88, 0)',
    'rgba(27,18,88, 0.1)',
    'rgba(27,18,88, 0.2)',
    'rgba(27,18,88, 0.4)',
    'rgba(27,18,88, 0.6)',
    'rgba(27,18,88, 0.9)',
    'rgb(27,18,88)',
    'rgba(23,15,73, 0.8))',
    'rgb(23,15,73))',
  ],

  angleOrange: ['#ff8d18', '#ff3c4e', '#ff1a30'],
};

// Labels
const baseLabelStyles = {
  fontFamily: Typography.regular,
  fontSize: 14,
  padding: 5,
  fill: Color.blue,
  stroke: 'transparent',
};

const centeredLabelStyles = Object.assign(
  {textAnchor: 'middle'},
  baseLabelStyles,
);

// Strokes
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

// Put it all together...
export const CustomChartTheme = {
  // axis: Object.assign({
  //   style: {
  //     axis: {
  //       fill: 'transparent',
  //       stroke: '#2329de',
  //       strokeWidth: 0.5,
  //       strokeLinecap,
  //       strokeLinejoin,
  //     },
  //     axisLabel: Object.assign({}, centeredLabelStyles, {
  //       padding: 25,
  //     }),
  //     grid: {
  //       fill: 'none',
  //       stroke: 'red',
  //       pointerEvents: 'painted',
  //     },
  //     tickLabels: baseLabelStyles,
  //   },
  // }),
  bar: Object.assign({
    style: {
      data: {
        fill: Color.blue,
        padding: 8,
        strokeWidth: 0,
      },
      labels: baseLabelStyles,
    },
  }),
};
