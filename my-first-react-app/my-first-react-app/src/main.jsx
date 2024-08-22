import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import FavouriteFood from './FavouriteFood.jsx'
import TodoList from './TodoList.jsx'
import MonthList from './MonthList.jsx'
import Button from './Button.jsx'
import Paint from './Paint.jsx'
import Component from './InfiniteLoop.jsx'
import CustomInput from './CustomInput.jsx'
import Pointer from './Pointer.jsx'

const handleButtonClick = (url) => {
  window.location.href = url;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomInput />
    <Pointer />
    {/* <InfiniteLoop /> */}
    <MonthList />
    <Paint />
    <Button handleClick={handleButtonClick}/>
    <Button text="Don't Click Me!" color="red" fontSize={12} />
    <Button fontSize={20} />
    <App />
    <TodoList />
    <Greeting />
    <FavouriteFood />
  </StrictMode>,
)
