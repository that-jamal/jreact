import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CounterPage from './pages/CounterPage';
import SumonPage from './pages/SumonPage';
import DicePage from './pages/DicePage';
import DealerPage from './pages/DealerPage';
import PokemonPage from './pages/PokemonPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/counter" Component={CounterPage} />
        <Route path="/sumon" Component={SumonPage} />
        <Route path="/dice" Component={DicePage} />
        <Route path="/dealer" Component={DealerPage} />
        <Route path="/pokemon" Component={PokemonPage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
