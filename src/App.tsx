import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterPage from './pages/ElementPage/CharacterPage';
import EpisodePage from './pages/ElementPage/EpisodePage';
import LocationPage from './pages/ElementPage/LocationPage';
import List, { listTypes } from './pages/List/List';
import Startpage from './pages/Startpage/Startpage';
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <Startpage /> } />
        <Route path="/characters" element={ <List type={listTypes.characters} /> } />
        <Route path="/locations" element={ <List type={listTypes.locations} /> } />
        <Route path="/episodes" element={ <List type={listTypes.episodes} /> } />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        
        <Route path="*" element={
          <div className="container">
            <h1>Page not Found</h1><h1>Page not Found</h1><h1>Page not Found</h1>
          </div>
        } />
         
      </Routes>
    </div>
  );
}

export default App;
