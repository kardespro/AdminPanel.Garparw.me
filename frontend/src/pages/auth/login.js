import { useState } from 'react'
export default function Login(){
  const [error,setError] = useState()
   let user = [
    {
      "username": "Katoive",
      "password": "katoive123client"
    },
    {
      "username": "Nego",
      "password": "Negodev123Client"
    },
    {
      "username": "Nicat",
      "password": "NicatFirdovsiEyşın"
    }
  ]
  
  const handleLogin = (e) => {
    e.preventDefault()
    let data = user.find(a => a.username === e.target.username.value && a.password === e.target.password.value)
    if(!data){
      setError("Auth Access Denied")
    }
    if(data){
      
      let session = { "username": e.target.username.value, "password": e.target.password.value}
      let fix = JSON.stringify(session)
      window.localStorage.setItem("garparw-user-auth", fix)
      window.location.href = "/"
    }
  }
  return(
    <>
      <div className="pt-6"></div>
      <h1 className="text-gray-300 text-center font-bold text-2xl">Garparw Admin Panel</h1>
    {error &&
    <p className="text-center text-xs text-red-400">{error}</p>
    }
      <div className="pt-6"></div>
      
    <form onSubmit={handleLogin} className="flexx justify-center items-center">
     <div className="flex justify-center items-center">
      <input name="username" type="text" className="rounded-xl py-5 px-6 bg-gray-300" placeholder="Username" required/>
     
     </div>
      <div className="pt-6"></div>
     <div className="flex justify-center items-center">
      <input name="password" type="password" className="rounded-xl py-5 px-6 bg-gray-300" placeholder="Password" required/>
    
     </div>
      <div className="pt-6"></div>
      <div className="pt-6"></div>
      
     <div className="flex justify-center items-center">
      <button type="submit" className="rounded-xl py-5 px-6 bg-gray-300 w-64">Login</button>
     </div>
    </form>
    </>
  )
}