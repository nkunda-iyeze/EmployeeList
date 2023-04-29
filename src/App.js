import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeEdit from "./components/EmployeeEdit";
import EmployeeList from "./components/EmployeeList";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
   
     <div >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>} />
        <Route path="/employee/create" element={<EmployeeCreate/>} />
        <Route path="/employee/details/id" element={<EmployeeDetails/>} />
        <Route path="/employee/edit/id" element={<EmployeeEdit/>} />
      </Routes>
      </BrowserRouter>
     </div>
     );
    
}
export default App;