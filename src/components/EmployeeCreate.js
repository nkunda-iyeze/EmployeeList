import {Link }from 'react-router-dom'
const  EmployeeCreate = ()=> {
  return (
    <div className="flex flex-col justify-items-center items-center ">
        <div className="border p-5 bg-green-200">
            <h1 className="text-4xl">
                Employee Create 
            </h1>
            </div>
            <div  className="text-2xl my-4 border border-gray-300 p-5 rounded bg-neutral-200">
            <form action="" className=" bg-slate-100 p-6 rounded">
                <label htmlFor="id" className="block font-bold text-center">ID</label>
                <input type="text" name="id" placeholder="Enter Id" className="border border-gray-500 p-3 rounded-md focus:outline-none"/>
                <label htmlFor="name" className="block font-bold text-center">Name</label>
                <input type="text" name="name" placeholder="Enter Name" className="border border-gray-500 p-3 rounded-md focus:outline-none"/>
                <label htmlFor="email" className="block font-bold text-center">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="border border-gray-500 p-3 rounded-md focus:outline-none"/>
                <label htmlFor="phone" className="block font-bold text-center">Phone Number</label>
                <input type="text" name="phone" placeholder="Enter Id" className="border border-gray-500 p-3 rounded-md focus:outline-none"/>
                <div className="flex justify-evenly text-sm my-4">
                <label htmlFor="checkbox" className="block font-bold text-center">Is active ?</label>
                <input type="checkbox"  name="checkbox"/>
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