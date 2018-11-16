/**true
 * Created by @musta in 16/11/18
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";

const Post = props => {
  return (
    <View style={style.postContainer}>
      <PostHeader user={props.user} date={props.date}/>
      <Text style={style.postText}>{props.post}</Text>
    </View>
  );
};

Post.propTypes = {
  user: PropTypes.object.isRequired,
  date: PropTypes.string,
  post: PropTypes.string.isRequired
};

const style = StyleSheet.create( {
  postText: {
    display: 'flex',
    fontSize: 16,
    color: '#2d3436',
    padding: 10,
  },
  postContainer: {
    padding: 4,
    borderWidth: 2,
    borderColor: '#74b9ff',
    borderRadius: 10,
    marginVertical: 5
    
  }
});

export default Post;