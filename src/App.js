import React, { Component } from "react";
//
//
//promesse dans des promesses (pas ouf😒)
//
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//   response = response.json();
//   response.then((result) => {
//     console.log(result);
//   });
// });
//promesse faites a la suite (nice😜)
// //
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });
//
//
class App extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // set time out pour simuler chargement(1500 = 1500ms/=1.5 seconde)👍🏻
        setTimeout(() => {}, 1500);
        this.setState({ post: result });
      });
  }
  render() {
    return (
      <div>
        <h1>Notre premier article:</h1>
        <h2>{this.state.post.title}</h2>
      </div>
    );
  }
}

export default App;
