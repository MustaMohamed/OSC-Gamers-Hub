/**
 * Created by @musta in 26/10/18
 */

import React, { Component } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { Layout, Post, PostInput } from "./src/components/components";


class Application extends Component {
  
  state = {
    newPost: '',
    posts: [
      {key: '1', user: {name: 'Ahmed ALi'}, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rem.'},
      {key: '2', user: {name: 'Mai Ahmed'}, post:  '.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis deleniti fugiat quasi similique soluta tempore. Alias dignissimos eaque impedit laborum magni quidem, quisquam ratione reprehenderit unde.'},
      {key: '3', user: {name: 'Zezo Lolo'}, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rem.'},
      {key: '4', user: {name: 'Zezo Lolo'}, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rem.'},
      {key: '7', user: {name: 'Mai Ahmed'}, post:  '.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis deleniti fugiat quasi similique soluta tempore. Alias dignissimos eaque impedit laborum magni quidem, quisquam ratione reprehenderit unde.'},
  
      {key: '5', user: {name: 'Zezo Lolo'}, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rem.'},
      {key: '6', user: {name: 'Mai Ahmed'}, post:  '.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis deleniti fugiat quasi similique soluta tempore. Alias dignissimos eaque impedit laborum magni quidem, quisquam ratione reprehenderit unde.'},

    ]
  };
  postsRenderItem = (obj) => {
    return(<Post {...(obj.item)}/>);
  };
  
  handlePost = (post) => {
    this.setState({newPost: post});
  };
  
  submitPost = () => {
    this.setState(prevState => {
      return {posts: [...(prevState.posts),
        {key: prevState.posts.length+'',user: {name: 'User'}, post: prevState.newPost}], newPost: ''}
    });
    
  
  };
  
  render () {
    
    const {posts} = this.state;
    
    return (
      <Layout title={'Gamers Hub'}>
        <View style={styles.container}>
          
          <View style={styles.postForm}>
            <PostInput
              multiline={true}
              onInputChange={this.handlePost}
              inputValue={this.state.newPost}
            />
            <Button title="Post" onPress={this.submitPost}/>
          </View>
          <FlatList renderItem={this.postsRenderItem} data={posts} />
          
        </View>
      </Layout>

    );
  }
}

Application.propTypes = {};

export default Application;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    backgroundColor: '#c8d6e5',
  },
  postForm: {
    marginVertical: 5
  }

});
