import axios from 'axios'
import { useState , useEffect } from 'react'
import LibProxy from '../../lib/proxy.json'
export default function Stats(){
  const [s,setS] = useState({})
  useEffect(() => {
    setTimeout(async() => {
      let dProxy = window.localStorage.getItem("garparw-local")
      if(!dProxy){
        let data = await axios.get("https://api.garparw.me/api/v1/stats")
        setS(data.data)
      }
      if(dProxy){
        let findNetwork = LibProxy.filter(a => a.id === `${dProxy}`)
        
          let data = await axios.get("https://api.garparw.me/api/v1/stats", {
          proxy: {
            protocol: "http",
            host: findNetwork.host,
            port: findNetwork.port,
            auth : {
              username: findNetwork.user,
              password: findNetwork.password
            }
            
          }
        
        
        })
        setS(data.data)
        console.log(`Proxied Request`)
      }
    })
  })
  return(
    <>
      <div>

         <div class="flex space-x-4 justify-center items-center">
  <div>{s.guilds}
   <p className="font-bold">Guilds</p>
  </div>
  <div>{s.ping} ms
  <p className="font-bold">Ping</p>
  </div>
  <div>{s.shard}
  <p className="font-bold">Shard</p>
  </div>
</div>
      </div>
    </>
  )
}