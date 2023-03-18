import axios from 'axios'
import { useState , useEffect } from 'react'
export default function Stats(){
  const [s,setS] = useState({})
  useEffect(() => {
    (async() => {
      try{
        let data = await axios.get("https://api.garparw.me/api/v1/stats")
        setS(data.data)
      }catch(err){
        console.log(`Garparw WebSocket Connection Error . reconnecting ws://ws.garparw.me:60 WebSocket Path: /useApplication?modules=gzip,gzip-nego,tgz&afterTRY=3000`)
      }
    })()
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