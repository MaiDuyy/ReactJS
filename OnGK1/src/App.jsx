import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import S2 from './components/S2';
import FormAdd from './components/Add';
import { BicycleProvider } from './context/BicycleContext';

const App = () => {
  return (
    // <Provider store={store}>
      <BicycleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<S2 />} />
            <Route path="/add" element={<FormAdd />} />
          </Routes>
        </BrowserRouter>
      </BicycleProvider>
    // </Provider>
  );
};

export default App;