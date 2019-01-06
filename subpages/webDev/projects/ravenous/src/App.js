import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '/subpages/webDev/projects/ravenous/src/components/BusinessList/BusinessList.js';
import SearchBar from '/subpages/webDev/projects/ravenous/src/components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList />
			</div>
    );
  }
}

export default App;
