import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Form />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
