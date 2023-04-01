import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx'
import EmployeeEntry from './components/EmployeeEntry.jsx'

function App() {
  return (
    <div >
  <BrowserRouter  >
 
<Routes>


   <Route exact path="/" element = {< Home />}/>
   <Route exact path="employeeform" element = {< EmployeeEntry />}/>




</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
