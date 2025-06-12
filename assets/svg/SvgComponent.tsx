import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

type ToggleIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const ToggleIcon: React.FC<ToggleIconProps> = ({
  color = '#000',
  width = 24,
  height = 24,
  
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Rect x="3" y="3" width="7" height="7" fill={color} rx="1" />
      <Rect x="14" y="3" width="7" height="7" fill={color} rx="1" />
      <Rect x="3" y="14" width="7" height="7" fill={color} rx="1" />
      <Rect x="14" y="14" width="7" height="7" fill={color} rx="1" />
    </Svg>
  );
};

export default ToggleIcon;
