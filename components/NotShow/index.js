import React, { Children } from 'react';
import {Text} from './styles'

const NotShow = (props) => {
  return (
    <Text>
      {props.text}
    </Text>
  );
};

export default NotShow;