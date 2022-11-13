import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import './App.css';
import Edit from './component/Edit';
import Adduser from './component/Adduser';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  var data={
    montly:"45,000",
    annual:"12,00,000",
    task:20,
    pending:18
  };
  let [user,setuser]=useState([{
    name:"karthiga",
    email:"kar@gmail.com",
    mobile:"9344245002"
  },
{
  name:"karthiga rani",
  email:"karrani@gmail.com",
 mobile:"9678901987"
}])
  return <>
  <div id='wrapper'>
    <BrowserRouter>
<Sidebar/>
<Routes>
<Route path='/dashboard' element={<Dashboard data={{data,user,setuser}} />} />
<Route path='/add-user' element={<Adduser user={{user,setuser}}/>} />
<Route path='/edit/:id' element={<Edit user={{user,setuser}}/>} />
</Routes>
</BrowserRouter>
</div>

  </>
}

export default App;
