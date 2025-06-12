import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type CloseIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const CloseIcon: React.FC<CloseIconProps> = ({
  color = '#fff',
  width = 24,
  height = 24,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height} fill="none">
      {/* Top-left arrow pointing to center */}
      <Path
        d="M9 3H7L7 7L3 7V9L9 9V3Z"
        fill={color}
      />
      {/* Top-right arrow pointing to center */}
      <Path
        d="M15 3H17L17 7L21 7V9L15 9V3Z"
        fill={color}
      />
      {/* Bottom-left arrow pointing to center */}
      <Path
        d="M9 21H7V17H3V15H9V21Z"
        fill={color}
      />
      {/* Bottom-right arrow pointing to center */}
      <Path
        d="M15 21H17V17H21V15H15V21Z"
        fill={color}
      />
    </Svg>
  );
};

export default CloseIcon;
