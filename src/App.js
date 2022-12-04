import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contacts from './Contacts/Contacts';
import Restaurants from './Restaurants/Restaurants';
import Chill from './Chill/Chill';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/restaurants' element={<Restaurants/>} />
        <Route path='/chill' element={<Chill/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
