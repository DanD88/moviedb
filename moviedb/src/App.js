import React, {Component} from 'react'

import SearchMovie from "./components/searchMovie"

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <h1 className="title">Movie Search</h1>
          <SearchMovie />
        </div>

      </div>
    )
  }
}

export default App;
