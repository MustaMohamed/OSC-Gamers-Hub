/**
 * Created by @musta in 26/10/18
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class TopHeader extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    return (
      <View style={styles.topHeaderContainer}>
        <Text style={styles.topHeaderText}>{this.props.title}</Text>
      </View>
    );
  }
}

TopHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  topHeaderContainer: {
    backgroundColor: '#6d12fa',
    paddingHorizontal: 8,
    paddingVertical: 15
   
  },
  topHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default TopHeader;