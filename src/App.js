// https://www.youtube.com/watch?v=kvWd1XYlvFg&t=104s SOURCE
// rafce

import React from "react";
import './App.css';
import { Container } from 'reactstrap';
import logo from './eigen.png';
import ListAPI from "./components/ListAPI";

function App() {
  return (
    <Container>
      <div>
        <img className="mb-5 mt-3 widthLogo" src={logo} alt="Logo" />
      </div>
      <ListAPI></ListAPI>
      <hr />
      <p class="text-center text-muted">© 2022 PT. Eigen Tri Mathema by Alfan Baharudin.</p>
    </Container>
  );
}

export default App;
