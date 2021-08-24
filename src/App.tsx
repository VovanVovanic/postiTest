import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Categories from './containers/categories/categories';
import Header from './components/header/header';
import { getCategories } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
