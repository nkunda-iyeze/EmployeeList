import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
//* import apiRequest from "../apiRequest";
const EmployeeList = () => {
    const [employeeData, setEmployeeData] =useState([]);
    //! const [newEmployeeData, setNewEmployeeData] =useState([]);
    const [fetchError,setfetchError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    //* fecthing data from db.json
    useEffect(()=>{
        const fetchEmployees = async()=>{
          try {
          const response = await fetch("http://localhost:5000/employees")
          if(!response.ok) throw Error("Did not receive any data from the server")
          const data = await response.json();
          setEmployeeData(data)
          } catch (err) {
            setfetchError(err.message)
        } finally{
          setIsLoading(false)
        }
      }
      setTimeout(()=>{
        (async () =>await fetchEmployees())();
      },100); 
    },[]);

    const editFuction = (id) =>{
     
      navigate("/employee/edit/"+id);
    };
    const removeFuction = (id) =>{
    if(window.confirm("Are you sure you want to remove this ?")){
      fetch("http://localhost:5000/employees/"+id,{
      method: "DELETE",
      
    }).then(() => {
      alert("Removed Successfully !");
      window.location.reload()
    }).catch((error) => {
      console.log(error.message)
    });
    }
    };
    const detailsFuction = (id) =>{
    
      navigate("/employee/detail/"+id);
    };
  return (
    <div className="flex flex-col justify-items-center items-center">
        <div className="my-6 bg-slate-700 px-10 py-4">
            <h1 className="text-white font-mono font-extrabold text-4xl">Employee List</h1>
        </div>

       { !fetchError &&  !isLoading &&  
       <div className="my-3 flex flex-col ">
          <Link to="employee/create" className="bg-green-500 p-3 rounded text-xl text-center"> Add (+)</Link>
          <input type="text" placeholder="Seach Employee" className="mt-4 border border-blue-300  px-10 py-3 focus:outline-none rounded"/>
        </div>
        } 

   <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-xl font-light">
          {!fetchError && !isLoading && <thead className="border font-medium dark:border-neutral-500 bg-black text-white">
            <tr className=" text-center">
              <th scope="col" className="px-6 py-4">ID</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Phone</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          }
          <tbody className="text-2xl">
            { !fetchError  && !isLoading && employeeData.map((data)=>(
            <tr className="border dark:border-neutral-500" key={data.id}>
                <td className="whitespace-nowrap px-6 py-4 font-medium border-r"> {data.id} </td>
                <td className="whitespace-nowrap px-6 py-4 border-r"> {data.name} </td>
                <td className="whitespace-nowrap px-6 py-4 border-r"> {data.email} </td>
                <td className="whitespace-nowrap px-6 py-4 border-r"> {data.phone} </td>
                <td className="whitespace-nowrap px-6 py-4 border-r"> 
                    <button href="" className="bg-yellow-500 p-2 rounded font-bold uppercase text-lg mx-1 cursor-pointer" onClick={()=>{editFuction(data.id)}}>Edit</button>
                    <button href="" className="bg-red-400 p-2 rounded font-bold uppercase text-lg mx-1 cursor-pointer" onClick={()=>{removeFuction(data.id)}}>Delete</button>
                    <button href="" className="bg-blue-400 p-2 rounded font-bold uppercase text-lg mx-1 cursor-pointer" onClick={()=>{detailsFuction(data.id)}}>Details</button>
                 </td>
              </tr>))
            }
          </tbody>
        </table>
        <div className="text-center mt-6">
          {fetchError && <p className="text-red-500 font-serif text-xl">{fetchError}</p>}
          {isLoading && <p className="text-green-500 font-bold font-mono text-4xl">Data is Loading ...</p>}
        </div>
      </div>
    </div>
  </div>
</div></div>
    
  )
}

export default EmployeeList;