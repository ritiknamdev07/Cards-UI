import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import Cards from './components/cards/Cards';
import { useDispatch } from 'react-redux';
import { fetchCards } from './features/cards/CardsSlice';

function App() {
  const [count, setCount] = useState(0)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCards()) 
}, []);
  return (
    <>
     <Cards />
    </>
  )
}

export default App
