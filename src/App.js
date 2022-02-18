import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const App = () => {


  return (
    <>
    <Routes>
        <Route path="/" element={<PageOne />}></Route>
        <Route path="/anotherPage" element={<PageTwo />}></Route>
      </Routes>
    </>
  );
}

export default App;