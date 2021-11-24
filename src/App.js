import React, { Component } from "react";
import Post from "./components/Post";
import "./App.css";
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
        // set time out pour simuler chargement(3000 = 3000ms/=3 secondes)👍🏻
        setTimeout(() => {}, 3000);
        this.setState({ post: result });
      });
  }
  render() {
    return (
      <div>
        <h1>Notre premier article:</h1>
        {/* affiche uniquement un resultat */}
        {/* <h2>{this.state.post.title}</h2> */}
        {/*  */}
        {/*  */}
        <h2>
          {this.state.post.title ? this.state.post.title : <p>Loading...</p>}
        </h2>
        <div className="separation">
          <h1 className="title">Separation de composant </h1>
        </div>
        <Post />
      </div>
    );
  }
}

export default App;
