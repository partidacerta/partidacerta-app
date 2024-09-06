import * as React from 'react';
import { View, ImageStyle } from 'react-native';

import { Svgs } from '.';
import { SvgsProps } from './svg.types';

const ROOT: ImageStyle = {
  resizeMode: 'contain',
};

export function Svg(props: SvgsProps): React.ReactElement {
  const {
    style: styleOverride,
    icon,
    containerStyle,
    width,
    color,
    fill,
  } = props;

  const SvgIcon = Svgs[icon as keyof typeof Svgs];

  const size = Number(width);

  return (
    <View style={containerStyle}>
      <SvgIcon
        style={[ROOT, styleOverride]}
        width={size || 15}
        height={size || 15}
        stroke={color}
        fill={fill ?? 'transparent'}
      />
    </View>
  );
}
