import { useState } from 'react'
import {Link, useNavigate }from 'react-router-dom'
const  EmployeeCreate = () => {
    // const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [active, setActive] = useState(false)
    const [validation, setValidation] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const empData = {name,email,phone,active}
      fetch("http://localhost:5000/employees",{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(empData)
      }).then(() => {
        alert("Saved Successfully !");
        navigate("/");
      }).catch((error) => {
        console.log(error.message)
      });
    }
  return (
    <div className="flex flex-col justify-items-center items-center ">
        <div className="border p-5 bg-green-200">
            <h1 className="text-4xl">
                Employee Create 
            </h1>
            </div>
            <div  className="text-2xl my-4 border border-gray-300 p-5 rounded bg-neutral-200">
            <form action="" className=" bg-slate-100 p-6 rounded flex flex-col" onSubmit={handleSubmit}>
                {/* <label htmlFor="id" className="block font-bold text-center" >ID</label> */}
                {/* <input type="text" name="id" placeholder="Enter Id" className="border border-gray-500 p-3 rounded-md focus:outline-none" value={id} disabled/> */}
                <label htmlFor="name" className="block font-bold text-center">Name</label>
                <input type="text" id="name" placeholder="Enter Name" className="border border-gray-500 p-3 rounded-md focus:outline-none" value={name} onMouseDown={()=>setValidation(true)} onChange={(e)=> setName(e.target.value)} required/>
                {name==='' && validation && <span className='text-red-500 font-mono font-bold text-lg text-center'>Name Required</span>}
                <label htmlFor="email" className="block font-bold text-center">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="border border-gray-500 p-3 rounded-md focus:outline-none" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                {email==='' && validation && <span className='text-red-500 font-mono font-bold text-lg text-center'>Email  Required</span>}
                <label htmlFor="phone" className="block font-bold text-center">Phone Number</label>
                <input type="text" name="phone" placeholder="Enter Id" className="border border-gray-500 p-3 rounded-md focus:outline-none" value={phone} onChange={(e)=>setPhone(e.target.value) } required/>
                {phone==='' && validation && <span className='text-red-500 font-mono font-bold text-lg text-center'>phone Required</span>}
                <div className="flex justify-evenly text-sm my-4">
                <label htmlFor="checkbox" className="block font-bold text-center">Is active ?</label>
                <input type="checkbox"  name="checkbox" checked={active}  onChange={(e)=>setActive(e.target.checked)} />
                </div>
                    <div className='flex justify-evenly'>
                    <button className="bg-blue-500 text-white p-4 rounded font-bold" type="submit">Submit </button>
                    <Link to="/" className='bg-black text-white p-4 rounded font-bold'> Back Home</Link>
                    </div>
            </form>
            </div>
    </div>
    
  )
}

export default EmployeeCreate