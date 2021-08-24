import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getCategories } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
