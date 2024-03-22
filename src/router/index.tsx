/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2022-08-07 18:04:47
 * @LastEditTime: 2024-03-12 09:56:02
 * @Description: 
 */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Playground from '../playground';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Playground />} />
        <Route path='/:id' element={<Playground />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;