import React, { Component } from "react";

class Post extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ post: result });
        // console.log(result);
      });
  }
  render() {
    return (
      <div>
        <h1> la liste de nos articles</h1>
        <div>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
