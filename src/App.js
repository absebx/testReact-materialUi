import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// componentes
import NavBar from './components/NavBar';
import CourseList from './components/CourseList';

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
