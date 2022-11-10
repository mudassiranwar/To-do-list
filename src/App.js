import React from 'react';
import './App.css';
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import Footer from './component/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ToDoList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
