import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LeftArrow(props) {
  return (
    <Svg width={11} height={19} viewBox="0 0 11 19" {...props}>
      <Path
        fill={'#000'}
        d="M.141 9.443c.003.403.163.79.446 1.076l7.447 7.447a1.553 1.553 0 102.201-2.191L3.884 9.424l6.351-6.352A1.553 1.553 0 108.034.881L.587 8.328a1.552 1.552 0 00-.446 1.115z"
      />
    </Svg>
  );
}

export default LeftArrow;
