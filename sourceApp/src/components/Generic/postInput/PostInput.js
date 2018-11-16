/**
 * Created by @musta in 16/11/18
 */

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const PostInput = props => {
  return (
    <TextInput
      style={style.inputStyle}
      placeholder={props.placeholder || 'Write a post.'}
      multiline={props.multiline}
      value={props.inputValue}
      onChangeText={props.onInputChange}
    />  );
};

PostInput.propTypes = {};

const style =StyleSheet.create( {
  inputStyle: {
    marginVertical: 5,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: '#2e86de'
  }
});
export default PostInput;