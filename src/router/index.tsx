import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Playground from '../playground';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Playground />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;