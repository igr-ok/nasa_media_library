import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import ShowPage from './pages/ShowPage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/show' element={<ShowPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;