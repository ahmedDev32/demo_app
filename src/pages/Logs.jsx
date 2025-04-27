import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Logs = () => {

    const [logs,setLogs] = useState([])

    // useffect to get logs which i stored in localStorage
    useEffect(()=>{
        const ls_arr = JSON.parse(localStorage.getItem('logsArr'))
        setLogs(ls_arr)
    },[localStorage.setItem])

    const HandleDelete = (sid)=>{
        const filterData = logs.filter((elem)=>elem.callSid !== sid)
        setLogs(filterData)
        localStorage.setItem('logsArr',JSON.stringify(filterData))
    }

  return (
    <>
    <Navbar/>
    <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
    <h1 className="text-center text-2xl font-bold mb-4">
            Call History
          </h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
         
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Api Status
            </th>
            <th scope="col" className="px-6 py-3">
              Call Status
            </th>
            <th scope="col" className="px-6 py-3">
              Call Sid
            </th>
            
          </tr>
        </thead>
        <tbody>
            {
                logs.length > 0 && logs.map((elem,index)=>(
<tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {elem.success ? 'Passed' : 'Failed'}
            </th>
            <td className="px-6 py-4">
              {elem.status}
            </td>
            <td className="px-6 py-4">
              {elem.callSid}
            </td>
            
            <td className="px-6 py-4">
              <a onClick={()=>HandleDelete(elem?.callSid)} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
            </td>
          </tr>
                ))
            }
          
        </tbody>
      </table>
    </div>
    
    </>
    
  )
}

export default Logs