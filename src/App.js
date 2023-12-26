import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import ErrorPage from './page/ErrorPage/ErrorPage';
import BaseLayout from './BaseLayout';
function App() {
  return (
   <Routes>
    
    <Route path='/' element={<BaseLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='*' element={<ErrorPage/>}/>

      </Route>


   </Routes>

  );
}

export default App;
