import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Categories from './containers/categories/categories';
import Header from './components/header/header';
import { getCategories } from './redux/actions';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  return (
    <div className="App">
      <Header />
      <Categories />
      <ToastContainer
        position="top-left"
        autoClose={3500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </div>
  );
}

export default App;
