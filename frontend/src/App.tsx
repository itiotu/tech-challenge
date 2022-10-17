import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import CurrencyList from "./pages/CurrencyList/CurrencyList";

function App() {
  return (
    <Container>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/list"} element={<CurrencyList/>}/>
            </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
