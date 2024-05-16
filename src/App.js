import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register } from './Pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './Pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-jobs' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};

export default App;
