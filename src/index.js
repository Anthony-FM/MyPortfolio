import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import Error404 from './pages/404';

// Provider
import { Provider } from 'react-redux';
import store from './utils/redux/store';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Error404/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  </React.StrictMode>
);