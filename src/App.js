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
//
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });
//
//
class App extends Component {
  render() {
    return (
      <div>
        <h1>Notre premier article:</h1>
      </div>
    );
  }
}

export default App;

fetch("https://jsonplaceholder.typicode.com/todos/1");
