/**
 * Created by @musta in 16/11/18
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import TopHeader from "./TopHeader";

class Layout extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    
    const props = this.props;
    return (
      <View style={{flex: 1}}>
        <TopHeader title={props.title} />
        {
          props.children
        }
      </View>
    );
  }
}

Layout.propTypes = {};



export default Layout;