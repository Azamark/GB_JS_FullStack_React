import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Notfound from './pages/NotFounf.jsx';
import ChatPage from './pages/ChatPage.jsx';
import { FormPage } from './pages/FormPage.jsx';
import Profile from './pages/Profile.jsx';
import { Provider } from 'react-redux';
import { store } from './reduxSample/store'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='form' element={<FormPage />} />
              <Route path='chat/:id' element={<ChatPage />} />
              <Route path='profile' element={<Profile />} />
              <Route path='*' element={<Notfound />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;
