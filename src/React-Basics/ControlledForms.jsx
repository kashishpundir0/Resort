import { useEffect, useState } from "react"
import Useeffect from "./Useeffect"

const ControlledForm = () => {
    let[submit, setSumbit] = useState(false)
    let [data, setAllData] = useState({
        username:"",
        password:""
    })
    const handleChange = (e) => {
        let{name,value} = e.target
        // console.log(e.target);
        setAllData({...data, [name]:value})        
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("data submit");
        console.log("username :", data.username);
        console.log("password : ", data.password);
        setSumbit(true)
        setAllData({
            username:"",
            password:""
        })  
    }
    useEffect(()=>{
        console.log("component mount");
        return()=>{
            console.log("Component unmount");
        }
    },[])
    useEffect(()=>{
        if(submit)
            alert("Hello")
        setSumbit(false)
        
    },[submit])


    return (
        <div className="bg-gray-200 border rounded-2xl  w-xl h-60 flex flex-col items-center ">
            <h2 className='font-bold text-center m-2'>Controlled Forms</h2>
            <label className="font-semibold " htmlFor="">Username  </label>
            <input className=" bg-gray-100 border rounded hover:bg-gray-200" type="text" name="username" id="username" value={data.username} onChange={handleChange} />
            <br />
            <label className="font-semibold" htmlFor="">Password  </label>
           
            <input className=" bg-gray-100 border rounded hover:bg-gray-200" type="password" name="password" id="password" value={data.password} onChange={handleChange} />
          <br />
            <button className='border rounded w-24 bg-blue-300 hover:bg-blue-500' onClick={handleSubmit}>Submit</button>    
        </div>
    )
}
export default ControlledForm