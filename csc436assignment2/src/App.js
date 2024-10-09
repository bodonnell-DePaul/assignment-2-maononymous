/* Name: Abdullah Omer Mohammed 
GitHub Username: maononymous
Discord Udername: maononymous*/

import React from 'react';
import './App.css';
import ToDoList from './ToDoList'; // Importing ToDoList from ToDoList.js
import { Container, Row, Col } from 'react-bootstrap'; // Importing Container, Row, and Col from react-bootstrap

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment 2: Omer's ToDo List</h1> // Header for the ToDo List
      </header>
      <Container> // Container for the ToDoList component
        <Row>
          <Col sm={8}>
            <ToDoList /> // Rendering ToDoList component
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
