/**
 * Created by @musta in 16/11/18
 */

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PostHeader = props => {
  return (
    <View style={style.headerContainer}>
      <Image style={style.postHeaderImage} source={require('../../../resources/user.jpg')}/>
      <View style={style.headerText}>
        <Text style={style.userName}>{props.user.name}</Text>
        <Text style={style.date}>{props.date || ((new Date()).toDateString())}</Text>
      </View>
    </View>
  );
};

PostHeader.propTypes = {

};

const style = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    marginLeft: 10
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 10
  }
});

export default PostHeader;