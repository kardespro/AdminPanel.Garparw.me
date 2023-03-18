import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Stats from '../components/Dashboard/Stats'
export default function Index(){
  const [user,setUser] = useState({})
  useEffect(() => {
    let _check = window.localStorage.getItem("garparw-user-auth")
    if(!_check){
      window.location.href = "/auth/login"
    }
    if(_check){
      let _sessionUser = JSON.parse(_check)
      setUser(_sessionUser)
    }
  }, [])
  return(
    <>
        <Sidebar />
      <div className="pt-12"></div>
      <div>
        <h1 className="font-bold text-center text-2xl"><span className="text-indigo-500">Merhaba! </span>    {user.username}</h1>
        <p className="text-sm text-center text-gray-400 font-bold">Senin Için Botun Istatistiklerini Derledik !</p>
      </div>

      <div className="pt-12">
       <Stats />
      </div>
      </>
  )
}