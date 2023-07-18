import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import ShowPage from './pages/ShowPage';
import { useState } from 'react';

const App = () => {

  let previosData = JSON.parse(sessionStorage.getItem('nasa_collection_items')) || [];

  return (
    <div>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/show' element={previosData !== null ? <ShowPage /> : <h3>No data, try to search first</h3>} />          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;