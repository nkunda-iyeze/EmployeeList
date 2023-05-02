import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom"

const EmployeeDetails = ()=> {
  const {id} = useParams();
  const [EmployeeDetails,setEmployeeDetails] = useState({}); 
  useEffect(() => {
   fetch(`http://localhost:5000/employees/`+id)
  .then(res => res.json())
  .then(data => setEmployeeDetails(data))
  .catch((error) =>{
    console.log(error);
  })
  }, [id]);
  return (
    <div>
      {  EmployeeDetails &&
        <div className="border flex flex-col items-center py-10 text-2xl font-sans font-bold">
          <h1 className="bg-blue-500 p-4 rounded">Employee Details</h1>
          <div className="flex flex-col my-3">
          <p>Id: <span className="text-md mx-2"> {EmployeeDetails.id} </span></p>
          <p>Name: <span className="text-md mx-2"> {EmployeeDetails.name} </span></p>
          <p>Email: <span className="text-md mx-2"> {EmployeeDetails.email} </span></p>
          </div>
          <div className="py-10">
          <Link to="/" className='bg-black text-white p-4 rounded font-bold text-sm'> Back Home</Link>
          </div>
        </div>
        
        }
    </div>
  )
}

export default EmployeeDetails