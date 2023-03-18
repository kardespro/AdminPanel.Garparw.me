import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal'
import axios from 'axios'
export default function ParaEkle(){
  const [user,setUser] = useState({})
  const [open,setOpen] = useState(false)
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
  const handleMoney = async(e) => {
    e.preventDefault()
    let data = await axios.post("https://api.garparw.me/api/v1/accounts/balance/add", {
      userID: e.target.kullaniciid.value,
      count: e.target.amount.value
    })
    setOpen(true)
  }
  return(
    <>
      <Sidebar />
      <div className="pt-12">
       <h1 className="text-center font-bold"><span className=" text-indigo-500">Merhaba!  </span> {user.username}</h1>
        <div className="flex justify-center items-center">
        <p className="text-gray-400 font-bold text-center">Bu Menüden Istenilen Kullanıcıya Garparw Coin Ekleye Bilirsin</p>
        </div>
      </div>
      <div className="pt-12">
        <form onSubmit={handleMoney}>
          <p className="pl-24 text-xs">Kullanıcı IDSI</p>
          <div className="flex justify-center items-center">
           <input 
             type="number"
             placeholder="3131333131"
             name="kullaniciid"
             className="rounded-xl py-5 px-5 bg-gray-300 border-2 border-gray-10"
             required
             />
          </div>
            <p className="pl-24 text-xs pt-6">Para Miktarı</p>
          <div className="flex justify-center items-center">
           <input 
             type="number"
             placeholder="3131333131"
             name="amount"
             className="rounded-xl py-5 px-5 bg-gray-300 border-2 border-gray-10"
             required
             />
          </div>
       <div className="flex justify-center items-center pt-12">
        <button className="rounded-xl py-5 px-5 bg-gray-300 border-2 border-gray-10 w-72" type="submit">Gönder</button>
       </div>
        </form>
      </div>
                                {open &&
                                <Modal /> 
                                }
    </>
  )
}